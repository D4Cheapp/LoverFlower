import { configureStore } from '@reduxjs/toolkit';
import { createReduxHistoryContext } from 'redux-first-history';
import { createHashHistory } from 'history';
import { combineReducers } from 'redux';
import { flowerReducer } from '../reducer';

const { createReduxHistory, routerMiddleware, routerReducer } =
  createReduxHistoryContext({
    history: createHashHistory(),
  });

const store = configureStore({
  reducer: combineReducers({ flower: flowerReducer, router: routerReducer }),
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(routerMiddleware),
});

export default store;
export const history = createReduxHistory(store);
