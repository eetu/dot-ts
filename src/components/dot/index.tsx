import * as React from 'react';
import { DotState } from '../../reducers/dot';
import { actions } from '../../actions/dot';

import './index.css';

interface DotComponentProps {
  state: DotState;
  actions: typeof actions;
}

const Dot: React.StatelessComponent<DotComponentProps> = (props: DotComponentProps) => (
  <div>
    <div>
      dots: <span className="Dot">{props.state.dots}</span>
    </div>
    <button onClick={props.actions.add}>Add dots</button>
  </div>
);

export default Dot;
