import React from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter,BrowserRouter } from 'react-router-dom';
import { MYRoutes } from './router';
import './index.scss';
import './reset.scss';

const rootElement = document.getElementById('root') as HTMLElement;
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <HashRouter>
      <MYRoutes />
    </HashRouter>
  </React.StrictMode>
);
