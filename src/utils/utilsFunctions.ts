export const getClassForRaiting = (rating: number) => {
	return rating < 5 ? 'negative' : rating > 7 ? 'positive' : '';
} 

export const getUsernameFromLocalStorage = () => {
	const username = localStorage.getItem('username');
	return username ? JSON.parse(username) : false;
}

export async function getUserReviewsByUser(username: string) {
	const resp = await fetch(`https://rskinopoisk.herokuapp.com/reviews/getReviews`);
	const reviews: any[] = await resp.json();
	const userReviews : any[] = reviews.filter((review) => review.author === username);
	return userReviews;
}