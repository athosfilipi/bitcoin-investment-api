// saleRouter.ts
import { Router } from 'express';
import { sellBitcoins } from '@src/controllers/saleController';

const saleRouter = Router();

saleRouter.post('/sell-bitcoins', sellBitcoins);

export default saleRouter;