import { Router } from 'express';
import authRoutes from '../modules/auth/auth.routes.js';
import customerRoutes from '../modules/customer/customer.routes.js';
import vendorRoutes from '../modules/vendor/vendor.routes.js';
import deliveryRoutes from '../modules/delivery/delivery.routes.js';
import productRoutes from '../modules/products/product.routes.js';
import orderRoutes from '../modules/orders/order.routes.js';
import categoryRoutes from '../modules/categories/category.routes.js';
import paymentRoutes from '../modules/payments/payment.routes.js';
import notificationRoutes from '../modules/notifications/notification.routes.js';

const router = Router();

// Register Module Routes
router.use('/auth', authRoutes);
router.use('/customers', customerRoutes);
router.use('/vendors', vendorRoutes);
router.use('/delivery', deliveryRoutes);
router.use('/products', productRoutes);
router.use('/orders', orderRoutes);
router.use('/categories', categoryRoutes);
router.use('/payments', paymentRoutes);
router.use('/notifications', notificationRoutes);

// Module API Health Check
router.get('/health', (req, res) => {
  res.status(200).json({
    status: 'success',
    message: 'Hamara Gaon API v1 is fully operational',
  });
});

export default router;
