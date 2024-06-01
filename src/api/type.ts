export type QueryOptions = {
	enabled?: boolean;
	refetchInterval?: number;
	refetchOnMount?: boolean;
	refetchOnWindowFocus?: boolean;
};

export type ListWithPagination<T> = {
	total_pages: number;
	total_results: number;
	dates: {
		maximum: string;
		minimum: string;
	};
	page: number;
	results: T[];
};
