import { useState, useEffect, FC } from "react";
import MovieCard from "../MovieCard/MovieCard";
import "./MovieCardsList.scss";
import axios from "axios";
import { token } from "../../../utils/token";

type MovieCardList = {
	title: string;
	url: string,
	listType: string
}

type MoviePopular = {
	countries: [
		{
			country?: string | undefined
		}
	],
	filmId: number,
	filmLength: string,
	nameRu: string,
	nameEn: string,
	posterUrl: string,
	posterUrlPreview: string,
	rating: string,
	ratingChange: any, 
	ratingVoteCount: number,
	year: string
}

type MovieNew = {
	countries: [
		{
			country?: string | undefined
		}
	],
	duration: number,
	genres: [
		{
			genre?: string | undefined
		},
	],
	kinopoiskId: number,
	nameRu: string,
	nameEn: string,
	posterUrl: string,
	posterUrlPreview: string,
	premiereRu: string,
	year: string
}

type MovieArray = MoviePopular[] | MovieNew[];

const MovieCardsList: FC<MovieCardList> = ({title, url, listType}) => {

	const propType = listType === "new" ? 'items' : 'films';

	const [movies, setMovies] = useState <MovieArray>([]);

	useEffect(()=> {
		axios.get(`https://kinopoiskapiunofficial.tech/api/${url}`, {
			headers: {
				'X-API-KEY': token
			}
		}).then(({ data }) => setMovies(data[propType]));

	}, [setMovies]);

	movies?.splice(6);

	return (
		<div className="movie-cards-list">
			<h2 className="movie-cards-list__title">{title}</h2>
			<div className="movie-cards-list__movies">
				{movies?.map((movie: any) : JSX.Element => {
					console.log('id:', movie.kinopoiskId || movie.filmId);
					return <MovieCard kinopoiskId={movie.kinopoiskId || movie.filmId} nameRu={movie.nameRu} posterUrlPreview={movie.posterUrlPreview} year={movie.year} rating={movie.rating} genre={movie.genres[0].genre} key={`movie-card-${movie.nameRu}`}></MovieCard>
				})}
			</div>
		</div>
	)
}

export default MovieCardsList; 