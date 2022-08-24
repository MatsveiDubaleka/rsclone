import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import { MainPageLayout } from './components/mainPage/MainPageLayout/MainPageLayout';

const App = () => {
  return (
    <div className="App">
      <Header /> 
			<MainPageLayout />
      <Footer /> 
    </div>
  );
}

export default App;