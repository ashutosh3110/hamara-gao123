import mongoose from 'mongoose';

const VendorSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  storeName: {
    type: String,
    required: true,
    trim: true,
  },
  phone: {
    type: String,
    required: true,
    trim: true,
  },
  address: {
    type: String,
    required: true,
    trim: true,
  },
  status: {
    type: String,
    enum: ['Pending', 'Active', 'Suspended'],
    default: 'Pending',
    required: true,
  },
}, {
  timestamps: true,
});

export const Vendor = mongoose.model('Vendor', VendorSchema);
export default Vendor;
