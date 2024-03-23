import './assets/styles/global.css';

import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Provider as ReduxProvider } from 'react-redux';

import App from './app';
import { store } from './redux';

const queryClient = new QueryClient();

document.addEventListener('DOMContentLoaded', function () {
  const rootElement = document.getElementById('root') as HTMLElement;
  const root = ReactDOM.createRoot(rootElement);

  root.render(
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <ReduxProvider store={store}>
          <App />
        </ReduxProvider>
      </QueryClientProvider>
    </React.StrictMode>,
  );
});
