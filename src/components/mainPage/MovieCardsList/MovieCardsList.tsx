import { useState, useEffect, FC } from "react";
import MovieCard from "../MovieCard/MovieCard";
import { IMovieCardList } from "./types";
import "./MovieCardsList.scss";
import axios from "axios";
import { token } from "../../../utils/token";

const MovieCardsList: FC<IMovieCardList> = ({title}) => {

	const [movies, setMovies] = useState <any>([]);

	useEffect(()=> {
		axios.get('https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_250_BEST_FILMS&page=1', {
			headers: {
				'X-API-KEY': token
			}
		}).then(({ data }) => setMovies(data.films));

	}, []);
/*
	console.log(movies);
*/
	movies.splice(6);

	return (
		<div className="movie-cards-list">
			<h2 className="movie-cards-list__title">{title}</h2>
			<div className="movie-cards-list__movies">
				{movies?.map((movie: any) : JSX.Element => {
					return <MovieCard nameRu={movie.nameRu} posterUrlPreview={movie.posterUrlPreview} year={movie.year} rating={movie.rating} genre={movie.genres[0].genre} key={`movie-card-${movie.nameRu}`}></MovieCard>
				})}
			</div>
		</div>
	)
}

export default MovieCardsList; 