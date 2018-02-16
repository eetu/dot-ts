import * as types from './types';

export type LangActions = {
  [types.LANG_FI]: {
    type: typeof types.LANG_FI;
  };
  [types.LANG_EN]: {
    type: typeof types.LANG_EN;
  };
};

export type LangAction = LangActions[keyof LangActions];

export const actions = {
  langFi: (): LangActions[typeof types.LANG_FI] => ({
    type: types.LANG_FI,
  }),
  langEn: (): LangActions[typeof types.LANG_EN] => ({
    type: types.LANG_EN,
  }),
};
