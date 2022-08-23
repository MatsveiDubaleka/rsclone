import React, { useState } from 'react';
import './WriteReviewForm.scss';

export const WriteReviewForm = () => {

const [inputValue, setInputValue] = useState("Заголовок");
const [textAreaValue, setTextAreaValue] = useState("Текст рецензии");

const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
	const target = e.target;
	setInputValue((target as HTMLInputElement).value);
}

const handleTextArea = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
	const target = e.target;
	setTextAreaValue((target as HTMLTextAreaElement).value);
}

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
				<input className="review-form__input" value={inputValue} onChange={handleInputChange}></input>
				<textarea className="review-form__textarea" value={textAreaValue} onChange={handleTextArea}></textarea>
				<button className='review-form__btn'>Опубликовать рецензию</button>
			</form>
		</div>
	)
}