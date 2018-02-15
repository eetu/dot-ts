import * as React from 'react';
import { bindActionCreators, Dispatch } from 'redux';
import { connect, Provider, Store } from 'react-redux';
import { Route } from 'react-router';
import { ConnectedRouter } from 'react-router-redux';
import { translate, TranslationFunction } from 'react-i18next';

import * as dotActs from '../../actions/dot';
import Dot from '../../components/dot';
import { RootState } from '../../reducers/index';
import { DotState } from '../../reducers/dot';
import * as langActs from '../../actions/lang';

import { History } from 'history';

interface AppComponentProps {
  store: Store<{}>;
  history: History;
  dot: DotState;
  dotActions: typeof dotActs.actions;
  langActions: typeof langActs.actions;
  t: TranslationFunction;
}

class App extends React.Component<AppComponentProps> {
  render() {
    const { store, history, dot, dotActions, langActions, t } = this.props;

    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <Route
            path="/"
            render={() => (
              <div>
                <Dot actions={dotActions} state={dot} t={t} />
                <button onClick={langActions.langFi}>fi</button>
                <button onClick={langActions.langEn}>en</button>
              </div>
            )}
          />
        </ConnectedRouter>
      </Provider>
    );
  }
}

const mapStateToProps = (state: RootState) => ({
  dot: state.dot,
});

const mapDispatchToProps = (dispatch: Dispatch<RootState>) => ({
  dotActions: bindActionCreators(dotActs.actions, dispatch),
  langActions: bindActionCreators(langActs.actions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(translate()(App));
