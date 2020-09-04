import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from './modules/rootReducer';

import { iCartState } from './modules/cart/types';

export interface iState {
  cart: iCartState
} 

const store = createStore(
  rootReducer,
  composeWithDevTools()
);

export default store;