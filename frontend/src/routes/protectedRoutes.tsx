import { Outlet } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export function ProtectedRoutes() {
    const { loading } = useAuth();

    if (loading) {
        return <div>...loading</div>;
    }

    return <Outlet />;
}
