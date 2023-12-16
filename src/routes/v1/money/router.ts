import { Request, Response, NextFunction, Router } from 'express';

const router = Router();

export const moneyRouter = (
  req: Request,
  res: Response,
  next: NextFunction
) => {    
  res.json({message: 'R$: 100000000.00'}).end();
};

router.get("/", moneyRouter);

export default router;
