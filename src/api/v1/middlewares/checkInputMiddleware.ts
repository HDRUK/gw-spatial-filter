import { Request, Response, NextFunction } from 'express';

export default function checkInputMiddleware(
    req: Request,
    res: Response,
    next: NextFunction,
) {
    const { filter } = req.params;

    if (!filter) {
        return res.status(400).json({
            message: `You must provide a filter`,
        });
    }

    next();
}
