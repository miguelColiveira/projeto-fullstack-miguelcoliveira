import { Request, Response } from "express";
import { createTokenService } from "../services/createToken.service";

export async function loginController(
    req: Request,
    res: Response
): Promise<Response> {
    const user = req.body;
    const token = await createTokenService(user);
    return res.status(200).json({ token: token });
}
