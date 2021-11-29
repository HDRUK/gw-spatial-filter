import { Request, Response, NextFunction } from 'express';

export default function checkStringMiddleware(
    req: Request,
    res: Response,
    next: NextFunction,
) {
    const { filter } = req.params;

    if (!filter.match(/^[a-zA-Z]+$/)) {
        return res.status(400).json({
            message: `You must provide a string filter`,
        });
    }

    next();
}
