import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { combineReducers } from 'redux';
import * as reducers from '../reducers';

const reducerList = { ...reducers };

const combinedReducers = combineReducers(reducerList);

export const getStore = () => {
  const composables = [applyMiddleware(thunk)];
  const initialState = {};
  var enhancer: any = undefined;
  if (process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'production') {
    enhancer = compose(...composables);
  } else {
    enhancer = composeWithDevTools(...composables);
  }
  const store = createStore(combinedReducers, initialState, enhancer);
  return store;
};
