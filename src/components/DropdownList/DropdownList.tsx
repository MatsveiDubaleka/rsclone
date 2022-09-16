import { Link, useNavigate } from 'react-router-dom';
import { getClassForRaiting } from '../../utils/utilsFunctions';
import { searchWord } from '../Header/Header';
import './DropdownList.scss';
import { IDropdownMovieList, IDropdownMovie } from './types';

const DropdownMovieItem = ({
  nameRu,
  nameEn,
  posterUrlPreview,
  year,
  rating,
  filmId,
}: IDropdownMovie) => {
  const infoArr = [nameEn, year]
    .filter((item) => item !== undefined)
    .join(', ');

  return (
    <div className='dropdown-movie-item' data-id={filmId}>
      <div
        className='dropdown-movie-item__poster'
        style={{ backgroundImage: `url(${posterUrlPreview})` }}
      ></div>
      <div className='dropdown-movie-item__info'>
        <p className='dropdown-movie-item__title'>{nameRu}</p>
        {rating > 0 && (
          <p
            className={`dropdown-movie-item__rating ${getClassForRaiting(
              rating
            )}`}
          >
            {rating},
          </p>
        )}
        <p className='dropdown-movie-item__title-en-and-year'>{infoArr}</p>
      </div>
      {}
    </div>
  );
};

const DropdownList = ({ movies }: IDropdownMovieList) => {
  
  const navigate = useNavigate();

  movies.splice(5);

  return (
    <ul className='dropdown-list'>
      <li className='dropdown-list__movies'>
        {movies.map((movie: IDropdownMovie): JSX.Element => {
          return (
            <>
              <Link to={`/movie/${movie.filmId}`}>
                <DropdownMovieItem
                  nameRu={movie.nameRu}
                  nameEn={movie.nameEn}
                  year={movie.year}
                  rating={movie.rating}
                  posterUrlPreview={movie.posterUrlPreview}
                  key={`${movie.filmId}`}
                ></DropdownMovieItem>
              </Link>
            </>
          );
        })}
      </li>
      <button
        onClick={() => navigate(`/searchPage?search=${searchWord}`)}
        className='dropdown-list__show-btn'
      >
        Показать всё
      </button>
    </ul>
  );
};

export default DropdownList;
