import * as React from 'react';
import * as ReactDOM from 'react-dom';
import createHistory from 'history/createBrowserHistory';
import { I18nextProvider } from 'react-i18next';

import './index.css';

import App from './containers/app';
import registerServiceWorker from './registerServiceWorker';
import configureStore from './store/configureStore';
import i18n from './i18n';

const store = configureStore();
const history = createHistory();

// tslint:disable-next-line
const render = (Component: any) => {
  ReactDOM.render(
    <I18nextProvider i18n={i18n}>
      <Component store={store} history={history} />
    </I18nextProvider>,
    document.getElementById('root'),
  );
};

render(App);

if (module.hot) {
  module.hot.accept('./containers/app', () => {
    render(App);
  });
}

registerServiceWorker();
