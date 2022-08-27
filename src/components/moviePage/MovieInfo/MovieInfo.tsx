import { FC, useEffect, useState } from 'react';
import { getData } from '../../../utils/config';
import { MovieDescription } from '../MovieDescription/MovieDescription';
import { MovieIdProps } from '../MoviePageLayout/MoviePageLayout';
import { MovieRatingSet } from '../MovieRatingSet/MovieRatingSet';
import "./MovieInfo.scss";

type Movie = {
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
	ratingAgeLimits?: string
}

type Person = {
	description?: null | string,
	nameEn?: string,
	nameRu?: string,
	posterUrl?: string | null,
	professionKey?: string,
	professionText?: string,
	staffId?: number
}

type Budget = {
	amount: number,
	currencyCode: string,
	name: string,
	symbol: string,
	type: string,
}

type Distributions = {
	companies: any,
	country: Country | null,
	date: string,
	reRelease: boolean,
	subType: string,
	type: string
}

type Genre = {
	genre: string
}

type Country = {
	country: string
}

type Cast = Person [];



export const MovieInfo: FC<MovieIdProps> = ({ movieId }) => {
	const[elem, setElem] = useState<JSX.Element>();

	const [movie, setMovie] = useState<Movie>({});
	const [persons, setPersons] = useState<Cast>([]);

	useEffect(() => {
		getData(`v2.2/films/${movieId}/`, setMovie);
	}, [setMovie]);

	useEffect(() => {
		getData(`v1/staff?filmId=${movieId}`, setPersons);
	}, [setPersons]);

	const filterPersons = (persons: Cast, key : string) => {
		if (key === "ACTOR") {
			return persons.filter((person : Person) => person.professionKey === key).splice(0, 13);
		} else {
			return persons.filter((person : Person) => person.professionKey === key);
		}
	}

	console.log(persons)

	console.log(filterPersons(persons, "DIRECTOR"));


	return(
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
					<p>{ filterPersons(persons, "DIRECTOR")?.map((item : Person) => item.nameRu)}</p>
					<p>Сценарий</p>
					<p>{filterPersons(persons, "WRITER")?.map((item : Person) => item.nameRu).join(', ')}</p>
					<p>Продюсер</p>
					<p>{filterPersons(persons, "PRODUCER")?.map((item : Person) => item.nameRu).join(', ')}</p>
					<p>Оператор</p>
					<p>{filterPersons(persons, "OPERATOR")?.map((item : Person) => item.nameRu).join(', ')}</p>
					<p>Композитор</p>
					<p>{filterPersons(persons, "COMPOSER")?.map((item : Person) => item.nameRu).join(', ')}</p>
					<p>Монтаж</p>
					<p>{filterPersons(persons, "EDITOR")?.map((item : Person) => item.nameRu).join(', ')}</p>
					<p>Сборы в мире</p>
					<p className="movie-info__fees-world">$ 96 448</p>
					<p>Премьера в России</p>
					<p className="movie-info__premiere-russia">4 августа 2022, “Capella Film”</p>
					<p>Премьера в мире</p>
					<p className="movie-info__premiere-world">4 августа 2022, “Capella Film”</p>
					<p>Цифровой релиз</p>
					<p>8 сентября 2022, “Capella Film”</p>
					<p>Время</p>
					<p className="movie-info__movie-length">{ `${movie?.filmLength} мин.`}</p>
				</div>
			</div>
			<div className="movie-info__column-3">
				<p className="movie-info__rating negative">{movie?.ratingKinopoisk}</p>
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
		</>
	)
}