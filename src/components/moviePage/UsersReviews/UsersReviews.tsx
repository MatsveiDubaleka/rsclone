import { useEffect, useState } from "react";
import { getData } from "../../../utils/config";
import { UserReviewCard } from "../UserReviewCard/UserReviewCard";
import { WriteReviewForm } from "../WriteReviewForm/WriteReviewForm";
import "./UsersReviews.scss";

type UsersReviewsProps = {
	movieId: number;
}

type ReviewsData = {
	items: any, // не смогла это затипизировать
	total: number,
	totalNegativeReviews: number,
	totalNeutralReviews: number,
	totalPages: number,
	totalPositiveReviews: number,
}

export const UsersReviews = ({movieId} : UsersReviewsProps) => {

	const [isReviewFormVisible, setVisibility] = useState<boolean>(false);
	const [reviewsData, setReviewsData] = useState<ReviewsData>();
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		getData(`v2.2/films/${movieId}/reviews?page=5&order=USER_POSITIVE_RATING_ASC`, setReviewsData, setIsLoading);
	}, []);

	const handleWriteReviewButton = () => {
		setVisibility(isReviewFormVisible ? false : true);
	}

	const allReviews = reviewsData?.items;
	console.log(allReviews);

	//TODO
	// в идеале надо сделать так, чтобы на странице была зелная, серая и красная цитаты
	// оставила на потом потому что это сейчас не приоритет
	// const firstPositiveReview = allReviews.find((review : Review) => review.type === "POSITIVE");
	// const firstNeutralReview = allReviews.find((review : Review) => review.type === "NEUTRAL");
	// const firstNegativeReview = allReviews.find(((review : Review) => review.type === "NEGATIVE"));

	return(
		<div className="users-reviews">
			<h3 className="users-reviews__title">Рецензии зрителей</h3>
			<button className="users-reviews__write-review-btn" onClick={handleWriteReviewButton}>Написать рецензию</button>
			{ !isLoading && 
				<div className="users-reviews__content">
					<div className="users-reviews__reviews">
							{ isReviewFormVisible ? <WriteReviewForm></WriteReviewForm> : <></>}
							<UserReviewCard review={reviewsData?.items[0]}/>
							<UserReviewCard review={reviewsData?.items[1]}/>
							<UserReviewCard review={reviewsData?.items[2]}/>
					</div>
					<div className="users-reviews__info">
							<div className="users-reviews__total active">
								<p className="users-reviews__amount">{reviewsData?.total}</p>
								<span>Всего</span>
							</div>
							<div className="users-reviews__positive">
								<p className="users-reviews__amount positive">{reviewsData?.totalPositiveReviews}</p>
								<span>Положительные</span>
							</div>
							<div className="users-reviews__neutral">
								<p className="users-reviews__amount neutral">{reviewsData?.totalNeutralReviews}</p>
								<span>Нейтральные</span>
							</div>
							<div className="users-reviews__negative">
								<p className="users-reviews__amount negative">{reviewsData?.totalNegativeReviews}</p>
								<span>Отрицательные</span>
							</div>
					</div>
				</div>
			}
		</div>
	)
}