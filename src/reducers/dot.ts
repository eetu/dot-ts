import * as types from '../actions/types';
import { DotAction } from '../actions/dot';

export type DotState = {
  dots: string;
};

const initialState = {
  dots: ''
};

const dot = (state = initialState, action: DotAction) => {
  switch (action.type) {
    case types.DOT_ADD:
      return Object.assign({}, state, {
        dots: state.dots + '.'
      });
    default:
      return state;
  }
};

export default dot;
