import client from "./client";
import { RegisterParams, LoginParams } from "@/types/auth";

export const login = ({ id, password }: LoginParams) =>
    client.post("/users/login", { id, password });

export const register = ({
    id,
    password,
    name,
    birth,
    profile_img,
}: RegisterParams) =>
    client.post("/users/register", { id, password, name, birth, profile_img });

export const logout = () => client.delete("/api/auth/logout");
