import { Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import Authorization from './components/Authorization/Authorization';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import { MainPageLayout } from './components/mainPage/MainPageLayout/MainPageLayout';
import { MoviePageLayout } from './components/moviePage/MoviePageLayout/MoviePageLayout';
import { SearchPageLayout } from './components/searchPage/SearchPageLayout/SearchPageLayout';

const App = () => {

	const location = useLocation().pathname;

	console.log('app location ---- ', location);

  return (
    <div className="App">
			<Routes>
				<Route path='/autorization' element={<Authorization/>}/>
			</Routes>
			{location === '/autorization' ? <></> : <Header />}
      <Routes>
        <Route path='/' element={<MainPageLayout/>}/>
        <Route path='/searchPage' element={<SearchPageLayout />}/>
        <Route path='movie/:id' element={<MoviePageLayout />}/>
      </Routes>
			{location === '/autorization' ? <></> : <Footer /> }
    </div>
  );
}

export default App;