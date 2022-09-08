import './MovieCard.scss';
import { IMovieCard } from './types';
import { NavLink } from 'react-router-dom';
import { FC } from 'react';
import { getClassForRaiting } from '../../../utils/utilsFunctions';

const MovieCard: FC<IMovieCard> = ({
  nameRu,
  posterUrlPreview,
  year,
  genre,
  rating,
  kinopoiskId,
}) => {
  return (
    <NavLink to={`/movie/${kinopoiskId}`}>
      <div className='movie-card' id={`${kinopoiskId}`}>
        <div className='movie-card__poster'>
          <div
            className='movie-card__image'
            style={{ backgroundImage: `url(${posterUrlPreview})` }}
          ></div>
          {rating && (
            <>
              <div
                className={`movie-card__rating ${getClassForRaiting(rating)}`}
              >
                {rating}
              </div>
            </>
          )}
        </div>
        <p className='movie-card__title'>{nameRu}</p>
        <div className='movie-card__info'>
          <p className='movie-card__year'>{year},</p>
          <p className='movie-card__genre'>{genre}</p>
        </div>
      </div>
    </NavLink>
  );
};

export default MovieCard;
