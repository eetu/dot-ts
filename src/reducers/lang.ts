import * as types from '../actions/types';
import { LangAction } from '../actions/lang';
import i18n from '../i18n';

export type LangState = {
  lang: string;
};

const initialState = {
  lang: 'en',
};

const lang = (state = initialState, action: LangAction) => {
  switch (action.type) {
    case types.LANG_EN:
      i18n.changeLanguage('en');
      return Object.assign({}, state, {
        lang: 'en',
      });
    case types.LANG_FI:
      i18n.changeLanguage('fi');
      return Object.assign({}, state, {
        lang: 'fi',
      });
    default:
      return state;
  }
};

export default lang;
