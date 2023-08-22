import React from 'react';
import ReactDom from 'react-dom/client';
import { App } from './components';
import { router } from './router';

const root: ReactDom.Root = ReactDom.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(<App router={router} />);
