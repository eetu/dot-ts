import * as React from 'react';
import { DotState } from '../../reducers/dot';
import { actions } from '../../actions/dot';
import { TranslationFunction } from 'react-i18next';

import './index.css';

interface DotComponentProps {
  state: DotState;
  actions: typeof actions;
  t: TranslationFunction;
}

const Dot: React.StatelessComponent<DotComponentProps> = (
  props: DotComponentProps,
) => (
  <div>
    <div>
      {props.t('Dots')}: <span className="Dot">{props.state.dots}</span>
    </div>
    <button onClick={props.actions.add}>{props.t('Add')}</button>
  </div>
);

export default Dot;
