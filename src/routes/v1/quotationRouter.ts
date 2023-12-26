// quotationRouter.ts
import { Router } from 'express';
import { getQuotation } from '@src/controllers/quotationController';

const quotationRouter = Router();

quotationRouter.get('/quotation', getQuotation);

export default quotationRouter;