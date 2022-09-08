import axios from 'axios';
import { SetStateAction, useState } from 'react';
import { token } from '../../../utils/token';
import './AdminAccountTrailersList.scss';
import AdminTrailersList, { nameToList, yearToList, posterToList } from './../AdminTrailersList/AdminTrailersList'

export const AdminAccountTrailersList = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  
  const onChange = (e: { preventDefault: () => void; target: { value: SetStateAction<string>; }; }): void => {
    e.preventDefault();

    setQuery(e.target.value);

    axios.get(`https://kinopoiskapiunofficial.tech/api/v2.1/films/search-by-keyword?keyword=${e.target.value}&page=1`, {
      headers: {
        'X-API-KEY': token
      }
    }).then(({ data }) => !data.errors ? setResults(data.films) : setResults([]));
  };
  
  return (
    <div className="trailers-list">
      <p className="trailers-list__title">Выбрать трейлер на главную страницу</p>
      <input placeholder="Фильмы" 
            id="admin-trailers-search" className="trailers-list__admin-trailers-search" type="text" 
            autoComplete="off"
            value={query}
            onChange={onChange}
            />
      {results.length > 0 && (
          <div onClick={()=>setResults([])}>
            <AdminTrailersList trailers={results} />
            </div>
      )}
      <div className="trailers-list__name-item">
        {nameToList ? <><img src={posterToList} width="30%" alt="" /><p className="trailers-list__success">На главной странице установлен трейлер фильма: <q>{nameToList}</q>, {yearToList} г.</p></> : null}
      </div>
    </div>
  )
}
