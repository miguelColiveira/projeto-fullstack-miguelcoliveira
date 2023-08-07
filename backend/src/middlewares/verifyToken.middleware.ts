import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import { AppError } from "../errors/AppError";

export async function verifyToken(
    req: Request,
    res: Response,
    next: NextFunction
) {
    let token: string | undefined = req.headers.authorization;

    if (!token) {
        throw new AppError("Missing bearer token", 401);
    }

    token = token.split(" ")[1];

    verify(token, process.env.SECRET_KEY!, (error: any, decoded: any) => {
        if (error) {
            throw new AppError(error.message, 401);
        }

        res.locals.id = decoded.sub;

        return next();
    });
}
