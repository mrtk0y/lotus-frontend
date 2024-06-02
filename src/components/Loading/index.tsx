import IconLoading from "../Icon/Loading1";

const Loading = ({ height, width }: { height?: string; width?: string }) => {
	return (
		<div
			className="w-full h-full flex justify-center items-center"
			style={{
				height: height,
				width: width,
			}}
		>
			<IconLoading className="animate-spin" />
		</div>
	);
};

export default Loading;
