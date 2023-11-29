import axios, { AxiosResponse } from "axios";

export const API_PATH = "http://localhost:3000";

export const API = axios.create({
    baseURL: API_PATH
});

export function checkResponse(res: AxiosResponse): boolean {
    return res.data || !res.data?.error;
}