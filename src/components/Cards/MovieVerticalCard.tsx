import type { TMovie } from "../../api/movie/type";
import { getImageUrl } from "../../utils/getImageUrl";

const MovieVerticalCard = ({
	movie,
	isMatched,
}: { movie: TMovie; isMatched: boolean }) => {
	return (
		<div
			key={movie.id}
			className={`transition-all border-1 rounded-md border-solid overflow-hidden  ${
				isMatched ? "" : "hidden"
			}`}
		>
			<img
				loading="lazy"
				src={getImageUrl(movie.backdrop_path)}
				alt={movie.title}
				className="movie-poster h-40 w-full object-cover aspect-video fade-in-image"
			/>
			<div className="px-2 h-10 line-clamp-2 font-semibold">{movie.title}</div>
		</div>
	);
};

export default MovieVerticalCard;
