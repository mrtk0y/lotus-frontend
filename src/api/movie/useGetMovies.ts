import { useQuery } from "@tanstack/react-query";
import {
	delayFetch,
	getListNowPlayingMovies,
	getListPopularMovies,
	getListTopRateMovies,
} from ".";
import type { QueryOptions } from "../type";

export const useGetNowPlayingMovie = (
	{ page }: { page: number },
	optional?: QueryOptions,
) => {
	const queryObject = new URLSearchParams();
	queryObject.append("page", String(page));
	const queryString = queryObject.toString();

	return useQuery({
		queryKey: ["nowPlaying", page],
		queryFn: () => getListNowPlayingMovies(queryString),
		...optional,
	});
};

export const useGetTopRateMovie = (
	{ page }: { page: number },
	optional?: QueryOptions,
) => {
	const queryObject = new URLSearchParams();
	queryObject.append("page", String(page));
	const queryString = queryObject.toString();

	return useQuery({
		queryKey: ["topRate", page],
		queryFn: () =>
			delayFetch(5000).then(() => getListTopRateMovies(queryString)),
		...optional,
	});
};

export const useGetPopularMovie = (
	{ page }: { page: number },
	optional?: QueryOptions,
) => {
	const queryObject = new URLSearchParams();
	queryObject.append("page", String(page));
	const queryString = queryObject.toString();

	return useQuery({
		queryKey: ["popular", page],
		queryFn: () => getListPopularMovies(queryString),
		...optional,
	});
};
