import React from 'react';
import ReactDOM from 'react-dom/client';
//import './index.css';
import './theme.min.css'
import App from './components/app/App';
import { Provider } from "react-redux";
import { appStore } from "./redux/index";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <Provider store={appStore}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
