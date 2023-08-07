import { compare } from "bcryptjs";
import { AppError } from "../errors/AppError";
import { sign } from "jsonwebtoken";
import { userRepository } from "../data-source";
import { User } from "../entities/user.entity";
import { TLogin } from "../interfaces/login.interfaces";

export async function createTokenService(loginData: TLogin): Promise<string> {
    const user: User | null = await userRepository.findOne({
      where: {
        email: loginData.email,
      },
    });
  
    if (!user) {
      throw new AppError("Invalid credentials", 401);
    }
  
    const passwordMatch: boolean = await compare(
      loginData.password,
      user.password
    );
  
    if (!passwordMatch) {
      throw new AppError("Invalid credentials", 401);
    }
  
    const token = sign(
      {
        userName: user.full_name,
      },
      process.env.SECRET_KEY!,
      {
        expiresIn: "24h",
        subject: String(user.id),
      }
    );
  
    return token;
  }