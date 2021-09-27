import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { App } from './App';
import reportWebVitals from './etc/reportWebVitals';
import * as ServiceWorkerRegistration from "./etc/serviceWorkerRegistration";
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

ServiceWorkerRegistration.register();
reportWebVitals();

