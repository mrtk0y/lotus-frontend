import type { TMovie } from "../../api/movie/type";
import {
	VIEW_TYPE,
	useStoreMovie,
} from "../../page/Home/zustand/useStoreMovie";
import { useDrawer } from "../../store/useDrawer";
import MovieHorizontalCard2 from "../Cards/MovieHorizontalCard2";
import MovieVerticalCard from "../Cards/MovieVerticalCard";

const ListMovieWithoutSlide = ({
	list,
	title,
	searchKeyword,
}: { list: TMovie[]; title: string; searchKeyword?: string }) => {
	const { updateSelectedMovie, viewType } = useStoreMovie();
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
								px-1 py-1  cursor-pointer focus
								${isMatched ? "" : "hidden"}
								${
									viewType === VIEW_TYPE.GRID
										? "basis-100-50-33-25"
										: "basis-100"
								}
							`}
							onClick={() => onClick(movie)}
							onKeyDown={() => onClick(movie)}
						>
							{viewType === VIEW_TYPE.GRID && (
								<MovieVerticalCard movie={movie} isMatched={isMatched} />
							)}
							{viewType === VIEW_TYPE.LIST && (
								<MovieHorizontalCard2 movie={movie} isMatched={isMatched} />
							)}
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default ListMovieWithoutSlide;
