import { AuthProvider } from "./providers/authProvider";
import { RoutesMain } from "./routes";

export function App() {
    return (
        <>
            <AuthProvider>
                <RoutesMain />
            </AuthProvider>
        </>
    );
}
