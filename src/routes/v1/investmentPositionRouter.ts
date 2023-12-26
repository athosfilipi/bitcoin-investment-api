// investmentPositionRouter.ts
import { Router } from 'express';
import { getInvestmentPosition } from '@src/controllers/investmentPositionController';

const investmentPositionRouter = Router();

investmentPositionRouter.get('/investment-position', getInvestmentPosition);

export default investmentPositionRouter;