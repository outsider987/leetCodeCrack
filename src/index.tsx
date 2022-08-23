import React from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter, BrowserRouter } from 'react-router-dom';
import { MYRoutes } from './router';
import './index.scss';
import './reset.scss';
import { store } from './store';
import { Provider } from 'react-redux';

const rootElement = document.getElementById('root') as HTMLElement;
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <HashRouter>
        <MYRoutes />
      </HashRouter>
    </Provider>
  </React.StrictMode>
);
