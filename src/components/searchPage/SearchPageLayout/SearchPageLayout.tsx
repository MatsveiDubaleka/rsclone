import { MainPageMenu } from '../../mainPage/MainPageMenu/MainPageMenu'
import MovieCardFlatList from '../MovieCardFlat/MovieCardFlat'
import "./SearchPageLayout.scss"
import { useEffect, useState } from 'react';
import { token } from '../../../utils/token';
import axios from 'axios';
import { useLocation } from 'react-router';
import { getDataItems } from "../../../utils/config";

export const SearchPageLayout = () => {
	const [results, setResults] = useState([]);
	const location = useLocation();
	
	const myParam: string | null = new URLSearchParams(location.search).get("search");

	const keyword: string | null = new URLSearchParams(location.search).get("keyword");
	const year: string | null = new URLSearchParams(location.search).get("year");
	const yearFrom: string | null = new URLSearchParams(location.search).get("yearFrom");
	const yearTo: string | null = new URLSearchParams(location.search).get("yearTo");
	const countries: string | null = new URLSearchParams(location.search).get("countries");
	const rating: string | null = new URLSearchParams(location.search).get("rating");
	const ratingFrom: string | null = new URLSearchParams(location.search).get("ratingFrom");
	const ratingTo: string | null = new URLSearchParams(location.search).get("ratingTo");
	const genres: string | null = new URLSearchParams(location.search).get("genres");
	
useEffect(()=> {
	if(myParam){
		axios.get(`https://kinopoiskapiunofficial.tech/api/v2.1/films/search-by-keyword?keyword=${myParam}&page=1`, {
			headers: {
				'X-API-KEY': token
			}
		}).then(({ data }) => !data.errors ? setResults(data.films) : setResults([]));
	} else {	
		getDataItems(`v2.2/films?ratingFrom=${ratingFrom ? ratingFrom : "0"}&ratingTo=${ratingTo ? ratingTo : "10"}&yearFrom=${yearFrom ? yearFrom : "1900"}&yearTo=${yearTo ? yearTo : "2022"}&keyword=${keyword ? keyword : ""}&page=1`, setResults);
	}
	},[setResults]);

	return (
		<main className="search-page">
			<MainPageMenu />
			<div className="search-page__content">
				<div className="search-page__content_header">
					<div className="search-page__content_header_search-word">Поиск: <span><b>{myParam?.toUpperCase()}{keyword?.toUpperCase()}</b></span></div>
					<div className="search-page__content_header_total-results">Результаты: <span>{results.length}</span></div>
				</div>
					{(results.length>0) && <MovieCardFlatList movies={results} />}
			</div>
		</main>
	)
}
