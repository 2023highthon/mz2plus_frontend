import client from "./client";

export const readArticles = () => client.get("/board");
