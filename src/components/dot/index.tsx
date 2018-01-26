import * as React from 'react';
import { DotState } from '../../reducers/dot';
import { actions } from '../../actions/dot';

interface DotComponentProps {
  state: DotState;
  actions: typeof actions;
}

const Dot: React.StatelessComponent<DotComponentProps> = (props: DotComponentProps) => (
  <div>
    <div>
      dots: {props.state.dots}
    </div>
    <button onClick={props.actions.add}>Add dots</button>
  </div>
);

export default Dot;
