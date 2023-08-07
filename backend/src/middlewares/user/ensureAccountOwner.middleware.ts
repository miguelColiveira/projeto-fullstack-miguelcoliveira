import { NextFunction, Request, Response } from "express";
import { AppError } from "../../errors/AppError";

export async function ensureAccountOwner(
    req: Request,
    res: Response,
    next: NextFunction
) {
    const tokenId = Number(res.locals.id);
    const reqId = Number(req.params.id);

    if (tokenId !== reqId) {
        throw new AppError("Unauthorized", 401);
    }

    return next();
}
