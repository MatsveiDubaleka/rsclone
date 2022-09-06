import axios from 'axios';
import "./AdminTrailersList.scss";
import { IDropdownMovieList, IDropdownMovie } from "./types";

let nameToList: string;
let yearToList: number;
let posterToList: string;

const setTrailerToBack = (body: { nameEn: string; }): void=> {
	const data = JSON.stringify(body);
console.log(data)
	const config = {
		method: 'post',
		url: 'https://rskinopoisk.herokuapp.com/trailer/postTrailer',
		headers: { 
			'Content-Type': 'application/json'
		},
		data : data
	};

	axios(config)
	.then(function (response) {
		console.log(JSON.stringify(response.data));
	})
	.catch(function (error) {
		console.log(error);
	});
}

export const AdminTrailerItem = ({nameRu, nameEn, posterUrlPreview, year, filmId} : IDropdownMovie) => {

	const infoArr = [nameEn, year].filter(item => item !== undefined).join(', ');

	const handleClick = () => {
		const body = {nameEn};
		nameToList = nameRu;
		yearToList = year;
		posterToList = posterUrlPreview;
		setTrailerToBack(body);
	}

	return(
		<li onClick={()=>handleClick()} className="dropdown-movie-item" data-id={filmId}>
			<div className="dropdown-movie-item__poster" style={{backgroundImage: `url(${posterUrlPreview})`}}></div>
			<div className="dropdown-movie-item__info">
				<p className="dropdown-movie-item__title">{nameRu}</p>
				<p className="dropdown-movie-item__title-en-and-year">{infoArr}</p>
			</div>
		</li>
	)
}

const AdminTrailersList = ({trailers} : IDropdownMovieList) => {

	return (
		<div className="dropdown-list">
			<ul className="dropdown-list__movies">
				{trailers.map((trailer: IDropdownMovie) : JSX.Element => {
					return <AdminTrailerItem nameRu={trailer.nameRu} nameEn={trailer.nameEn} year={trailer.year} posterUrlPreview={trailer.posterUrlPreview} key={`admin-trailer-item-${trailer.filmId}`} />
				})}
			</ul>
		</div>
	)
}

export { nameToList, yearToList, posterToList };
export default AdminTrailersList;
