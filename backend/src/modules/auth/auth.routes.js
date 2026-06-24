import { Router } from 'express';
import AuthController from './auth.controller.js';
import { authenticate } from '../../middleware/auth.middleware.js';
import {
  registerValidationRules,
  loginValidationRules,
  validateRequest,
} from './auth.validation.js';

const router = Router();

// Public endpoints
router.post('/register', registerValidationRules, validateRequest, AuthController.register);
router.post('/login', loginValidationRules, validateRequest, AuthController.login);
router.post('/refresh', AuthController.refresh);

// Protected endpoints
router.post('/logout', authenticate, AuthController.logout);
router.get('/me', authenticate, AuthController.getMe);

export default router;
