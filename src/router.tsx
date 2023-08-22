import React from 'react';
import {
  About,
  Bouquet,
  Business,
  Catalog,
  Contacts,
  Delivery,
  ErrorPage,
  FAQ,
  Home,
  Order,
  OrderError,
  Search,
  SuccessOrder,
} from './pages';

export type routerType = {
  path: string;
  element: React.ReactElement;
};

export const router: routerType[] = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/catalog',
    element: <Catalog />,
  },
  {
    path: '/search',
    element: <Search />,
  },
  {
    path: '/bouquet/:id',
    element: <Bouquet />,
  },
  {
    path: '/order',
    element: <Order />,
  },
  {
    path: '/order/success',
    element: <SuccessOrder />,
  },
  {
    path: '/order/error',
    element: <OrderError />,
  },
  {
    path: '/delivery',
    element: <Delivery />,
  },
  {
    path: '/about',
    element: <About />,
  },
  {
    path: '/contacts',
    element: <Contacts />,
  },
  {
    path: '/faq',
    element: <FAQ />,
  },
  {
    path: '/buisness',
    element: <Business />,
  },
  {
    path: '*',
    element: <ErrorPage />,
  },
];
