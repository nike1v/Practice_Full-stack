import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { persistStore } from 'redux-persist';

import reducer from './rootReducer';

const store = createStore(reducer, applyMiddleware(thunk));

export const preventer = persistStore(store);

export default store;
