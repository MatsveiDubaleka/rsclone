import { useState, SetStateAction } from "react";
import axios from "axios";
import { token } from "../../utils/token";
import './Header.scss';
import DropdownList from '../DropdownList/DropdownList';
import { Link } from "react-router-dom";

let searchResults: never[];
let searchWord: string;

const Header = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

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
            
            <input placeholder="Фильмы, сериалы, персоны" 
            id="header-search" className="search" type="text" 
            autoComplete="off" autoFocus 
            value={query}
            onChange={onChange}
            />
            
            <span className="search-settings" id="search-settings"></span>

            <Link to={`/searchPage?search=${searchWord}`}>
              <button onClick={()=>setResults([])} className="search-loop" id="search-loop"></button>
            </Link>
            
            {results.length > 0 && (
            <ul className="results">
              <DropdownList movies={results}  />
            </ul>

          )}
          </div>
          <div className="user-auth">
          <button className="avatar-btn" hidden></button>
            <span className="flag" id="flag" hidden></span>
						<Link to={`/autorization`}><p className="enter-link">Вход</p></Link>
          </div>
        </div>
      </header>
    </div>
  );
}
export { searchResults, searchWord };
export default Header;
