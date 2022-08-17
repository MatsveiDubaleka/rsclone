import "./DropdownList.scss";
import { IDropdownMovieList, IDropdownMovie } from "./types";

const DropdownMovieItem = ({nameRu, nameEn, posterUrlPreview, year, rating, filmId} : IDropdownMovie) => {

	let ratingClass = 'dropdown-movie-item__rating';

	if (Number(rating) < 5) {
		ratingClass += ' negative';
	} else if (Number(rating) < 7) {
		ratingClass += ' neutral';
	} else {
		ratingClass += ' positive';
	}

	return(
		<div className="dropdown-movie-item" data-id={filmId}>
			<div className="dropdown-movie-item__poster" style={{backgroundImage: `url(${posterUrlPreview})`}}></div>
			<div className="dropdown-movie-item__info">
				<p className="dropdown-movie-item__title">{nameRu}</p>
				<p className={ratingClass}>{rating},</p>
				<p className="dropdown-movie-item__title-en">{nameEn},</p>
				<p className="dropdown-movie-item__year">{year}</p>
			</div>
		</div>
	)
}

const DropdownList = ({movies} : IDropdownMovieList) => {

	movies.splice(5);

	return (
		<div className="dropdown-list">
			<div className="dropdown-list__movies">
				{movies.map((movie: IDropdownMovie) : JSX.Element => {
					return <DropdownMovieItem  nameRu={movie.nameRu} nameEn={movie.nameEn} year={movie.year} rating={movie.rating} posterUrlPreview={movie.posterUrlPreview} key={movie.filmId}></DropdownMovieItem>
				})}
			</div>
			<button className="dropdown-list__show-btn">Показать всё</button>
		</div>
	)
}

export default DropdownList;
