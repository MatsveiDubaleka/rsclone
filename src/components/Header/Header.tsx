import { useState, SetStateAction } from "react";
import axios from "axios";
import { token } from "../../utils/token";
import './Header.scss';
import DropdownList from '../DropdownList/DropdownList';
import { Link, NavLink, useNavigate } from "react-router-dom";
import { getUsernameFromLocalStorage } from "../../utils/utilsFunctions";

let searchResults: never[];
let searchWord: string;

const Header = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [isLogIn] = useState(Boolean(getUsernameFromLocalStorage()));

  const navigate = useNavigate();

  searchResults = results;
  searchWord = query;

  const onChange = (e: { preventDefault: () => void; target: { value: SetStateAction<string>; }; }): void => {
    e.preventDefault();

    setQuery(e.target.value);

    axios.get(`https://kinopoiskapiunofficial.tech/api/v2.1/films/search-by-keyword?keyword=${e.target.value}&page=1`, {
      headers: {
        'X-API-KEY': token
      }
    }).then(({ data }) => !data.errors ? setResults(data.films) : setResults([]));
  };

  const handleEvent = (e: { keyCode: number; }): void => {
    setResults([]);
    if (e.keyCode === 13) {
      navigate(`/searchPage?search=${searchWord}`);
    }
  }

  return (
    <div className="header-wrapper">
      <header className="header">
        <Link to={'/'}>
          <div className="logo">
            <h1>
              KINOPOISK
            </h1>
          </div>
        </Link>
        <div className="header-nav">
          <div className="search-wrap">

            <input onKeyDown={handleEvent} placeholder="Фильмы, сериалы, персоны" 
            id="header-search" className="search" type="text" 
            autoComplete="off" autoFocus 
            value={query}
            onChange={onChange}
            />

            <Link to={'/s'}>
              <button onClick={()=>setResults([])} className="search-settings" id="search-settings"></button>
            </Link>

            <Link to={`/searchPage?search=${searchWord}`}>
              <button onClick={()=>setResults([])} className="search-loop" id="search-loop"></button>
            </Link>
            
            {results.length > 0 && (
            <ul onClick={()=>setResults([])} className="results">
                <DropdownList movies={results} />
            </ul>
          )}
          </div>
          <div className="user-auth">
          <Link to={`/my-account`} className={`avatar-link ${isLogIn ? '' : 'hidden'}`}><button className="avatar-btn"></button></Link>
          <span className="flag" id="flag" hidden></span>
          <Link to={`/autorization`} className={`enter-link ${isLogIn ? 'hidden' : ''}`}><p>Вход</p></Link>
          </div>
        </div>
      </header>
    </div>
  );
}
export { searchResults, searchWord };
export default Header;
