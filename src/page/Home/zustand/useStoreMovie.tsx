import { create } from "zustand";
import type { TMovie } from "../../api/movie/type";

export type TStoreMovie = {
	selectedMovie: TMovie;
	updateSelectedMovie: (movie: TMovie) => void;
};

export const useStoreMovie = create<TStoreMovie>((set) => ({
	selectedMovie: {} as TMovie,
	updateSelectedMovie: (movie) => set({ selectedMovie: movie }),
}));
