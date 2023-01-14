import client from "./client";
import { RegisterParams, LoginParams } from "@/types/auth";

export const writeArticle = ({ id, password }: LoginParams) =>
    client.post("/users/login", { id, password });

export const deleteArticle = ({ id }: { id: string }) =>
    client.delete("/article", { params: { id } });

export const updateArticle = () => client.put("/article");

export const readArticle = () => client.get("/article");

export const writeComment = () => client.post("/comment");

export const deleteComment = () => client.delete("/comment");

export const updateComment = () => client.put("/comment");

export const readComment = () => client.get("/comment");
