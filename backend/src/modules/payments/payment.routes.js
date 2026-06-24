import { Router } from 'express';

const router = Router();

router.get('/transactions', (req, res) => {
  res.status(200).json({
    status: 'success',
    message: 'Payments transactions route placeholder',
  });
});

export default router;
