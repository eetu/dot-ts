import * as React from 'react';
import createHistory from 'history/createBrowserHistory';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import App from '../';
import configureStore from '../../../store/configureStore';

test('App should render', () => {

  const store = configureStore();
  const history = createHistory();

  const wrapper = shallow(
    <App store={store} history={history}/>
  );

  expect(toJson(wrapper)).toMatchSnapshot();
});
