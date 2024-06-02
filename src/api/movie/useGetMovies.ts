import { useQuery } from "@tanstack/react-query";
import { getListNowPlayingMovies } from ".";
import type { QueryOptions } from "../type";

const useGetNowPlayingMovie = (
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

export default useGetNowPlayingMovie;
