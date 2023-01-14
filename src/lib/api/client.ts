import axios from "axios";

const client = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    withCredentials: false,
    timeout: 1000,
});

export default client;
