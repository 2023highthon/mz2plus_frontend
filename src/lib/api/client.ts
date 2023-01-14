import axios from "axios";

const client = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
    withCredentials: false,
});

export default client;
