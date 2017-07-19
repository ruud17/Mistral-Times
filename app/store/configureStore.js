import {
  createStore,
  applyMiddleware,
  compose
} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/reducers';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';

const configureStore = () => {
  const store = createStore(
    rootReducer,
    compose(
      applyMiddleware(thunk, reduxImmutableStateInvariant()),
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
  );
  return store;
}

export default configureStore;
