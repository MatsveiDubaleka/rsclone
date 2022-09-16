import "./MovieCardRatingSet.scss";
import ReactStars from "react-rating-stars-component";
import { SetStateAction, useState } from 'react';

export const MovieCardRatingSet = () => {
	const[newRating, setRating] = useState("");
	const[animation, setAnimation] = useState("");

	const newRatingClassName = "movie-card-rating-set__stars-block_new-rating";
	const oldRating = 9; // TODO: Take from api

	return (
		<div className="movie-card-rating-set">
			<div className="movie-card-rating-set__stars-block">
				<div className="movie-card-rating-set__stars-block_stars">
					<ReactStars
						count={10}
						size={20}
						a11y={true}
						edit={true}
						value={oldRating}
						onChange={(value: SetStateAction<string>): void => { setRating(value);
							console.log("New rating: " + value);
							setAnimation(" animation");
							setTimeout(()=>setAnimation(""), 500)
						}}
					/>
				</div>
				<span className="movie-card-rating-set__stars-block_splitter">|</span>
				<span className={newRatingClassName + animation}>{newRating ? newRating : oldRating}</span>
			</div>	
			<div className="movie-card-rating-set__stars-block_menu"></div>	
		</div>
	)
}
