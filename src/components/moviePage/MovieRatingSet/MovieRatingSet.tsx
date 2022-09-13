import "./MovieRatingSet.scss";
import ReactStars from "react-rating-stars-component";
import { SetStateAction, useState } from 'react';

export const MovieRatingSet = () => {
	const[newRating, setRating] = useState("");

	const oldRating = 9;

	let ratingStyles = "movie-rating-set__old-rating";

	if (oldRating < 5) {
		ratingStyles += " negative";
	} else if (oldRating < 7) {
		ratingStyles += " neutral";
	} else {
		ratingStyles += " positive";
	}

	return (
		<div className="movie-rating-set">
			<div className={ratingStyles}>{oldRating}</div>
			<div className="movie-rating-set__stars-block">
				<div className="movie-rating-set__stars-block_stars">
					<ReactStars
						count={10}
						size={20}
						a11y={true}
						edit={true}
						value={oldRating}
						onChange={(value: SetStateAction<string>): void => { setRating(value);
							console.log("New rating: " + value)}}
					/>
				</div>
				<span className="movie-rating-set__stars-block_splitter">|</span>
				<span className="movie-rating-set__stars-block_new-rating">{newRating ? newRating : oldRating}</span>
			</div>	
			<div className="movie-rating-set__stars-block_menu"></div>	
		</div>
	)
}
