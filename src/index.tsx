import React from 'react';
import ReactDom from 'react-dom/client';
import { App } from './components';
import { Home } from './pages/Home';
import { routerType } from './types/routerType';

const root: ReactDom.Root = ReactDom.createRoot(
  document.getElementById('root') as HTMLElement,
);

const router: routerType[] = [
  {
    path: '/',
    element: <Home />,
  },
];

root.render(<App router={router} />);
