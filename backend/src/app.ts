import "reflect-metadata";
import "express-async-errors";
import express from "express";
import { userRoutes } from "./routes/user.routes";
import { loginController } from "./controllers/login.controller";
import { contactsRoutes } from "./routes/contacts.routes";
import cors from "cors";
const app = express();

app.use(express.json());

app.use(
    cors({
        origin: "http://localhost:5173",
    })
);
app.post("/login", loginController);
app.use("/user", userRoutes);
app.use("/contacts", contactsRoutes);

export default app;
