import { ReactNode, createContext, useEffect, useState } from "react";
import { TLoginData } from "../pages/login/validation";
import { useNavigate } from "react-router-dom";
import { api } from "../services/api";
import { toast } from "react-toastify";
import { TRegisterData } from "../pages/register/validation";

interface AuthProviderProps {
    children: ReactNode;
}

interface AuthContext {
    singIn(data: TLoginData): Promise<void>;
    loading: boolean;
    registerUser(data: TRegisterData): Promise<void>;
}

export const AuthContext = createContext({} as AuthContext);

export function AuthProvider({ children }: AuthProviderProps) {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const token = localStorage.getItem("pj-fullstack-m6:token");

        if (!token) {
            setLoading(false);
            navigate("login");
            return;
        }

        api.defaults.headers.common.Authorization = `Bearer ${token}`;
        setLoading(false);
    }, [navigate]);

    async function singIn(data: TLoginData) {
        const toastPromiseLogin = toast.loading("Login");

        try {
            const response = await api.post("/login", data);

            const { token } = response.data;

            localStorage.setItem("pj-fullstack-m6:token", token);

            api.defaults.headers.common.Authorization = `Bearer ${token}`;
            setLoading(false);

            toast.update(toastPromiseLogin, {
                render: "Success on login",
                type: "success",
                isLoading: false,
                autoClose: 3000,
                closeOnClick: true,
            });

            navigate("dashboard");
        } catch (error) {
            console.error(error);
            toast.update(toastPromiseLogin, {
                render: "Error on login",
                type: "error",
                isLoading: false,
                autoClose: 3000,
                closeOnClick: true,
            });
        }
    }

    async function registerUser(data: TRegisterData) {
        const toastPromiseLogin = toast.loading("Login");

        try {
            await api.post("/user", data);
            setLoading(false);
            toast.update(toastPromiseLogin, {
                render: "Success on register",
                type: "success",
                isLoading: false,
                autoClose: 3000,
                closeOnClick: true,
            });
            navigate("login");
        } catch (error) {
            console.error(error);
            toast.update(toastPromiseLogin, {
                render: "Error on register",
                type: "error",
                isLoading: false,
                autoClose: 3000,
                closeOnClick: true,
            });
        }
    }

    return <AuthContext.Provider value={{ singIn, loading, registerUser }}>{children}</AuthContext.Provider>;
}
