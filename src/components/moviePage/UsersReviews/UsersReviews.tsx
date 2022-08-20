import { UserReviewCard } from "../UserReviewCard/UserReviewCard";
import "./UsersReviews.scss";

export const UsersReviews = () => { 
	return(
		<div className="users-reviews">
			<h3 className="users-reviews__title">Рецензии зрителей</h3>
			<button className="users-reviews__write-review-btn">Написать рецензию</button>
			<div className="users-reviews__content">
				<div className="users-reviews__reviews">
					<UserReviewCard></UserReviewCard>
					<UserReviewCard></UserReviewCard>
					<UserReviewCard></UserReviewCard>
				</div>
				<div className="users-reviews__info">
					<div className="users-reviews__total active">
						<p className="users-reviews__amount">45</p>
						<span>Всего</span>
					</div>
					<div className="users-reviews__positive">
						<p className="users-reviews__amount positive">13</p>
						<span>Положительные</span>
					</div>
					<div className="users-reviews__neutral">
						<p className="users-reviews__amount neutral">2</p>
						<span>Нейтральный</span>
					</div>
					<div className="users-reviews__negative">
						<p className="users-reviews__amount negative">17</p>
						<span>Отрицательные</span>
					</div>
				</div>
			</div>
		</div>
	)
}