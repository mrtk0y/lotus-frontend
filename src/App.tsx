import Home from "./page/Home/Home";
import { useDrawer } from "./store/useDrawer";

const App = () => {
	const { isOpenDrawer } = useDrawer();

	return (
		<div
			className={`p-4 selfContainer ${
				isOpenDrawer ? "h-screen overflow-hidden" : ""
			}`}
		>
			<Home />
		</div>
	);
};

export default App;
