import { configureStore } from '@reduxjs/toolkit';
import { flowerReducer } from '../reducer';
import { createReduxHistoryContext } from 'redux-first-history';
import { createHashHistory } from 'history';
import { combineReducers } from 'redux';

const { createReduxHistory, routerMiddleware, routerReducer } =
  createReduxHistoryContext({
    history: createHashHistory(),
  });

const store = configureStore({
  reducer: combineReducers({ flower: flowerReducer, router: routerReducer }),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(routerMiddleware),
});

export default store;
export const history = createReduxHistory(store);
