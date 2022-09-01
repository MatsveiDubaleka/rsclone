import { FC, useState } from 'react';
import { MovieCardRatingSet } from '../MovieCardRatingSet/MovieCardRatingSet';
import { IDropdownMovie, IDropdownMovieList } from './types';
import "./MovieCardFlat.scss"
import { NavLink } from 'react-router-dom';
import { getClassForRaiting } from '../../../utils/utilsFunctions';

const MovieCardFlat : FC<IDropdownMovie> = ({num, nameRu, nameEn, posterUrlPreview, year, rating, filmId, filmLength, genres, countries}) => {
	const[elem, setElem] = useState(false);

	const infoMainArray = [nameEn, nameRu, year].filter(item => item !== undefined).join(', '); // эти переменные, чтобы не было висячих запятых в верстке
	const countriesArray = countries.map(item => item.country).join(', ');
	const genresArray = genres.map(item => item.genre).join(', ');

	return (
		
		<li className="movie-card-flat" id={`${filmId}`}>
			<p className='movie-card-flat__number'>{num + 1}</p>
			<div className="movie-card-flat__poster">
				<div className="movie-card-flat__poster-image" style={{backgroundImage: `url(${posterUrlPreview})`}}>
					<div className={`movie-card-flat__poster-rating ${getClassForRaiting(rating)}`}>
						{String(rating) !== 'null' ? rating : '-'}
					</div>
				</div>
			</div>
			<div className='movie-card-flat__info'>
				<NavLink to={`/movie/${filmId}`}>
					<h3 className='movie-card-flat__title-ru'>{nameRu}</h3>
				</NavLink>
				<div className='movie-card-flat__info-main'>
					<p>{infoMainArray}</p>
				</div>
				<div className='movie-card-flat__info-sub'>
					<p className='movie-card-flat__country'>Страна: {countriesArray}</p>
				</div>
				<p className='movie-card-flat__genre'>Жанр: {genresArray}</p>
			</div>
				<p className={`movie-card-flat__rating ${getClassForRaiting(rating)}`}>
					{String(rating) !== 'null' ? rating : '-'}
				</p> 
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
