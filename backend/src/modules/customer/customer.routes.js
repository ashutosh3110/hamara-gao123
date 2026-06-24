import { Router } from 'express';

const router = Router();

router.get('/profile', (req, res) => {
  res.status(200).json({
    status: 'success',
    message: 'Customer profile route placeholder',
  });
});

export default router;
