import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import createHistory from 'history/createBrowserHistory';

import './index.css';

import App from './containers/app';
import registerServiceWorker from './registerServiceWorker';
import configureStore from './store/configureStore';

const store = configureStore();
const history = createHistory();

// tslint:disable-next-line
const render = (Component: any) => {
  ReactDOM.render(
    <AppContainer>
      <Component store={store} history={history} />
    </AppContainer>,
    document.getElementById('root')
  );
};

render(App);

if (module.hot) {
  module.hot.accept('./containers/app', () => {
    // tslint:disable-next-line
    console.log('lål');
    render(App);
  });
}

registerServiceWorker();
