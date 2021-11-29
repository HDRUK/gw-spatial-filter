import express, { Request, Response, Router } from 'express';
import {
    checkInputMiddleware,
    checkMinLengthMiddleware,
    checkStringMiddleware,
} from '../middlewares/index';

const router: Router = express.Router();
const LocationController = require('../constrollers/LocationController');

router.get(
    '/locations/:filter',
    [checkInputMiddleware, checkMinLengthMiddleware, checkStringMiddleware],
    (req: Request, res: Response) => LocationController.getData(req, res),
);

export default router;
