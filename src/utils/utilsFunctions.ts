export const getClassForRaiting = (rating: number) => {
	return rating < 5 ? 'negative' : rating > 7 ? 'positive' : '';
} 

export const getUsernameFromLocalStorage = () => {
	const username = localStorage.getItem('username');
	return username ? JSON.parse(username) : false;
}