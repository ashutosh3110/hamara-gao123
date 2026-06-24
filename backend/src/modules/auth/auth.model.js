import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
    trim: true,
    lowercase: true,
    match: [/^\S+@\S+\.\S+$/, 'Please use a valid email address'],
  },
  password: {
    type: String,
    required: [true, 'Password is required'],
    minlength: 6,
  },
  role: {
    type: String,
    enum: ['Customer', 'Vendor', 'Delivery Boy', 'Admin'],
    required: [true, 'Role is required'],
  },
  isActive: {
    type: Boolean,
    default: true,
  },
  refreshToken: {
    type: String,
    default: null,
  },
}, {
  timestamps: true,
});

export const User = mongoose.model('User', UserSchema);
export default User;
