import "./MovieRating.scss";
import ReactStars from "react-rating-stars-component";
import { Movie } from "../MovieInfo/MovieInfo";
import { FC } from "react";

type MovieRatingProps = {
	movie: Movie;
}

export const MovieRating : FC<MovieRatingProps> = ({movie}) => {

	let ratingStyles = "movie-rating__content_rating_num";

	if (movie?.ratingKinopoisk) {
		if (movie.ratingKinopoisk < 5) {
			ratingStyles += " negative";
		} else if (movie.ratingKinopoisk < 7) {
			ratingStyles += " neutral";
		} else {
			ratingStyles += " positive";
		}
	}

	return (
		<div className="movie-rating">
			<div className="movie-rating__title">Рейтинг фильма</div>
			<div className="movie-rating__content">
				<div className="movie-rating__content_stars">
					{movie.ratingKinopoisk && <ReactStars
						count={10}
						size={30}
						a11y={true}
						isHalf={true}
						edit={false}
						value={movie.ratingKinopoisk}
					/>}
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
					<div className={ratingStyles}>{movie.ratingKinopoisk}</div>
					<div className="movie-rating__content_rating_sum">{movie.ratingKinopoiskVoteCount} оценки</div>
				</div>
				<div className="movie-rating__content_rating-imdb">
					<span className="movie-rating__content_rating-imdb_num">IMDb: {movie.ratingImdb}</span>
					<span className="movie-rating__content_rating-imdb_sum">{movie.ratingImdbVoteCount} оценки</span>
				</div>
			</div>
		</div>
	)
}
