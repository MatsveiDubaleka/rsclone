import { useEffect, useState } from "react";
import { getData } from "../../../utils/config";
import { Review, UserReviewCard } from "../UserReviewCard/UserReviewCard";
import { WriteReviewForm } from "../WriteReviewForm/WriteReviewForm";
import "./UsersReviews.scss";

type UsersReviewsProps = {
	movieId: number;
}

export const UsersReviews = ({movieId} : UsersReviewsProps) => {

	const [isReviewFormVisible, setVisibility] = useState<boolean>(false);

	const [reviews, setReviews] = useState([]);
	const [totalReviews, setTotalReviews] = useState(0);
	const [positiveReviews, setPositiveReviews] = useState(0);
	const [negativeReviews, setNegativeReviews] = useState(0);
	const [neutralReviews, setNeutralReviews] = useState(0);

	const myCallback = (result: any) => {
		console.log(result.data);
		console.log(positiveReviews);
		setReviews(result.data.items);
		setTotalReviews(result.data.total);
		setPositiveReviews(result.data.totalPositiveReviews);
		setNegativeReviews(result.data.totalNegativeReviews);
		setNeutralReviews(result.data.totalNeutralReviews);
	}

	useEffect(() => {
		getData(`v2.2/films/${movieId}/reviews?page=5&order=USER_POSITIVE_RATING_ASC`, myCallback);
		console.log('in use effect callback');
		console.log('from useEffect', positiveReviews);
	}, []);


	console.log(totalReviews);
	console.log(positiveReviews);
	console.log(negativeReviews);
	console.log(neutralReviews);
	console.log(reviews);

	const firstNeutralReview = reviews.find((item : Review) => item.type === "NEUTRAL");
	const firstPositiveReview = reviews.find((item : Review) => item.type === "POSITIVE");
	const firstNegativeReview = reviews.find((item : Review) => item.type === "NEGATIVE");

	console.log(firstPositiveReview);
	console.log(firstNegativeReview);
	console.log(firstNeutralReview);


	const handleWriteReviewButton = () => {
		setVisibility(isReviewFormVisible ? false : true);
	} 

	return(
		<div className="users-reviews">
			<h3 className="users-reviews__title">Рецензии зрителей</h3>
			<button className="users-reviews__write-review-btn" onClick={handleWriteReviewButton}>Написать рецензию</button>
			<div className="users-reviews__content">
				<div className="users-reviews__reviews">
					{ isReviewFormVisible ? <WriteReviewForm></WriteReviewForm> : <></>}
					<UserReviewCard review={firstPositiveReview}></UserReviewCard>
					<UserReviewCard review={firstNeutralReview}></UserReviewCard>
					<UserReviewCard review={firstNegativeReview}></UserReviewCard>
					<UserReviewCard review={reviews[0]}></UserReviewCard>
				</div>
				<div className="users-reviews__info">
					<div className="users-reviews__total active">
						<p className="users-reviews__amount">{totalReviews}</p>
						<span>Всего</span>
					</div>
					<div className="users-reviews__positive">
						<p className="users-reviews__amount positive">{positiveReviews}</p>
						<span>Положительные</span>
					</div>
					<div className="users-reviews__neutral">
						<p className="users-reviews__amount neutral">{neutralReviews}</p>
						<span>Нейтральные</span>
					</div>
					<div className="users-reviews__negative">
						<p className="users-reviews__amount negative">{negativeReviews}</p>
						<span>Отрицательные</span>
					</div>
				</div>
			</div>
		</div>
	)
}