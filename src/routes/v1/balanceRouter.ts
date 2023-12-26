// balanceRouter.ts
import { Router } from 'express';
import { checkBalance } from '@src/controllers/balanceController';

const balanceRouter = Router();

balanceRouter.get('/balance', checkBalance);

export default balanceRouter;