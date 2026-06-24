import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
  res.status(200).json({
    status: 'success',
    message: 'Categories listing route placeholder',
  });
});

export default router;
