import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import mongoose from 'mongoose';
import AuthRepository from './auth.repository.js';

export class AuthService {
  static generateAccessToken(user) {
    return jwt.sign(
      { id: user.id, email: user.email, role: user.role },
      process.env.JWT_ACCESS_SECRET,
      { expiresIn: process.env.JWT_ACCESS_EXPIRATION }
    );
  }

  static generateRefreshToken(user) {
    return jwt.sign(
      { id: user.id },
      process.env.JWT_REFRESH_SECRET,
      { expiresIn: process.env.JWT_REFRESH_EXPIRATION }
    );
  }

  static async registerUser({ email, password, role, profileDetails }) {
    const existingUser = await AuthRepository.findByEmail(email);
    if (existingUser) {
      const error = new Error('Email is already registered');
      error.statusCode = 400;
      error.isOperational = true;
      throw error;
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    try {
      // First attempt: use transaction session
      return await this._executeRegistration({ email, password: hashedPassword, role, profileDetails }, true);
    } catch (error) {
      // If standalone database, it throws: "Transaction numbers are only allowed on a replica set member or mongos"
      if (error.message && (error.message.includes('Transaction numbers') || error.code === 20)) {
        console.warn('MongoDB standalone detected. Retrying registration without transaction session.');
        return await this._executeRegistration({ email, password: hashedPassword, role, profileDetails }, false);
      }
      throw error;
    }
  }

  static async _executeRegistration({ email, password, role, profileDetails }, useSession) {
    let session = null;
    if (useSession) {
      try {
        session = await mongoose.startSession();
        session.startTransaction();
      } catch (e) {
        session = null;
      }
    }

    try {
      const newUser = await AuthRepository.create(
        { email, password, role },
        session
      );

      if (role === 'Customer') {
        await AuthRepository.createCustomerProfile(
          {
            userId: newUser._id,
            firstName: profileDetails.firstName,
            lastName: profileDetails.lastName,
            phone: profileDetails.phone,
          },
          session
        );
      } else if (role === 'Vendor') {
        await AuthRepository.createVendorProfile(
          {
            userId: newUser._id,
            storeName: profileDetails.storeName,
            phone: profileDetails.phone,
            address: profileDetails.address,
          },
          session
        );
      } else if (role === 'Delivery Boy') {
        await AuthRepository.createDeliveryProfile(
          {
            userId: newUser._id,
            vehicleType: profileDetails.vehicleType,
            vehicleNumber: profileDetails.vehicleNumber,
            phone: profileDetails.phone,
          },
          session
        );
      }

      if (session) {
        await session.commitTransaction();
        session.endSession();
      }

      return newUser;
    } catch (error) {
      if (session) {
        try {
          await session.abortTransaction();
          session.endSession();
        } catch (e) {
          // ignore session abort errors during failure handling
        }
      }
      throw error;
    }
  }

  static async loginUser(phone, password) {
    const user = await AuthRepository.findByPhone(phone);
    if (!user) {
      const error = new Error('Invalid phone number or password');
      error.statusCode = 401;
      error.isOperational = true;
      throw error;
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      const error = new Error('Invalid phone number or password');
      error.statusCode = 401;
      error.isOperational = true;
      throw error;
    }

    if (!user.isActive) {
      const error = new Error('Your account is deactivated. Please contact support.');
      error.statusCode = 403;
      error.isOperational = true;
      throw error;
    }

    // Generate tokens
    const accessToken = this.generateAccessToken(user);
    const refreshToken = this.generateRefreshToken(user);

    // Save refresh token to user
    await AuthRepository.update(user._id, { refreshToken });

    return {
      user: {
        id: user._id,
        email: user.email,
        role: user.role,
      },
      accessToken,
      refreshToken,
    };
  }

  static async refreshAccessToken(token) {
    if (!token) {
      const error = new Error('Refresh token is required');
      error.statusCode = 401;
      error.isOperational = true;
      throw error;
    }

    try {
      const decoded = jwt.verify(token, process.env.JWT_REFRESH_SECRET);
      const user = await AuthRepository.findById(decoded.id);

      if (!user || user.refreshToken !== token) {
        const error = new Error('Invalid refresh token');
        error.statusCode = 401;
        error.isOperational = true;
        throw error;
      }

      if (!user.isActive) {
        const error = new Error('User account is inactive');
        error.statusCode = 403;
        error.isOperational = true;
        throw error;
      }

      const newAccessToken = this.generateAccessToken(user);
      return { accessToken: newAccessToken };
    } catch (error) {
      const err = new Error('Invalid or expired refresh token');
      err.statusCode = 401;
      err.isOperational = true;
      throw err;
    }
  }

  static async logoutUser(userId) {
    await AuthRepository.update(userId, { refreshToken: null });
    return true;
  }
}

export default AuthService;
