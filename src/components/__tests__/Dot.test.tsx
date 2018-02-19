import * as React from 'react';
import Dot from '../dot';
import { actions } from '../../actions/dot';
import { create } from 'react-test-renderer';
import { I18nextProvider } from 'react-i18next';

import i18n from '../../i18nForTests';

// jest.mock('../../i18n', () => ({
//   default: {
//     t: (key: string) => key,
//   }
// }));

test('Dot should render', () => {
  const state = { dots: '' };

  const component = create(
    <I18nextProvider i18n={i18n}>
      <Dot actions={actions} state={state} />
    </I18nextProvider>
  );

  expect(component).toMatchSnapshot();
});
