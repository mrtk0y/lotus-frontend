const CardSkelton = () => {
	return (
		<div className="mx-auto h-48 w-full rounded-md border  shadow flex flex-col overflow-hidden">
			<div className="w-full h-32 bg-gradient-to-r  stripe " />
			<div className="p-4">
				<div className="bg-gradient-to-r h-4 w-60per stripe mb-4" />
				<div className="bg-gradient-to-r h-4 w-full stripe" />
			</div>
		</div>
	);
};

export default CardSkelton;
