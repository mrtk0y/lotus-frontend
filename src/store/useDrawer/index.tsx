import { create } from "zustand";

export type TDrawer = {
	isOpenDrawer: boolean;
	setOpenDrawer: (isOpenDrawer: boolean) => void;
};

export const useDrawer = create<TDrawer>((set) => ({
	isOpenDrawer: false,
	setOpenDrawer: (isOpenDrawer) => set({ isOpenDrawer }),
}));
