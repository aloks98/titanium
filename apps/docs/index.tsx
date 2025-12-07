import { ThemeProvider } from '@e412/titanium';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const rootEl = document.getElementById('root');
if (rootEl) {
  const root = ReactDOM.createRoot(rootEl);
  root.render(
    <React.StrictMode>
      <ThemeProvider defaultTheme="dark" storageKey="titanium-theme">
        <App />
      </ThemeProvider>
    </React.StrictMode>,
  );
}
