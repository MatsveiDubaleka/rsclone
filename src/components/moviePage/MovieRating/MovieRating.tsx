import "./MovieRating.scss";
import ReactStars from "react-rating-stars-component";

export const MovieRating = () => {

	const rating = 4; // TODO: Take from api

	let ratingStyles = "movie-rating__content_rating_num";

	if (rating < 5) {
		ratingStyles += " negative";
	} else if (rating < 7) {
		ratingStyles += " neutral";
	} else {
		ratingStyles += " positive";
	}

	return (
		<div className="movie-rating">
			<div className="movie-rating__title">Рейтинг фильма</div>
			<div className="movie-rating__content">
				<div className="movie-rating__content_stars">
					<ReactStars
						count={10}
						size={30}
						a11y={true}
						isHalf={true}
						edit={false}
						value={rating}
					/>
				</div>
				<div className="movie-rating__content_stars-numbers">
					<span>1</span>
					<span>2</span>
					<span>3</span>
					<span>4</span>
					<span>5</span>
					<span>6</span>
					<span>7</span>
					<span>8</span>
					<span>9</span>
					<span>10</span>
				</div>
				<div className="movie-rating__content_rating">
					<div className={ratingStyles}>{rating}</div>
					<div className="movie-rating__content_rating_sum">322 оценки</div>
				</div>
				<div className="movie-rating__content_rating-imdb">
					<span className="movie-rating__content_rating-imdb_num">IMDb: 5.40</span>
					<span className="movie-rating__content_rating-imdb_sum">94 оценки</span>
				</div>
			</div>
		</div>
	)
}
