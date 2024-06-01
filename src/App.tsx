import "./App.scss";
import type { TMovie } from "./api/movie/type";
import useGetNowPlayingMovie from "./api/movie/useGetMovies";
import { getImageUrl } from "./utils/getImageUrl";

function App() {
	const { data } = useGetNowPlayingMovie({ page: 1 });
	console.log("🚀 ~ App ~ data:", data);
	return (
		<>
			{data?.results.map((movie: TMovie) => (
				<div key={movie.id}>
					<img src={getImageUrl(movie.poster_path)} alt={movie.title} />
					<p>{movie.title}</p>
				</div>
			))}
		</>
	);
}

export default App;
