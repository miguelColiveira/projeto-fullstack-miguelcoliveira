import { Routes, Route } from "react-router-dom";
import { Login } from "../pages/login";
import { Dashboard } from "../pages/dashboard";
import { ProtectedRoutes } from "./protectedRoutes";

export function RoutesMain() {
    return (
        <Routes>
            <Route path="/" element={<Login />} />
            <Route element={<ProtectedRoutes />}>
                <Route path="/dashboard" element={<Dashboard />} />
            </Route>
        </Routes>
    );
}
