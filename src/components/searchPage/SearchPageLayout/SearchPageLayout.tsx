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
	const [page, setPage] = useState(1)
	const location = useLocation();
	
	const myParam: string | null = new URLSearchParams(location.search).get("search");

	const keyword: string | null = new URLSearchParams(location.search).get("keyword");
	const year: string | null = new URLSearchParams(location.search).get("year");
	let yearFrom: string | null = new URLSearchParams(location.search).get("yearFrom")
	let yearTo: string | null = new URLSearchParams(location.search).get("yearTo")
	const rating: string | null = new URLSearchParams(location.search).get("rating");
	let ratingFrom: string | null = new URLSearchParams(location.search).get("ratingFrom");
	let ratingTo: string | null = new URLSearchParams(location.search).get("ratingTo");
	const countries: string | null = new URLSearchParams(location.search).get("countries");
	const genres: string | null = new URLSearchParams(location.search).get("genres");

	year ? yearFrom = new URLSearchParams(location.search).get("year") : yearFrom = new URLSearchParams(location.search).get("yearFrom");
	year ? yearTo = new URLSearchParams(location.search).get("year") : yearTo = new URLSearchParams(location.search).get("yearTo");
	
	rating ? ratingFrom = new URLSearchParams(location.search).get("rating") : ratingFrom = new URLSearchParams(location.search).get("ratingFrom");
	rating ? ratingTo = new URLSearchParams(location.search).get("rating") : ratingTo = new URLSearchParams(location.search).get("ratingTo");

	useEffect(()=> {
		if(myParam){
			axios.get(`https://kinopoiskapiunofficial.tech/api/v2.1/films/search-by-keyword?keyword=${myParam}&page=${page}`, {
				headers: {
					'X-API-KEY': token
				}
			}).then(({ data }) => !data.errors ? setResults(data.films) : setResults([]));
		} else {	
			getDataItems(`v2.2/films?countries=${Number(countries)>0 ? countries : ""}&genres=${Number(genres)>0 ? genres : ""}&order=RATING&type=ALL&ratingFrom=${ratingFrom ? ratingFrom : "0"}&ratingTo=${ratingTo ? ratingTo : "10"}&yearFrom=${yearFrom ? yearFrom : "1895"}&yearTo=${yearTo ? yearTo : "2022"}&keyword=${keyword ? keyword : ""}&page=${page}`, setResults);
		}
	},[setResults, page, myParam]);

	const nextPage = () => {
		setPage(page+1)
	}

	const prevPage = () => {
		setPage(page-1)
	}

	return (
		<main className="search-page">
			<MainPageMenu />
			<div className="search-page__content">
				<div className="search-page__content_header">
					<div className="search-page__content_header_search-word">Поиск: <span><b>{myParam?.toUpperCase()}{keyword === 'undefined' ? "Ничего не найдено" : keyword?.toUpperCase()}</b></span></div>
					<div className="search-page__content_header_total-results">Результаты: <span>{results.length}</span></div>
				</div>
					{(results.length>0) && <MovieCardFlatList movies={results} />}
			</div>
			<div className="search-page__prev-next-btns">
				<div className="search-page__prev-next-btns_page">Страница: {page}</div>
				{results.length <= 20 && page>1 && <button onClick={()=>prevPage()} className="search-page__prev-next-btns_prev-btn">Предыдущая страница</button>}
				{results.length === 20 && <button onClick={()=>nextPage()} className="search-page__prev-next-btns_next-btn">Следующая страница</button>}
			</div>
		</main>
	)
}
