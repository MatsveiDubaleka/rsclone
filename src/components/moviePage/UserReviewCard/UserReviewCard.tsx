import { FC, useState } from "react";
import "./UserReviewCard.scss";

export type Review = {
	author: string,
	date: string,
	description?: string,
  text?: string,
	kinopoiskId: number,
	negativeRating?: number,
	positiveRating?: number,
	title: string,
	type: string
}

type UserReviewCardProps = {
	review: Review
}

export const UserReviewCard : FC<UserReviewCardProps> = ({ review }) => {

	const [isShownFull, setIsShownFull] = useState(false);

	const handleBtnClick = () => {
		isShownFull ? setIsShownFull(false) : setIsShownFull(true);
	} 

	return(
		<div className={`user-review ${(review.type).toLocaleLowerCase()}`}>
			<div className="user-review__header">
				<p className="user-review__username">{review.author}</p>
				<p className="user-review__date">{review.date}</p>
			</div>
			<div className="user-review__main">
				<h4 className="user-review__title">{review.title}</h4>
				<p className={`user-review__text ${isShownFull ? 'full-shown' : ''}`} dangerouslySetInnerHTML={{__html: `${review.description ? review.description : review.text}`}}></p>
			</div>
			<button className="user-review__show-btn" onClick={handleBtnClick}>{isShownFull ? 'скрыть' : 'показать всю рецензию'}</button>
		</div>
	)
}
