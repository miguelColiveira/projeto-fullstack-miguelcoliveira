import { useForm } from "react-hook-form";
import { TRegisterData, registerSchema } from "./validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAuth } from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";

export function Register() {
    const { register, handleSubmit } = useForm<TRegisterData>({
        resolver: zodResolver(registerSchema),
    });
    const { registerUser } = useAuth();

    const navigate = useNavigate();

    function toLogin() {
        navigate("/login");
    }

    return (
        <>
            <h1>Register</h1>
            <form onSubmit={handleSubmit(registerUser)}>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" {...register("email")} />

                <label htmlFor="password">Password</label>
                <input type="password" id="password" {...register("password")} />

                <label htmlFor="full_name">Full name</label>
                <input type="full_name" id="full_name" {...register("full_name")} />

                <label htmlFor="fone_number">Fone number</label>
                <input type="fone_number" id="fone_number" {...register("fone_number")} />

                <button type="submit">Register</button>
            </form>

            <button type="button" onClick={toLogin}>
                Login page
            </button>
        </>
    );
}
