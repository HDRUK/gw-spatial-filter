import { Request, Response, NextFunction } from 'express';
import { nextTick } from 'process';

export default function checkMinLengthMiddleware(
    req: Request,
    res: Response,
    next: NextFunction,
) {
    const { filter } = req.params;

    const minNumberOfChars = parseInt(
        process.env.MIN_NUMBER_OF_CHARS as string,
        10,
    );

    if (filter.length < minNumberOfChars) {
        return res.status(400).json({
            message: `You must provide a string filter with minim ${minNumberOfChars} characters`,
        });
    }

    next();
}
