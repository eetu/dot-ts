import { routerReducer as router } from 'react-router-redux';
import { combineReducers } from 'redux';
import dot, { DotState } from './dot';

export interface RootState {
  dot: DotState;
}

const rootReducer = combineReducers({
  router,
  dot,
});

export default rootReducer;
