import AuthService from './auth.service.js';

export class AuthController {
  static async register(req, res, next) {
    try {
      const {
        email,
        password,
        role,
        firstName,
        lastName,
        phone,
        storeName,
        address,
        vehicleType,
        vehicleNumber,
      } = req.body;

      const profileDetails = {
        firstName,
        lastName,
        phone,
        storeName,
        address,
        vehicleType,
        vehicleNumber,
      };

      const user = await AuthService.registerUser({
        email,
        password,
        role,
        profileDetails,
      });

      res.status(201).json({
        status: 'success',
        message: 'User registered successfully',
        data: {
          id: user._id,
          email: user.email,
          role: user.role,
        },
      });
    } catch (error) {
      next(error);
    }
  }

  static async login(req, res, next) {
    try {
      const { phone, password } = req.body;
      const result = await AuthService.loginUser(phone, password);

      // Set refresh token as HTTP-Only cookie
      res.cookie('refreshToken', result.refreshToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
      });

      res.status(200).json({
        status: 'success',
        message: 'Login successful',
        data: result,
      });
    } catch (error) {
      next(error);
    }
  }

  static async refresh(req, res, next) {
    try {
      const token = req.body.refreshToken || req.cookies?.refreshToken;
      const result = await AuthService.refreshAccessToken(token);

      res.status(200).json({
        status: 'success',
        data: result,
      });
    } catch (error) {
      next(error);
    }
  }

  static async logout(req, res, next) {
    try {
      const userId = req.user._id;
      await AuthService.logoutUser(userId);

      // Clear cookie
      res.clearCookie('refreshToken');

      res.status(200).json({
        status: 'success',
        message: 'Logged out successfully',
      });
    } catch (error) {
      next(error);
    }
  }

  static async getMe(req, res, next) {
    try {
      const user = req.user;
      
      // Load user profile details dynamically
      let profile = null;
      let pincode = '';
      
      if (user.role === 'Customer') {
        const Customer = (await import('../customer/customer.model.js')).default;
        const Address = (await import('../customer/address.model.js')).default;
        profile = await Customer.findOne({ userId: user._id });
        const address = await Address.findOne({ userId: user._id });
        pincode = address?.pincode || '';
      } else if (user.role === 'Vendor') {
        const Vendor = (await import('../vendor/vendor.model.js')).default;
        profile = await Vendor.findOne({ userId: user._id });
        pincode = profile?.pincode || '';
      } else if (user.role === 'Delivery Boy') {
        const DeliveryBoy = (await import('../delivery/delivery.model.js')).default;
        profile = await DeliveryBoy.findOne({ userId: user._id });
        pincode = profile?.pincode || '';
      }

      res.status(200).json({
        status: 'success',
        data: {
          id: user._id,
          email: user.email,
          role: user.role,
          firstName: profile?.firstName || '',
          lastName: profile?.lastName || '',
          phone: profile?.phone || '',
          pincode: pincode || '',
        },
      });
    } catch (error) {
      next(error);
    }
  }
}

export default AuthController;
