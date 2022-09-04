import { Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import { AdvancedSearchPageLayout } from './components/AdvancedSearchPage/AdvancedSearchPageLayout/AdvancedSearchPageLayout';
import Authorization from './components/Authorization/Authorization';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import { MainPageLayout } from './components/mainPage/MainPageLayout/MainPageLayout';
import { MoviePageLayout } from './components/moviePage/MoviePageLayout/MoviePageLayout';
import { SearchPageLayout } from './components/searchPage/SearchPageLayout/SearchPageLayout';
import { UserAccountPageLayout } from './components/userAccountPage/userAccountPageLayout/UserAccountPageLayout';

const App = () => {

	const location = useLocation().pathname;

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
        <Route path='/s' element={<AdvancedSearchPageLayout />}/>
				<Route path='/my-account/*' element={<UserAccountPageLayout/>}/>
      </Routes>
			{location === '/autorization' ? <></> : <Footer /> }
    </div>
  );
}

export default App;