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

const store = configureStore({
  reducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(routerMiddleware),
});

export default store;
export type AppState = ReturnType<typeof reducer>;
export const history = createReduxHistory(store);
