import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { persistStore } from 'redux-persist';
import { composeWithDevTools } from 'redux-devtools-extension';

import reducer from './rootReducer';

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

export const preventer = persistStore(store);

export default store;
