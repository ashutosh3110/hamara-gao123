import { Router } from 'express';

const router = Router();

router.get('/profile', (req, res) => {
  res.status(200).json({
    status: 'success',
    message: 'Vendor profile route placeholder',
  });
});

export default router;
