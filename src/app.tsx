import React from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter, BrowserRouter } from 'react-router-dom';
import { MYRoutes } from './router';
import './index.scss';
import './reset.scss';
import { store, selectGlobal } from './store';
import { Provider } from 'react-redux';
import ModalsWrapper from './layouts/ModalsWrapper';

const rootElement = document.getElementById('root') as HTMLElement;
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <HashRouter>
        <ModalsWrapper>
          <MYRoutes />
        </ModalsWrapper>
      </HashRouter>
    </Provider>
  </React.StrictMode>,
);
