import * as types from './types';

export type DotActions = {
  [types.DOT_ADD]: {
    type: typeof types.DOT_ADD,
  },
};

export type DotAction = DotActions[keyof DotActions];

export const actions = {
  add: (): DotActions[typeof types.DOT_ADD] => ({
    type: types.DOT_ADD,
  }),
};
