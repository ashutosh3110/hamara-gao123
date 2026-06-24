import { body, validationResult } from 'express-validator';

export const validateRequest = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      status: 'error',
      errors: errors.array().map((err) => ({
        field: err.path,
        message: err.msg,
      })),
    });
  }
  next();
};

export const registerValidationRules = [
  body('email')
    .isEmail()
    .withMessage('Must be a valid email address')
    .normalizeEmail(),
  body('password')
    .isLength({ min: 6 })
    .withMessage('Password must be at least 6 characters long'),
  body('role')
    .isIn(['Customer', 'Vendor', 'Delivery Boy', 'Admin'])
    .withMessage('Must select a valid role (Customer, Vendor, Delivery Boy, Admin)'),
  body('phone')
    .notEmpty()
    .withMessage('Phone number is required'),
  body('firstName')
    .if(body('role').equals('Customer'))
    .notEmpty()
    .withMessage('First name is required for Customers'),
  body('lastName')
    .if(body('role').equals('Customer'))
    .notEmpty()
    .withMessage('Last name is required for Customers'),
  body('storeName')
    .if(body('role').equals('Vendor'))
    .notEmpty()
    .withMessage('Store name is required for Vendors'),
  body('address')
    .if(body('role').equals('Vendor'))
    .notEmpty()
    .withMessage('Address is required for Vendors'),
  body('vehicleType')
    .if(body('role').equals('Delivery Boy'))
    .notEmpty()
    .withMessage('Vehicle type is required for Delivery Boys'),
  body('vehicleNumber')
    .if(body('role').equals('Delivery Boy'))
    .notEmpty()
    .withMessage('Vehicle number is required for Delivery Boys'),
];

export const loginValidationRules = [
  body('phone')
    .notEmpty()
    .withMessage('Phone number is required'),
  body('password')
    .notEmpty()
    .withMessage('Password is required'),
];
export default {
  validateRequest,
  registerValidationRules,
  loginValidationRules,
};
