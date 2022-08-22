import axios from 'axios';
import { useEffect, useState } from 'react';
import { token } from '../../../utils/token';
import ReactPlayer from 'react-player';
import "./MovieVideo.scss";

const MovieVideo = () => {
	const [trailer, setTrailer] = useState<any>("");
	const [videoURL, setVideoURL] = useState<string>("");
	
	const currentYear: string = new Date().getFullYear().toString();
	const currentMonth: string = new Date().toLocaleString('en', {       
		month: 'long'       
	}).toUpperCase();

	useEffect(() => {
		axios.get(`https://kinopoiskapiunofficial.tech/api/v2.2/films/premieres?year=${currentYear}&month=${currentMonth}`, {
			headers: {
				'X-API-KEY': token
			}
		}).then(({ data }) => {
			const filteredData = data.items.filter((x: any): any => x.nameEn.length > 0);
			const len: number = Math.floor(Math.random() * filteredData.length);
			setTrailer(filteredData[len])});
	}, []);

	// eslint-disable-next-line @typescript-eslint/no-var-requires
	const movieTrailer = require('movie-trailer');

	const nameEn: string = trailer.nameEn;
	const nameRu: string = trailer.nameRu;

	movieTrailer(nameEn ? nameEn : nameRu)
	.then((response: string) => setVideoURL(response));

	return (
		<div className="movie-video">
			<div className="movie-video__react-player">
				<ReactPlayer url={videoURL} 
				muted={true} playing={true} loop={true} controls={false} 
				progressInterval={1000} width="940px" height="580px" />
			</div>
			<div className="movie-video__about">
				<div className="movie-video__title">{trailer.nameRu ? trailer.nameRu : trailer.nameEn}</div>
				<div className="movie-video__genre">{trailer.nameEn}</div>
				<div className="movie-video__year">Год: {trailer.year}</div>
				<div className="movie-video__country">Страна:</div>
				<div className="movie-video__genre">Жанр:</div>
			</div>
		</div>
	)
}

export default MovieVideo;
