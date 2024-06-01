import { useQuery } from "@tanstack/react-query";
import { getListNowPlayingMovies } from ".";

const useGetNowPlayingMovie = ({ page }: { page: number }) => {
	const queryObject = new URLSearchParams();
	queryObject.append("page", String(page));
	const queryString = queryObject.toString();

	return useQuery({
		queryKey: ["nowPlaying", page],
		queryFn: () => getListNowPlayingMovies(queryString),
	});
};

export default useGetNowPlayingMovie;
