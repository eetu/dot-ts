import * as React from 'react';
import { DotState } from '../../reducers/dot';
import { actions } from '../../actions/dot';
import i18n from '../../i18n';

import './index.css';

interface DotComponentProps {
  state: DotState;
  actions: typeof actions;
}

const Dot: React.StatelessComponent<DotComponentProps> = (
  props: DotComponentProps,
) => (
  <div>
    <div>
      {i18n.t('Dots')}: <span className="Dot">{props.state.dots}</span>
    </div>
    <button onClick={props.actions.add}>{i18n.t('Add')}</button>
  </div>
);

export default Dot;
