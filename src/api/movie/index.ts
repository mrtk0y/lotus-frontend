import api from "..";
import type { ListWithPagination } from "../type";
import type { TMovie } from "./type";

export const getListNowPlayingMovies = (queryString: string) => {
	return api
		.get<ListWithPagination<TMovie>>(
			`https://api.themoviedb.org/3/movie/now_playing?language=en-US&${queryString}`,
		)
		.then((res) => res.data);
};

export const getListTopRateMovies = (queryString: string) => {
	return api
		.get<ListWithPagination<TMovie>>(
			`https://api.themoviedb.org/3/movie/top_rated?language=en-US&${queryString}`,
		)
		.then((res) => res.data);
};
export const getListPopularMovies = async (queryString: string) => {
	const res = await api<ListWithPagination<TMovie>>({
		method: "GET",
		url: `https://api.themoviedb.org/3/movie/popular?language=en-US&${queryString}`,
		timeout: 2,
	});
	return res.data;
};

export const delayFetch = (ms: number) => {
	return new Promise((resolve) => setTimeout(resolve, ms));
};
export const errorFetch = (ms: number) => {
	return new Promise((_, reject) => setTimeout(reject, ms));
};
