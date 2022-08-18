import "./MovieCard.scss";
import { IMovieCard } from "./types";

const MovieCard = ({title, imgUrl, year, genre, rating}: IMovieCard) => {

	let imgClasses = 'movie-card__rating';

	if (rating < 5) {
		imgClasses += ' negative';
	} else if (rating < 7) {
		imgClasses += ' neutral';
	} else {
		imgClasses += ' positive';
	}

	return (
		<div className="movie-card">
			<div className="movie-card__poster">
				<div className="movie-card__image" style={{backgroundImage: `url(${imgUrl})`}}></div>
				<div className={imgClasses}>{rating}</div>
			</div>
			<p className="movie-card__title">{title}</p>
			<div className="movie-card__info">
				<p className="movie-card__year">{year},</p>
				<p className="movie-card__genre">{genre}</p>
			</div>
		</div>
	)
}

export default MovieCard;