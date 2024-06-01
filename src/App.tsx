import "./App.scss";
import useGetNowPlayingMovie from "./api/movie/useGetMovies";

function App() {
	const { data } = useGetNowPlayingMovie({ page: 1 });
	console.log("🚀 ~ App ~ data:", data);
	return (
		<>
			<p className="read-the-docs">
				Click on the Vite and React logos to learn more
			</p>
		</>
	);
}

export default App;
