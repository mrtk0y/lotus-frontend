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
