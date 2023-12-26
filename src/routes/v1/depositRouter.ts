// depositRouter.ts
import { Router } from 'express';
import { makeDeposit } from '@src/controllers/depositController';

const depositRouter = Router();

depositRouter.post('/deposit', makeDeposit);

export default depositRouter;