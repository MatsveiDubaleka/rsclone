import { FC, useEffect, useState } from 'react';
import { getData } from '../../../utils/config';
import { MovieDescription } from '../MovieDescription/MovieDescription';
import { MovieIdProps } from '../MoviePageLayout/MoviePageLayout';
import { MovieRating } from '../MovieRating/MovieRating';
import { MovieRatingSet } from '../MovieRatingSet/MovieRatingSet';
import "./MovieInfo.scss";
import { addMovieToLocalStorage, filterPersons, findBudget, findDWorldPremiere, formatAge, formatData } from './utils';

export type Movie = {
  nameRu?: string,
  year?: number | string,
  countries?: Country [],
  genres?: Genre [],
  slogan?: string,
  filmLength?: number,
  posterUrl?: string,
  coverUrl?: string,
  description?: string | undefined,
  ratingKinopoisk?: number,
  ratingKinopoiskVoteCount?: number,
  reviewsCount?: number,
  ratingAgeLimits?: string,
  ratingImdb?: number,
  ratingImdbVoteCount?: number,
  kinopoiskId?: number,
  posterUrlPreview?: string
}

export type Person = {
  description?: null | string,
  nameEn?: string,
  nameRu?: string,
  posterUrl?: string | null,
  professionKey?: string,
  professionText?: string,
  staffId?: number
}

export type Budget = {
  amount: number,
  currencyCode: string,
  name: string,
  symbol: string,
  type: string,
}

export type BudgetData = {
  total: number,
  items: Budget []
} | undefined

export type Distributions = {
  companies: any,
  country: Country | null,
  date: string,
  reRelease: boolean,
  subType: string,
  type: string
}

export type DistributionsData = {
  total: number,
  items: Distributions []
} | undefined

type Genre = {
  genre: string
}

type Country = {
  country: string
}

export type Cast = Person [];

