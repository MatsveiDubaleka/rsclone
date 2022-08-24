import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './utils/config'
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
);

reportWebVitals();
