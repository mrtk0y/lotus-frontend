import api from "..";

export const getListNowPlayingMovies = (queryString: string) => {
	return api
		.get(
			`https://api.themoviedb.org/3/movie/now_playing?language=en-US&${queryString}`,
		)
		.then((res) => res.data);
};