export const MovieInfo: FC<MovieIdProps> = ({ movieId }) => {

  window.scrollTo(0, 0);

  const[elem, setElem] = useState<JSX.Element>();

  const [movie, setMovie] = useState<Movie>({});
  const [persons, setPersons] = useState<Cast>([]);
  const [budget, setBudget] = useState<BudgetData>();
  const [budgetRus, setBudgetRus] = useState<string | undefined>('');
  const [distributions, setDistributions] = useState();

  useEffect(() => {
    getData(`v1/staff?filmId=${movieId}`, setPersons);
  }, [setPersons]);

  useEffect(() => {
    getData(`v2.2/films/${movieId}/box_office`, setBudget);
    const budgetRus = findBudget(budget, "RUS");
    setBudgetRus(budgetRus);
  }, [setBudget, setBudgetRus]);

  useEffect(() => {
    getData(`v2.2/films/${movieId}/distributions`, setDistributions);
  }, [setDistributions]);

  useEffect(() => {
    getData(`v2.2/films/${movieId}/`, setMovie);
  }, [setMovie]);

  useEffect(() => {
    setTimeout(setToLocalStorage, 1500);
  }, [])

  let ratingClass = '';
  if (movie?.ratingKinopoisk) {
    ratingClass = movie?.ratingKinopoisk < 5 ? 'negative' : movie?.ratingKinopoisk < 7 ? 'neutral' : 'positive';
  }

  const setToLocalStorage = async() => {
    await getData(`v2.2/films/${movieId}/`, addMovieToLocalStorage);
  }

  return(
  <>
    { movie?.nameRu ? 
      <> 
      <div className="movie-info">
        <div className="movie-info__column-1">
          <div className="movie-info__poster" style={{ backgroundImage: `url(${movie?.posterUrl})`}}></div>
          <div className="movie-info__trailer" style={{ backgroundImage: `url(${movie?.coverUrl})`}}></div>
        </div>
        <div className="movie-info__column-2">
          <h2 className="movie-info__title">{ movie?.nameRu } {`(${movie?.year})`}</h2>
          <div className="movie-info__buttons">
            <button className="movie-info__to-watch-btn"></button>
            <button onClick={(): void => elem ? setElem(undefined) : setElem(<MovieRatingSet />)} 
              className="movie-info__to-rate-btn"></button>
            {elem ? elem : null}
          </div>
          <h3 className="movie-info__about-title">О фильме</h3>
          <div className="movie-info__main">
            <p>Год производства</p>
            <p className="movie-info__year">{ movie?.year }</p>
            <p>Страна</p>
            <p className="movie-info__countries">{movie?.countries?.map((item : Country)  => item.country).join(', ')}</p>
            <p>Жанр</p>
            <p className="movie-info__genres">{movie?.genres?.map((item : Genre) => item.genre).join(', ')}</p>
            { movie?.slogan && 
                  <>
                    <p>Слоган</p>
                    <p className="movie-info__slogan">{movie?.slogan}</p>
                  </>
              }
            <p className="movie-info__director">Режиссёр</p>
            <p>{ filterPersons(persons, "DIRECTOR")?.map((item : Person) => item.nameRu !== "" ? item.nameRu : item.nameEn).join(', ')}</p>
            <p>Сценарий</p>
            <p>{filterPersons(persons, "WRITER")?.map((item : Person) => item.nameRu !== "" ? item.nameRu : item.nameEn).join(', ') || '-'}</p>
            <p>Продюсер</p>
            <p>{filterPersons(persons, "PRODUCER")?.map((item : Person) => item.nameRu !== "" ? item.nameRu : item.nameEn).join(', ') || '-'}</p>
            <p>Оператор</p>
            <p>{filterPersons(persons, "OPERATOR")?.map((item : Person) => item.nameRu !== "" ? item.nameRu : item.nameEn).join(', ') || '-'}</p>
            <p>Композитор</p>
            <p>{filterPersons(persons, "COMPOSER")?.map((item : Person) => item.nameRu !== "" ? item.nameRu : item.nameEn).join(', ') || '-'}</p>
            <p>Монтаж</p>
            <p>{filterPersons(persons, "EDITOR")?.map((item : Person) => item.nameRu !== "" ? item.nameRu : item.nameEn).join(', ') || '-'}</p>
            {budget?.items.length !== 0 && 
              <>
                <p>Бюджет</p>
                <p className="movie-info__fees-world">{findBudget(budget, "BUDGET")}</p>
              </>
            }
            {budgetRus && 
              <>
                <p>Сборы в России</p>
                <p className="movie-info__fees-world">{budgetRus}</p>
              </>
            }
            {findBudget(budget, "WORLD") &&
              <>
                <p>Сборы в мире</p>
                <p className="movie-info__fees-world">{findBudget(budget, "WORLD")}</p>
              </>
            }
            {findDWorldPremiere(distributions) &&
              <>
                <p>Премьера в мире</p>
                <p className="movie-info__premiere-world">{formatData(findDWorldPremiere(distributions))}</p>
              </>
            }
            {movie?.ratingAgeLimits && 
            <>
              <p>Возраст</p>
              <p>{formatAge(movie?.ratingAgeLimits)}</p>
            </>}
            { movie?.filmLength && 
              <>
                <p>Время</p>
                <p className="movie-info__movie-length">{ `${movie?.filmLength} мин.`}</p>
              </>
            }
          </div>
        </div>
        <div className="movie-info__column-3">
          <p className={`movie-info__rating ${ratingClass}`}>{movie?.ratingKinopoisk || '-'}</p>
          <p className="movie-info__ratings-total">{movie?.ratingKinopoiskVoteCount} оценки</p>
          <p className="movie-info__reviews-total">{movie?.reviewsCount} рецензии</p>
          <div className="movie-info__cast">
            <h4 className="movie-info__cast-title">В главных ролях</h4>
            {filterPersons(persons, "ACTOR")?.map((item : Person, index : number) => {
                return <p className="movie-info__actor" key={`actor-${index}`}>{`${item.nameRu}`}</p>
            })}
            <p className="movie-info__actor">и другие...</p>
          </div>
        </div>
      </div>
      <MovieDescription description={movie?.description} />
      <MovieRating movie={movie}/>
      </> :
      <img src='https://samirkerzabi.com/wp-content/uploads/2021/02/1_9EBHIOzhE1XfMYoKz1JcsQ.gif' alt='' width={300}></img>
    }
  </>
  )
}
