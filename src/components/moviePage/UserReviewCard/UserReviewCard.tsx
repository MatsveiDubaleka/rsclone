import "./UserReviewCard.scss";

export type Review = {
	author: string,
	date: string,
	description: string,
	kinopoiskId: number,
	negativeRating: number,
	positiveRating: number,
	title: string,
	type: string
}

type UserReviewCardProps = {
	review: Review
}

export const UserReviewCard = ({ review } : UserReviewCardProps) => {


	return(
		<div className={`user-review ${(review.type).toLocaleLowerCase()}`}>
			<div className="user-review__header">
				<p className="user-review__username">{review.author}</p>
				<p className="user-review__date">{review.date}</p>
			</div>
			<div className="user-review__main">
				<h4 className="user-review__title">{review.title}</h4>
				<p className="user-review__text">{review.description}</p>
			</div>
			<button className="user-review__show-btn">показать всю рецензию</button>
		</div>
	)
}