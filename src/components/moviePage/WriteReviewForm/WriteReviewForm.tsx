import './WriteReviewForm.scss';

export const WriteReviewForm = () => {
	return(
		<div className="write-review">
			<p className="write-review__username">Vasya</p>
			<form className="review-form">
				<select className="review-form__select">  
					<option value='' selected disabled hidden>Тип рецензии</option>
					<option>Положительная</option>
					<option>Нейтральная</option>
					<option>Отрицательная</option>
				</select>
				<input className="review-form__input" value="Заголовок"></input>
				<textarea className="review-form__textarea" value="Текст"></textarea>
			</form>
		</div>
	)
}