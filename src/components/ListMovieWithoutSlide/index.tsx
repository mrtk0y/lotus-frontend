import type { TMovie } from "../../api/movie/type";
import { getImageUrl } from "../../utils/getImageUrl";

const ListMovieWithoutSlide = ({
	list,
	title,
}: { list: TMovie[]; title: string }) => {
	return (
		<div>
			<p className="font-bold text-xl">{title}</p>
			<div className="flex flex-wrap gap-2 overflow-auto w-full p-4">
				{list.map((movie: TMovie) => (
					<div key={movie.id}>
						<img
							loading="lazy"
							src={getImageUrl(movie.backdrop_path)}
							alt={movie.title}
							className="movie-poster w-96 h-40 object-contain"
						/>
						<p>{movie.title}</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default ListMovieWithoutSlide;
