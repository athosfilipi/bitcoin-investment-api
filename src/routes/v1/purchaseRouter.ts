// purchaseRouter.ts
import { Router } from 'express';
import { makePurchase } from '@src/controllers/purchaseController';

const purchaseRouter = Router();

purchaseRouter.post('/purchase', makePurchase);

export default purchaseRouter;