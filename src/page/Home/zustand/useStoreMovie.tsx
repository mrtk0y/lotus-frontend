import { create } from "zustand";
import type { TMovie } from "../../../api/movie/type";

export enum VIEW_TYPE {
	GRID = "grid",
	LIST = "list",
}

export type TStoreMovie = {
	selectedMovie: TMovie;
	updateSelectedMovie: (movie: TMovie) => void;
	viewType: VIEW_TYPE;
	setViewType: (viewType: VIEW_TYPE) => void;
};

export const useStoreMovie = create<TStoreMovie>((set) => ({
	selectedMovie: {} as TMovie,
	updateSelectedMovie: (movie) => set({ selectedMovie: movie }),
	viewType: VIEW_TYPE.GRID,
	setViewType: (viewType) => set({ viewType }),
}));
