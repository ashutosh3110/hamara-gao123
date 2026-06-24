import mongoose from 'mongoose';

const DeliveryBoySchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  vehicleType: {
    type: String,
    required: true,
    trim: true,
  },
  vehicleNumber: {
    type: String,
    required: true,
    trim: true,
  },
  phone: {
    type: String,
    required: true,
    trim: true,
  },
  status: {
    type: String,
    enum: ['Offline', 'Available', 'On Delivery'],
    default: 'Offline',
    required: true,
  },
}, {
  timestamps: true,
});

export const DeliveryBoy = mongoose.model('DeliveryBoy', DeliveryBoySchema);
export default DeliveryBoy;
