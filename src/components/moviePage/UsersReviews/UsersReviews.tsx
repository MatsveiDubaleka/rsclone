import { FC, useEffect, useState } from "react";
import { getData } from "../../../utils/config";
import { MovieIdProps } from "../MoviePageLayout/MoviePageLayout";
import { Review, UserReviewCard } from "../UserReviewCard/UserReviewCard";
import { WriteReviewForm } from "../WriteReviewForm/WriteReviewForm";
import "./UsersReviews.scss";


type ReviewsData = {
	items: any, // не смогла это затипизировать
	total: number,
	totalNegativeReviews: number,
	totalNeutralReviews: number,
	totalPages: number,
	totalPositiveReviews: number,
}

export const UsersReviews : FC<MovieIdProps> = ({ movieId }) => {

	const [isReviewFormVisible, setVisibility] = useState<boolean>(false);
	const [reviewsData, setReviewsData] = useState<ReviewsData>();

	useEffect(() => {
		getData(`v2.2/films/${movieId}/reviews?page=1&order=DATE_DESC`, setReviewsData);
	}, [setReviewsData]);

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
							{reviewsData?.items?.splice(0, 3).map((item : Review, index:number) => {
								return <UserReviewCard key={`review-${index}`} review={item} />
							})}
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
		</div>
	)
}