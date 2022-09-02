import React, { useState } from 'react';
import { getUsernameFromLocalStorage } from '../../../utils/utilsFunctions';
import './WriteReviewForm.scss';

export const WriteReviewForm = () => {

const [inputValue, setInputValue] = useState("Заголовок");
const [textAreaValue, setTextAreaValue] = useState("Текст рецензии");
const [selectValue, setSelectValue] = useState("review-type");

const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
	const target = e.target;
	setInputValue((target as HTMLInputElement).value);
}

const handleTextAreaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
	const target = e.target;
	setTextAreaValue((target as HTMLTextAreaElement).value);
}

const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
	const target = e.target;
	setSelectValue((target as HTMLSelectElement).value);
}

	return(
		<div className="write-review">
			<p className="write-review__username">{getUsernameFromLocalStorage()}</p>
			<form className="review-form">
				<select className="review-form__select" value={selectValue} onChange={handleSelectChange}>
					<option value="review-type" disabled hidden>Тип рецензии</option>
					<option value="positive">Положительная</option>
					<option value="neutral">Нейтральная</option>
					<option value="negative">Отрицательная</option>
				</select>
				<input className="review-form__input" value={inputValue} onChange={handleInputChange}></input>
				<textarea className="review-form__textarea" value={textAreaValue} onChange={handleTextAreaChange}></textarea>
				<button className='review-form__btn'>Опубликовать рецензию</button>
			</form>
		</div>
	)
}

