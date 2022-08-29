export const getClassForRaiting = (rating: number) => {
	return rating < 5 ? 'negative' : rating > 7 ? 'positive' : '';
} 