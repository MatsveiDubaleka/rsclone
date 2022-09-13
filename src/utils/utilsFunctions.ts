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

export async function getUserReviewsByMovie(kinopoiskId: number) {
	const resp = await fetch(`https://rskinopoisk.herokuapp.com/reviews/getReviews`);
	const reviews: any[] = await resp.json();
	const userReviews : any[] = reviews.filter((review) => review.kinopoiskId === kinopoiskId);
	return userReviews;
}

type Body = {
  title: string,
  text: string,
  type: string,
  author: string,
  kinopoiskId: number
}

export async function postReview(body : Body) {
	await fetch(`https://rskinopoisk.herokuapp.com/reviews/postReview`, {
		method: 'POST',
		body: JSON.stringify(body),
		headers: {
			'Content-Type': 'application/json'
		}
	});
}
