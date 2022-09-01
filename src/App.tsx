import { Routes, Route } from 'react-router-dom';
import './App.css';
import { AdvancedSearchPageLayout } from './components/AdvancedSearchPage/AdvancedSearchPageLayout/AdvancedSearchPageLayout';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import { MainPageLayout } from './components/mainPage/MainPageLayout/MainPageLayout';
import { MoviePageLayout } from './components/moviePage/MoviePageLayout/MoviePageLayout';
import { SearchPageLayout } from './components/searchPage/SearchPageLayout/SearchPageLayout';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<MainPageLayout/>}/>
        <Route path='/searchPage' element={<SearchPageLayout />}/>
        <Route path='movie/:id' element={<MoviePageLayout />}/>
        <Route path='/s' element={<AdvancedSearchPageLayout />}/>
      </Routes>
      <Footer /> 
    </div>
  );
}

export default App;