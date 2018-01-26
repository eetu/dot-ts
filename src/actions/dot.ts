import * as types from './types';

export type DotActions = {
  DOT_ADD: {
    type: typeof types.DOT_ADD,
  },
};

export type DotAction = DotActions[keyof DotActions];

export const actions = {
  add: (): DotActions[typeof types.DOT_ADD] => ({
    type: types.DOT_ADD,
  }),
};

// export type DotActions = {
//   add: () => { type: typeof types.DOT_ADD };
// };

// // export type RootDotActions = DotActions[keyof DotActions];

// // export function addDot() {
// //   return { type: types.DOT_INCREASE };
// // }

// export const dotActions  = {
//   add: createAction(types.DOT_ADD, () => ({
//     type: types.DOT_ADD
//   }))
// };

// import { $call } from 'utility-types';
// const returnsOfActions = values(dotActions).map($call);
// export type DotAction = typeof returnsOfActions[number];