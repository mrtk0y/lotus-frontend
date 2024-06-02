import {
	MutationCache,
	QueryCache,
	QueryClient,
	QueryClientProvider,
} from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import type { AxiosError } from "axios";
import type React from "react";
import { type PropsWithChildren, useCallback, useMemo } from "react";

const ReactQueryContext: React.FC<PropsWithChildren> = ({ children }) => {
	// const navigate = useNavigate()

	const handleAuthError = useCallback((error: AxiosError) => {
		const status = error.response?.status;
		const url = error.response?.config.url;
		if (status === 409) {
			console.log("🚀 ~ handleAuthError ~ status:", status);
		}
		if (status === 401 && url === "/users/profile") {
			// navigate('/login')
			window.location.href = "/login";
		}
	}, []);

	const queryClient = useMemo(
		() =>
			new QueryClient({
				defaultOptions: {
					queries: {
						retry: 1,
					},
				},
				mutationCache: new MutationCache({
					onError(error) {
						handleAuthError(error as AxiosError);
					},
				}),
				queryCache: new QueryCache({
					onError(error) {
						handleAuthError(error as AxiosError);
					},
				}),
			}),
		[handleAuthError],
	);

	return (
		<QueryClientProvider client={queryClient}>
			{children}
			<ReactQueryDevtools position="bottom" />
		</QueryClientProvider>
	);
};

export default ReactQueryContext;
