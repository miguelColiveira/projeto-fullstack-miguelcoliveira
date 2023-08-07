import { useForm } from "react-hook-form";
import { TLoginData, loginSchema } from "./validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAuth } from "../../hooks/useAuth";

export function Login() {
    const { register, handleSubmit } = useForm<TLoginData>({
        resolver: zodResolver(loginSchema),
    });
    const { singIn } = useAuth();

    return (
        <>
            <h1>Login</h1>
            <form onSubmit={handleSubmit(singIn)}>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" {...register("email")} />
                <label htmlFor="password">Password</label>
                <input type="password" id="password" {...register("password")} />
                <button type="submit">Sing in</button>
            </form>
        </>
    );
}
