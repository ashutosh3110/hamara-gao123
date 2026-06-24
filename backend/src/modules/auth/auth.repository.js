import User from './auth.model.js';
import Customer from '../customer/customer.model.js';
import Vendor from '../vendor/vendor.model.js';
import DeliveryBoy from '../delivery/delivery.model.js';

export class AuthRepository {
  static async findByEmail(email) {
    return await User.findOne({ email });
  }

  static async findById(id) {
    return await User.findById(id);
  }

  static async findByPhone(phone) {
    // Check Customer profile
    const customer = await Customer.findOne({ phone });
    if (customer) return await User.findById(customer.userId);

    // Check Vendor profile
    const vendor = await Vendor.findOne({ phone });
    if (vendor) return await User.findById(vendor.userId);

    // Check DeliveryBoy profile
    const delivery = await DeliveryBoy.findOne({ phone });
    if (delivery) return await User.findById(delivery.userId);

    return null;
  }

  static async create(userData, session = null) {
    const docs = await User.create([userData], { session });
    return docs[0];
  }

  static async update(id, updateData, session = null) {
    return await User.findByIdAndUpdate(id, updateData, { new: true, session });
  }

  // Create role-specific profiles
  static async createCustomerProfile(customerData, session = null) {
    const docs = await Customer.create([customerData], { session });
    return docs[0];
  }

  static async createVendorProfile(vendorData, session = null) {
    const docs = await Vendor.create([vendorData], { session });
    return docs[0];
  }

  static async createDeliveryProfile(deliveryData, session = null) {
    const docs = await DeliveryBoy.create([deliveryData], { session });
    return docs[0];
  }
}

export default AuthRepository;
