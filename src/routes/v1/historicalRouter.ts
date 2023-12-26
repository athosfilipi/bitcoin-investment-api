// historicalRouter.ts
import { Router } from 'express';
import { getHistoricalData } from '@src/controllers/historicalController';

const historicalRouter = Router();

historicalRouter.get('/historical', getHistoricalData);

export default historicalRouter;