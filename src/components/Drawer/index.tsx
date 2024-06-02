import type { PropsWithChildren } from "react";
import { useDrawer } from "../../store/useDrawer";

type Props = {
	onClose?: () => void;
} & PropsWithChildren;

const Drawer = ({ children, onClose }: Props) => {
	const { isOpenDrawer, setOpenDrawer } = useDrawer();
	const onCloseDrawer = () => {
		setOpenDrawer(false);
		onClose?.();
	};
	return (
		<>
			<div
				className={`
				bg-white
				fixed w33screen h-screen bg-white z-50 top-0 right-0 transition-all duration-300 ease-in-out overflow-auto
				${isOpenDrawer ? "block" : "hidden"}
			`}
			>
				<div className="py-8 px-4">{children}</div>
			</div>
			<div
				className={`fixed inset-0 z-40  w-screen h-screen bg-black opacity-50
				${isOpenDrawer ? "block" : "hidden"}`}
				onClick={onCloseDrawer}
				onKeyDown={onCloseDrawer}
			/>
		</>
	);
};

export default Drawer;
