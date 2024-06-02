import { create } from "zustand";

export type TPagination = {
	pageNo: number;
	updatePageNo: (pageNo: number) => void;
};

export const usePagination = create<TPagination>((set) => ({
	pageNo: 1,
	updatePageNo: (pageNo) => set({ pageNo }),
}));
