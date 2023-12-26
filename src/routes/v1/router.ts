import { Request, Response, NextFunction, Router } from "express";
const router = Router();

import authRouter from "./authRouter";
import depositRouter from "./depositRouter";
import balanceRouter from "./balanceRouter";
import quotationRouter from "./quotationRouter";
import purchaseRouter from "./purchaseRouter";
import investmentPositionRouter from "./investmentPositionRouter";
import saleRouter from "./saleRouter";
import statementRouter from "./statementRouter";
import volumeRouter from "./volumeRouter";
import historicalRouter from "./historicalRouter";

router.use('/auth', authRouter);
router.use('/deposit', depositRouter);
router.use('/balance', balanceRouter);
router.use('/quotation', quotationRouter);
router.use('/purchase', purchaseRouter);
router.use('/investment-position', investmentPositionRouter);
router.use('/sale', saleRouter);
router.use('/statement', statementRouter);
router.use('/volume', volumeRouter);
router.use('/historical', historicalRouter);

export default router;
