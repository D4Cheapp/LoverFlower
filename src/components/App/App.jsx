import React from 'react';
import { Route, Routes } from 'react-router';
import { HistoryRouter } from 'redux-first-history/rr6';
import { Provider } from 'react-redux';
import { history, store } from '../../redux/store';

function App({ router }) {
  return (
    <Provider store={store}>
      <HistoryRouter history={history}>
        <Routes>
          {router.map((page) => (
            <Route key={page.path} path={page.path} element={page.element} />
          ))}
        </Routes>
      </HistoryRouter>
    </Provider>
  );
}

export default App;
