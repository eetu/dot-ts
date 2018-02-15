import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from '../reducers';

export default function configureStore(/*initialState: RootState*/) {
  const store = createStore(
    rootReducer,
    // initialState,
    applyMiddleware(thunk),
    // tslint:disable-next-line
    window['__REDUX_DEVTOOLS_EXTENSION__'] &&
      // tslint:disable-next-line
      window['__REDUX_DEVTOOLS_EXTENSION__'](),
  );

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers').default;
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}
