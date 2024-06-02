import { useGetTopRateMovie } from "../../api/movie/useGetMovies";
import StatusContainer from "../../components/ErrorContainer";
import ListMovieWithoutSlide from "../../components/ListMovieWithoutSlide";
import { usePagination } from "../../store/usePagination";

const TopRate = ({ searchInput }: { searchInput: string }) => {
	const { pageNo } = usePagination();

	const {
		data: topRateList,
		isError,
		isFetching,
	} = useGetTopRateMovie({
		page: pageNo,
	});

	return (
		<StatusContainer isLoading={isFetching} isError={isError}>
			<ListMovieWithoutSlide
				title="TOP RATED"
				list={topRateList?.results || []}
				searchKeyword={searchInput}
			/>
		</StatusContainer>
	);
};

export default TopRate;
