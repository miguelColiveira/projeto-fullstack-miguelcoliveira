import { Request, Response } from "express";
import { createUserService } from "../services/user/create.service";
import { TUserRes } from "../interfaces/user.interfaces";
import { patchUserService } from "../services/user/patch.service";
import { deleteUserService } from "../services/user/delete.service";

export async function postUserController(
    req: Request,
    res: Response
): Promise<Response> {
    const newUser: TUserRes = await createUserService(req.body);

    return res.status(201).json(newUser);
}

export async function patchUserController(
    req: Request,
    res: Response
): Promise<Response> {
    const id = Number(req.params.id);
    const newUser = await patchUserService(req.body, id);
    return res.status(201).json(newUser);
}

export async function deleteUserController(
    req: Request,
    res: Response
): Promise<Response> {
    const id = Number(req.params.id);
    await deleteUserService(id);

    return res.status(204).send();
}
