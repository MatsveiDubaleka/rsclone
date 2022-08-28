import { Routes, Route } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import { MainPageLayout } from './components/mainPage/MainPageLayout/MainPageLayout';
import { SearchPageLayout } from './components/searchPage/SearchPageLayout/SearchPageLayout';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<MainPageLayout/>}/>
        <Route path='/searchPage' element={<SearchPageLayout />}/>
      </Routes>
      <Footer /> 
    </div>
  );
}

export default App;