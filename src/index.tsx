import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './utils/config';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
