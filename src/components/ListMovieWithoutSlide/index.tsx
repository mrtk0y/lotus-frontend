import type { TMovie } from "../../api/movie/type";
import { useStoreMovie } from "../../page/Home/zustand/useStoreMovie";
import { useDrawer } from "../../store/useDrawer";
import MovieHorizontalCard from "../Cards/MovieHorizontalCard";

const ListMovieWithoutSlide = ({
	list,
	title,
	searchKeyword,
}: { list: TMovie[]; title: string; searchKeyword?: string }) => {
	const { updateSelectedMovie } = useStoreMovie();
	const { setOpenDrawer } = useDrawer();

	const onClick = (movie: TMovie) => {
		updateSelectedMovie(movie);
		setOpenDrawer(true);
	};
	return (
		<div>
			<p className="font-bold text-xl">{title}</p>
			<div className="flex flex-wrap overflow-auto w-full ">
				{list.map((movie: TMovie) => {
					const isMatched = movie.title
						.toLowerCase()
						.includes(searchKeyword?.toLowerCase() || "");
					return (
						<div
							key={movie.id}
							className={`
								px-1 py-1 basis-100-50-33-25 cursor-pointer
								${isMatched ? "" : "hidden"}
							`}
							onClick={() => onClick(movie)}
							onKeyDown={() => onClick(movie)}
						>
							<MovieHorizontalCard movie={movie} isMatched={isMatched} />
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default ListMovieWithoutSlide;
