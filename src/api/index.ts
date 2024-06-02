import axios, { type AxiosRequestHeaders } from "axios";
import { ACCESS_TOKEN, API_URL } from "../constants/constants";

const api = axios.create({ baseURL: API_URL });

api.interceptors.request.use((config) => {
	const accessToken = ACCESS_TOKEN;

	if (accessToken) {
		config.headers = {
			Authorization: `Bearer ${accessToken}`,
			...config.headers,
		} as AxiosRequestHeaders;
	}

	return config;
});

export default api;
