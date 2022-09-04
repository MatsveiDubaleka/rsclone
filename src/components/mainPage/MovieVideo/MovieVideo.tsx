import axios, { AxiosResponse } from 'axios';
import { useEffect, useState } from 'react';
import { token } from '../../../utils/token';
import ReactPlayer from 'react-player';
import "./MovieVideo.scss";
import { NavLink } from 'react-router-dom';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const movieTrailer = require('movie-trailer');

type TrailersArray = {
	nameEn: string;
}

const MovieVideo = () => {
	const [trailer, setTrailer] = useState<any>([]);
	const [videoURL, setVideoURL] = useState<string>("");

	const currentYear: string = new Date().getFullYear().toString();
	const currentMonth: string = new Date().toLocaleString('en', {       
		month: 'long'       
	}).toUpperCase();

	useEffect((): void => {
		axios.get<TrailersArray[]>(`https://rskinopoisk.herokuapp.com/trailer/getTrailer`, {
			headers: {
				'Content-Type': 'application/json'
			}
		}).then(({ data }: AxiosResponse<TrailersArray[]>): void => {
				const filteredData: TrailersArray[] = data.filter((x: { nameEn: string }): boolean => x.nameEn.length > 0);
				const lastElement: number = filteredData.length-1;
				const filmName: string = filteredData[lastElement].nameEn;
				
				if(filmName !== undefined){
					axios.get(`https://kinopoiskapiunofficial.tech/api/v2.1/films/search-by-keyword?keyword=${filmName}&page=1`, {
						headers: {
							'X-API-KEY': token
					}
					}).then(({ data }) => setTrailer(data.films[0]));
				} else {
					axios.get(`https://kinopoiskapiunofficial.tech/api/v2.2/films/premieres?year=${currentYear}&month=${currentMonth}`, {
						headers: {
							'X-API-KEY': token
						}
					}).then(({ data }) => {
						const filteredData = data.items.filter((x: { nameEn: string }): boolean => x.nameEn.length > 0);
						const len: number = Math.floor(Math.random() * filteredData.length);
						setTrailer(filteredData[len])})
				}
		})
	}, [setTrailer]);

	const nameEn: string | undefined = trailer.nameEn; // get english film title
console.log(trailer)
	movieTrailer(nameEn)
		.then((response: string): void => {(response === null ? setVideoURL("https://youtu.be/5bqpcIX2VDQ") : setVideoURL(response))})
		.catch((error: string): void => {
			throw (error);
		});
	
	return (
		<div className="movie-video">
			<div className="movie-video__react-player">
				<ReactPlayer url={videoURL} 
				muted={true} playing={true} loop={true} controls={false} 
				progressInterval={1000} width="940px" height="580px" />
			</div>
			<div className="movie-video__about">
				<NavLink to={`/movie/${trailer.filmId ? trailer.filmId : trailer.kinopoiskId}`}>
					<div className="movie-video__title">{trailer.nameRu ? trailer.nameRu : trailer.nameEn}</div>
				</NavLink>
				<div className="movie-video__genre">{trailer.nameEn}</div>
				<div className="movie-video__year">Год: {trailer.year}</div>
			</div>
		</div>
	)
}

export default MovieVideo;
