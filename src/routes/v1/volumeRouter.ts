// volumeRouter.ts
import { Router } from 'express';
import { getVolume } from '@src/controllers/volumeController';

const volumeRouter = Router();

volumeRouter.get('/volume', getVolume);

export default volumeRouter;