import type { PropsWithChildren } from "react";
import Loading from "../Loading";
type Props = PropsWithChildren & {
	isError: boolean;
	isLoading: boolean;
	error?: React.ReactNode;
	loading?: React.ReactNode;
};
const StatusContainer = ({
	isError,
	isLoading,
	children,
	error,
	loading,
}: Props) => {
	if (isLoading) {
		if (loading) return loading;
		return <Loading />;
	}

	if (isError) {
		if (error) return error;
		return (
			<div className="h-50screen w-full flex justify-center items-center flex-col gap-8">
				<p className="">This site can't be reached</p>
				Check your internet connection
			</div>
		);
	}

	return (
		<div>
			<p>{children}</p>
		</div>
	);
};

export default StatusContainer;
