import { useGetPopularMovie } from "../../api/movie/useGetMovies";
import StatusContainer from "../../components/ErrorContainer";
import ListMovieWithoutSlide from "../../components/ListMovieWithoutSlide";
import { usePagination } from "../../store/usePagination";

const Popular = ({ searchInput }: { searchInput: string }) => {
	const { pageNo } = usePagination();

	const {
		data: popularList,
		isError,
		isFetching,
	} = useGetPopularMovie({ page: pageNo });

	return (
		<StatusContainer isError={isError} isLoading={isFetching}>
			<ListMovieWithoutSlide
				title="Popular"
				list={popularList?.results || []}
				searchKeyword={searchInput}
			/>
		</StatusContainer>
	);
};

export default Popular;
