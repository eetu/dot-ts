import * as React from 'react';

import { DotState } from '../../reducers/dot';
import { actions } from '../../actions/dot';

import './index.css';
import { TranslationFunction } from 'i18next';
import { I18n } from 'react-i18next';

interface DotComponentProps {
  state: DotState;
  actions: typeof actions;
}

const Dot: React.StatelessComponent<DotComponentProps> = (props: DotComponentProps) => (
  <I18n ns="translations">
  {
    (t: TranslationFunction) => (
      <div>
        <div>
          {t('Dots')}: <span className="Dot">{props.state.dots}</span>
        </div>
        <button onClick={props.actions.add}>{t('Add')}</button>
      </div>
    )
  }
  </I18n>
);

export default Dot;
