import axios from 'axios';
import { useEffect, useState } from 'react';
import { token } from '../../../utils/token';
import ReactPlayer from 'react-player';
import "./MovieVideo.scss";

const MovieVideo = () => {
	const [trailer, setTrailer] = useState<any>("");
	const [videoURL, setVideoURL] = useState<any>("");
	
	const currentYear: number = new Date().getFullYear();
	const currentMonth: string = new Date().toLocaleString('en', {       
		month: 'long'       
	}).toUpperCase();

	useEffect(()=> {
		axios.get(`https://kinopoiskapiunofficial.tech/api/v2.2/films/premieres?year=${currentYear}&month=${currentMonth}`, {
			headers: {
				'X-API-KEY': token
			}
		}).then(({ data }) => {
			const len = Math.floor(Math.random() * data.total);
			setTrailer(data.items[len])});
	}, []);

	// eslint-disable-next-line @typescript-eslint/no-var-requires
	const movieTrailer = require('movie-trailer');
	movieTrailer(trailer.nameEn ? trailer.nameEn : trailer.nameRu)
  .then((response: any) => setVideoURL(response))

	return (
		<div className="movie-video">
			<div className="movie-video__react-player">
				<ReactPlayer url={videoURL} 
				muted={true} playing={true} loop={true} controls={false} 
				width="940px" height="580px" />
			</div>
			<div className="movie-video__about">
				<div className="movie-video__title">{trailer.nameRu ? trailer.nameRu : trailer.nameEn}</div>
				<div className="movie-video__year">Год: {trailer.year}</div>
			</div>
		</div>
	)
}

export default MovieVideo;