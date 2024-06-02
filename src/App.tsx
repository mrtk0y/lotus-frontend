import { useState } from "react";
import useGetNowPlayingMovie from "./api/movie/useGetMovies";
import Header from "./components/Header";
import ListMovieWithoutSlide from "./components/ListMovieWithoutSlide";

enum TYPE_LIST {
	NOW_PLAYING = "nowPlaying",
	TOP_RATE = "topRate",
	POPULAR = "popular",
	UPCOMING = "upcoming",
}

const typeList = [
	{
		key: TYPE_LIST.NOW_PLAYING,
		title: "NOW PLAYING",
		isShow: true,
	},
	{
		key: TYPE_LIST.TOP_RATE,
		title: "TOP RATED",
		isShow: true,
	},
	{
		key: TYPE_LIST.POPULAR,
		title: "POPULAR",
		isShow: false,
	},
	{
		key: TYPE_LIST.UPCOMING,
		title: "UPCOMING",
		isShow: false,
	},
];
function App() {
	const { data } = useGetNowPlayingMovie({ page: 1 });

	const [selectType, setSelectType] = useState(TYPE_LIST.NOW_PLAYING);

	return (
		<div>
			<Header />
			<div className="">
				<div className="flex">
					<div className="flex gap-1 border-1 border-darkBlue border-solid rounded-full ">
						{typeList.map((type) => {
							if (!type.isShow) {
								return null;
							}
							return (
								<div key={type.key}>
									<button
										type="button"
										onClick={() => setSelectType(type.key)}
										className={`${
											selectType === type.key ? "bg-darkBlue" : "bg-transparent"
										} py-2 px-4 rounded-full border-0 transition-all cursor-pointer `}
									>
										<span
											className={` ${
												selectType === type.key
													? "text-gradient-lightGreen"
													: "hover-text-lightGreen"
											}`}
										>
											{type.title}
										</span>
									</button>
								</div>
							);
						})}
					</div>
				</div>

				<ListMovieWithoutSlide title="NOW PLAYING" list={data?.results || []} />
			</div>
		</div>
	);
}

export default App;
