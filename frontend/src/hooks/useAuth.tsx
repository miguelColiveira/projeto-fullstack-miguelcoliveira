import { useContext } from "react";
import { AuthContext } from "../providers/authProvider";

export function useAuth() {
    const authContext = useContext(AuthContext);
    return authContext;
}
