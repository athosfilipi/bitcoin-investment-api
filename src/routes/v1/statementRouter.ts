// statementRouter.ts
import { Router } from 'express';
import { getStatement } from '@src/controllers/statementController';

const statementRouter = Router();

statementRouter.get('/statement', getStatement);

export default statementRouter;