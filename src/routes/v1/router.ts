import { Request, Response, NextFunction, Router } from 'express';
import { moneyRouter } from './money/router';

const router = Router();

router.use("/money", moneyRouter);
router.use("/money", moneyRouter);

export default router;
