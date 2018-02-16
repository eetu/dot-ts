import * as React from 'react';
import Dot from '../dot';
import { actions } from '../../actions/dot';
import { create } from 'react-test-renderer';

jest.mock('../../i18n', () => ({
  default: {
    t: (key: string) => key,
  }
}));

test('Dot should render', () => {
  const state = { dots: '' };

  const component = create(
    <Dot actions={actions} state={state}/>
  );

  expect(component).toMatchSnapshot();
});
