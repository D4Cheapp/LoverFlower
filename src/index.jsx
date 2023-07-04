import React from 'react';
import ReactDom from 'react-dom/client';
import { Home } from './pages';
import { App } from './components';

const root = ReactDom.createRoot(document.getElementById('root'));

const router = [
  {
    path: '/',
    element: <Home />,
  },
];

root.render(<App router={router} />);
