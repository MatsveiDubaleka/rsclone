import "./MovieRating.scss";
import ReactStars from "react-rating-stars-component";

export const MovieRating = () => {
	type MovieRating = {
		size: number;
		count: number;
		value: number;
		a11y: boolean;
		isHalf: boolean;
		edit: boolean
	}

	const movieRating: MovieRating = {
		size: 30,
		count: 10,
		value: 4.3,
		a11y: true,
		isHalf: true,
		edit: false
	};

	return (
		<div className="movie-rating">
			<div className="movie-rating__title">Рейтинг фильма</div>
			<div className="movie-rating__content">
				<div className="movie-rating__content_stars">
					<ReactStars {...movieRating} />
				</div>
				<div className="movie-rating__content_stars-numbers">
					<span>1</span>
				</div>
				<div className="movie-rating__content_rating">
					<div className="movie-rating__content_rating_num negative">4.3</div>
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
