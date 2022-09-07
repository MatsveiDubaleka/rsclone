import { Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import { AdminAccountPageLayout } from './components/adminAccountPage/adminAccountPageLayout/AdminAccountPageLayout';
import { AdvancedSearchPageLayout } from './components/AdvancedSearchPage/AdvancedSearchPageLayout/AdvancedSearchPageLayout';
import Authorization from './components/Authorization/Authorization';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import { MainPageLayout } from './components/mainPage/MainPageLayout/MainPageLayout';
import { MoviePageLayout } from './components/moviePage/MoviePageLayout/MoviePageLayout';
import { MoviesListsPageLayout } from './components/MoviesListsPage/MoviesListsPageLayout';
import { Placeholder } from './components/Placeholder/Placeholder';
import { SearchPageLayout } from './components/searchPage/SearchPageLayout/SearchPageLayout';
import { UserAccountPageLayout } from './components/userAccountPage/userAccountPageLayout/UserAccountPageLayout';

const App = () => {
  const location = useLocation().pathname;

  return (
    <div className='App'>
      <Routes>
        <Route path='/rsclone/autorization' element={<Authorization />} />
      </Routes>
      {location === '/rsclone/autorization' ? <></> : <Header />}
      <Routes>
        <Route path='/rsclone/' element={<MainPageLayout />} />
        <Route path='/rsclone/movies' element={<Placeholder />} />
        <Route path='/rsclone/tv-series' element={<Placeholder />} />
        <Route path='/rsclone/searchPage' element={<SearchPageLayout />} />
        <Route path='/rsclone/movie/:id' element={<MoviePageLayout />} />
        <Route path='/rsclone/s' element={<AdvancedSearchPageLayout />} />
        <Route
          path='/rsclone/my-account/*'
          element={<UserAccountPageLayout />}
        />
        <Route
          path='/rsclone/admin-account/*'
          element={<AdminAccountPageLayout />}
        />
        <Route path='/rsclone/recommend' element={<MoviesListsPageLayout />} />
        <Route path='/rsclone/new' element={<MoviesListsPageLayout />} />
      </Routes>
      {location === '/rsclone/autorization' ? <></> : <Footer />}
    </div>
  );
};

export default App;
