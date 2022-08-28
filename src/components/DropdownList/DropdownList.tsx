import { getClassForRaiting } from "../../utils/utilsFunctions";
import "./DropdownList.scss";
import { IDropdownMovieList, IDropdownMovie } from "./types";

const DropdownMovieItem = ({nameRu, nameEn, posterUrlPreview, year, rating, filmId} : IDropdownMovie) => {

	return(
		<div className="dropdown-movie-item" data-id={filmId}>
			<div className="dropdown-movie-item__poster" style={{backgroundImage: `url(${posterUrlPreview})`}}></div>
			<div className="dropdown-movie-item__info">
				<p className="dropdown-movie-item__title">{nameRu}</p>
				{rating > 0 && (
					<p className={`dropdown-movie-item__rating ${getClassForRaiting(rating)}`}>{rating},</p>
				)}
				<p className="dropdown-movie-item__title-en">{nameEn},</p>
				<p className="dropdown-movie-item__year">{year}</p>
			</div>
		</div>
	)
}

const DropdownList = ({movies} : IDropdownMovieList) => {

	movies.splice(5);

	return (
		<ul className="dropdown-list">
			<li className="dropdown-list__movies">
				{movies.map((movie: IDropdownMovie) : JSX.Element => {
					return <DropdownMovieItem  nameRu={movie.nameRu} nameEn={movie.nameEn} year={movie.year} rating={movie.rating} posterUrlPreview={movie.posterUrlPreview} key={`dropdown-movie-item-${movie.filmId}`}></DropdownMovieItem>
				})}
			</li>
			<button className="dropdown-list__show-btn">Показать всё</button>
		</ul>
	)
}

export default DropdownList;

