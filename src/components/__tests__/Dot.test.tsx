import * as React from 'react';
import Dot from '../dot';
import { actions } from '../../actions/dot';
import { create } from 'react-test-renderer';

test('Dot should render', () => {
  const state = { dots: '' };

  const component = create(
    <Dot actions={actions} state={state}/>
  );

  expect(component).toMatchSnapshot();
});
