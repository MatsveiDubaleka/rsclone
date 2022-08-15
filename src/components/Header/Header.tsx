import './Header.scss';

const Header = () => {
  return (
    <header className="header">
      <div className="logo"><h1>KINOPOISK</h1></div>
      <div className="header-nav">
        <div className="search-wrap">
          <input placeholder="Фильмы, сериалы, персоны" id="header-search" className="search" type="search" autoComplete="off" autoFocus />
          <span className="search-settings" id="search-settings"></span>
          <span className="search-loop" id="search-loop"></span>
        </div>
        <div className="user-auth">
          <span className="flag" id="flag"></span>
          <button className="plus-btn">Попробовать PLUS</button>
          <button className="avatar-btn"></button>
        </div>
      </div>
    </header>
  );
}

export default Header;
