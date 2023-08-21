import React from 'react';
import { Route, Routes } from 'react-router';
import { HistoryRouter } from 'redux-first-history/rr6';
import { Provider } from 'react-redux';
import { history, store } from '../../redux/store';
import { routerType } from '../../router';
import { NavigationBar } from '../NavigationBar';
import { Footer } from '../Footer';

interface AppInterface {
  router: routerType[];
}

function App({ router }: AppInterface): React.ReactElement {
  return (
    <Provider store={store}>
      <HistoryRouter history={history}>
        <NavigationBar />
        <Routes>
          {router.map((page: routerType) => (
            <Route key={page.path} path={page.path} element={page.element} />
          ))}
        </Routes>
        <Footer />
      </HistoryRouter>
    </Provider>
  );
}

export default App;
