import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers';
import thunk from 'redux-thunk';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';

const store = createStore(rootReducer, {}, applyMiddleware(thunk, reduxImmutableStateInvariant()));

export default store;
