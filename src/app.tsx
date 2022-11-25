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
import { QueryClient, QueryClientProvider } from 'react-query';
const queryClient = new QueryClient();

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <HashRouter>
        <QueryClientProvider client={queryClient}>
          <ModalsWrapper>
            <MYRoutes />
          </ModalsWrapper>
        </QueryClientProvider>
      </HashRouter>
    </Provider>
  </React.StrictMode>,
);
