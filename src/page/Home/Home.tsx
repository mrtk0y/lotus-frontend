import { useState } from "react";

import type { TMovie } from "../../api/movie/type";
import Drawer from "../../components/Drawer";
import CardSkelton from "../../components/Skeleton";
import { getImageUrl } from "../../utils/getImageUrl";
import NowPlaying from "./NowPlaying";
import Popular from "./Popular";
import TopRate from "./TopRate";
import { useStoreMovie } from "./zustand/useStoreMovie";

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
		isShow: true,
	},
	{
		key: TYPE_LIST.UPCOMING,
		title: "UPCOMING",
		isShow: false,
	},
];
function Home() {
	const { selectedMovie, updateSelectedMovie } = useStoreMovie();

	const [selectType, setSelectType] = useState(TYPE_LIST.NOW_PLAYING);
	console.log("🚀 ~ Home ~ selectType:", selectType);
	const [searchInput, setSearchInput] = useState("");

	const handleChangeType = (type: TYPE_LIST) => {
		setSelectType(type);
		setSearchInput("");
	};

	return (
		<div className="">
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
										onClick={() => handleChangeType(type.key)}
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

				<div className="my-4 ">
					<input
						value={searchInput}
						className="w-80 h-8 border-1 border-darkBlue border-solid rounded-md px-4"
						placeholder="Search movie..."
						onChange={(e) => setSearchInput(e.currentTarget.value)}
					/>
				</div>

				{selectType === TYPE_LIST.TOP_RATE && (
					<TopRate searchInput={searchInput} />
				)}
				{selectType === TYPE_LIST.NOW_PLAYING && (
					<NowPlaying searchInput={searchInput} />
				)}
				{selectType === TYPE_LIST.POPULAR && (
					<Popular searchInput={searchInput} />
				)}
			</div>
			<Drawer
				onClose={() => {
					updateSelectedMovie({} as TMovie);
				}}
			>
				<div className="flex flex-col gap-2">
					<p className="font-bold text-lg ">Movie: {selectedMovie.title}</p>
					<p>Poster</p>
					<p className="w300">
						Overview: <br /> {selectedMovie.overview}
					</p>
					<img
						src={getImageUrl(selectedMovie.poster_path)}
						alt="image-poster"
						className="object-contain w300"
					/>
					<p>Banner</p>
					<img
						src={getImageUrl(selectedMovie.backdrop_path)}
						alt="image-poster"
						className="object-contain w300"
					/>
				</div>
			</Drawer>
		</div>
	);
}

export default Home;
