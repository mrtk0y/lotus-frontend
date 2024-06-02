import { useGetNowPlayingMovie } from "../../api/movie/useGetMovies";
import StatusContainer from "../../components/ErrorContainer";
import ListMovieWithoutSlide from "../../components/ListMovieWithoutSlide";
import CardSkelton from "../../components/Skeleton";
import { usePagination } from "../../store/usePagination";

const NowPlaying = ({ searchInput }: { searchInput: string }) => {
	const { pageNo } = usePagination();

	const {
		data: nowPlayingList,
		isError,
		isFetching,
	} = useGetNowPlayingMovie({ page: pageNo });

	return (
		<StatusContainer
			isError={isError}
			isLoading={isFetching}
			loading={
				<div className="flex flex-wrap ">
					<div className="basis-100-50-33-25 px-2">
						<CardSkelton />
					</div>
					<div className="basis-100-50-33-25 px-2">
						<CardSkelton />
					</div>
					<div className="basis-100-50-33-25 px-2">
						<CardSkelton />
					</div>
					<div className="basis-100-50-33-25 px-2">
						<CardSkelton />
					</div>
				</div>
			}
		>
			<ListMovieWithoutSlide
				title="NOW PLAYING"
				list={nowPlayingList?.results || []}
				searchKeyword={searchInput}
			/>
		</StatusContainer>
	);
};

export default NowPlaying;
