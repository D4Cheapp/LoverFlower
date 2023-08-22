// eslint-disable-next-line import/no-unresolved
import { CurriedGetDefaultMiddleware } from '@reduxjs/toolkit/dist/getDefaultMiddleware';
import { configureStore } from '@reduxjs/toolkit';
import { createReduxHistoryContext } from 'redux-first-history';
import { createHashHistory } from 'history';
import { combineReducers } from 'redux';
import { flowerReducer } from '../reducer';

const { createReduxHistory, routerMiddleware, routerReducer } =
  createReduxHistoryContext({
    history: createHashHistory(),
  });

const reducer = combineReducers({
  flower: flowerReducer,
  router: routerReducer,
});

const middleware = (getDefaultMiddleware: CurriedGetDefaultMiddleware) =>
  getDefaultMiddleware().concat(routerMiddleware);

const store = configureStore({
  reducer,
  middleware,
});

export type AppState = ReturnType<typeof reducer>;
export default store;
export const history = createReduxHistory(store);
