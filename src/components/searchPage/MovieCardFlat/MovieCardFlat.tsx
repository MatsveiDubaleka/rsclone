import { FC, useState } from 'react';
import { MovieCardRatingSet } from '../MovieCardRatingSet/MovieCardRatingSet';
import { IDropdownMovie, IDropdownMovieList } from './types';
import './MovieCardFlat.scss';
import { NavLink } from 'react-router-dom';
import { getClassForRaiting } from '../../../utils/utilsFunctions';

const MovieCardFlat: FC<IDropdownMovie> = ({
  num,
  nameRu,
  nameEn,
  posterUrlPreview,
  year,
  rating,
  ratingKinopoisk = NaN,
  filmId,
  kinopoiskId,
  genres,
  countries,
}) => {
  const [elem, setElem] = useState(false);

  const infoMainArray = [nameEn, nameRu, year]
    .filter((item) => item !== undefined && item !== null)
    .join(', '); // эти переменные, чтобы не было висячих запятых в верстке
  const countriesArray = countries
    .slice(0, 5)
    .map((item) => item.country)
    .join(', ');
  const genresArray = genres
    .slice(0, 5)
    .map((item) => item.genre)
    .join(', ');

  return (
    <li className='movie-card-flat' id={`${filmId ? filmId : kinopoiskId}`}>
      <p className='movie-card-flat__number'>{num + 1}</p>
      <div className='movie-card-flat__poster'>
        <div
          className='movie-card-flat__poster-image'
          style={{ backgroundImage: `url(${posterUrlPreview})` }}
        >
          <div
            className={`movie-card-flat__poster-rating ${getClassForRaiting(
              rating ? rating : ratingKinopoisk
            )}`}
          >
            {String(rating ? rating : ratingKinopoisk) !== 'null' &&
            String(rating ? rating : ratingKinopoisk) !== 'undefined' &&
            rating
              ? rating
              : ratingKinopoisk === 0
              ? String(rating ? rating : ratingKinopoisk)
              : '-'}
          </div>
        </div>
      </div>
      <div className='movie-card-flat__info'>
        <NavLink to={`/movie/${filmId ? filmId : kinopoiskId}`}>
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
      <p
        className={`movie-card-flat__rating ${getClassForRaiting(
          rating ? rating : ratingKinopoisk
        )}`}
      >
        {String(rating ? rating : ratingKinopoisk) !== 'null' &&
        String(rating ? rating : ratingKinopoisk) !== 'undefined' &&
        rating
          ? rating
          : ratingKinopoisk === 0
          ? rating
            ? rating
            : ratingKinopoisk
          : '-'}
      </p>
      <div className='movie-card-flat__buttons'>
        <button className='movie-card-flat__to-watch-btn'>
          <span className='flag'></span>Буду смотреть
        </button>
        <button
          onClick={(): void => setElem(!elem)}
          className='movie-card-flat__to-rate-btn'
        ></button>
      </div>
      {elem ? <MovieCardRatingSet /> : null}
    </li>
  );
};

const MovieCardFlatList = ({ movies }: IDropdownMovieList) => {
  return (
    <ul>
      {movies.map((movie: IDropdownMovie, index: number): JSX.Element => {
        return (
          <MovieCardFlat
            num={index}
            nameRu={movie.nameRu}
            nameEn={movie.nameEn}
            year={movie.year}
            rating={movie.rating ? movie.rating : movie.ratingKinopoisk}
            posterUrlPreview={movie.posterUrlPreview}
            filmLength={movie.filmLength}
            genres={movie.genres}
            countries={movie.countries}
            filmId={movie.filmId ? movie.filmId : movie.kinopoiskId}
            key={`dropdown-movie-item-${index}`}
          />
        );
      })}
    </ul>
  );
};

export default MovieCardFlatList;
