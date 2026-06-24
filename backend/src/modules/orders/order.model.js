import mongoose from 'mongoose';

const OrderItemSchema = new mongoose.Schema({
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product',
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
    min: 1,
  },
  price: {
    type: Number,
    required: true,
    min: 0,
  },
});

const OrderSchema = new mongoose.Schema({
  customerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Customer',
    required: true,
  },
  vendorId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Vendor',
    required: true,
  },
  deliveryBoyId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'DeliveryBoy',
    default: null,
  },
  addressId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Address',
    required: true,
  },
  items: {
    type: [OrderItemSchema],
    required: true,
    validate: [(val) => val.length > 0, 'An order must contain at least one item'],
  },
  totalAmount: {
    type: Number,
    required: true,
    min: 0,
  },
  status: {
    type: String,
    enum: ['Placed', 'Accepted', 'Preparing', 'Out for Delivery', 'Delivered', 'Cancelled'],
    default: 'Placed',
    required: true,
  },
  paymentStatus: {
    type: String,
    enum: ['Pending', 'Paid', 'Failed'],
    default: 'Pending',
    required: true,
  },
  paymentMethod: {
    type: String,
    enum: ['COD', 'Online'],
    required: true,
  },
}, {
  timestamps: true,
});

export const Order = mongoose.model('Order', OrderSchema);
export default Order;
