import { FC, useState } from 'react';
import { MovieCardRatingSet } from '../MovieCardRatingSet/MovieCardRatingSet';
import { IDropdownMovie, IDropdownMovieList } from './types';
import "./MovieCardFlat.scss"
import { NavLink } from 'react-router-dom';

const MovieCardFlat : FC<IDropdownMovie> = ({num, nameRu, nameEn, posterUrlPreview, year, rating, filmId, filmLength, genres, countries}) => {
	const[elem, setElem] = useState(false);

	return (
		<NavLink to={`/movie/${filmId}`}>
		<li className="movie-card-flat" id={`${filmId}`} onClick={() => console.log(filmId)}>
			<p className='movie-card-flat__number'>{num + 1}</p>
			<div className="movie-card-flat__poster">
				<div className="movie-card-flat__poster-image" style={{backgroundImage: `url(${posterUrlPreview})`}}>
					<div className="movie-card-flat__poster-rating">{rating}</div>
				</div>
			</div>
			<div className='movie-card-flat__info'>
				<h3 className='movie-card-flat__title-ru'>{nameRu}</h3>
				<div className='movie-card-flat__info-main'>
					<p className='movie-card-flat__title-en'>{nameEn},</p>
					<p className='movie-card-flat__year'>{year},</p>
					<p className='movie-card-flat__duration'><span>{filmLength}</span></p>
				</div>
				<div className='movie-card-flat__info-sub'>
					<p className='movie-card-flat__country'>Страна: {countries.map(x=>x.country + ', ')}</p>
				</div>
				<p className='movie-card-flat__genre'>Жанр: {genres.map(x=>x.genre + ', ')}</p>
			</div>
			<p className='movie-card-flat__rating-imdb rating_good'>{rating}</p>
			<div className='movie-card-flat__buttons'>
				<button className='movie-card-flat__to-watch-btn'><span className='flag'></span>Буду смотреть</button>
				<button onClick={
					(): void => setElem(!elem)
				}
					className='movie-card-flat__to-rate-btn'>
				</button>
			</div>
			{elem?<MovieCardRatingSet />:null}
		</li>
		</NavLink>
	)
}

const MovieCardFlatList = ({movies} : IDropdownMovieList) => {

	return (
			<ul>
				{movies.map((movie: IDropdownMovie, index: number) : JSX.Element => {
					return <MovieCardFlat num={index} nameRu={movie.nameRu}
					nameEn={movie.nameEn} year={movie.year}
					rating={movie.rating} posterUrlPreview={movie.posterUrlPreview}
					filmLength={movie.filmLength} genres={movie.genres}
					countries={movie.countries} filmId={movie.filmId} key={`dropdown-movie-item-${movie.filmId}`} />
				})}
			</ul>
	)
}

export default MovieCardFlatList;
