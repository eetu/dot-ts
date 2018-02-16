import { routerReducer as router } from 'react-router-redux';
import { combineReducers } from 'redux';
import dot, { DotState } from './dot';
import lang, { LangState } from './lang';

export interface RootState {
  dot: DotState;
  lang: LangState;
}

const rootReducer = combineReducers({
  router,
  dot,
  lang,
});

export default rootReducer;
