import { IMAGE_URL } from "../constants/constants";

export const getImageUrl = (path: string) => {
	return `${IMAGE_URL}${path}`;
};
