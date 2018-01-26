import * as React from 'react';
import { bindActionCreators, Dispatch } from 'redux';
import { connect, Provider } from 'react-redux';
import { Route } from 'react-router';
import { ConnectedRouter } from 'react-router-redux';

import { actions } from '../../actions/dot';
import Dot from '../../components/dot';
import { RootState } from '../../reducers/index';
import { DotState } from '../../reducers/dot';

interface AppComponentProps {
  store: object;
  history: object;
  dot: DotState;
  dotActions: typeof actions;
}

class App extends React.Component<AppComponentProps> {
  render() {
    const { store, history, dot, dotActions } = this.props;

    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <Route
            path="/"
            render={() =>
              <Dot actions={dotActions} state={dot}/>
            }
          />
        </ConnectedRouter>
      </Provider>
    );
  }
}

const mapStateToProps = (state: RootState) => ({
  dot: state.dot
});

const mapDispatchToProps = (dispatch: Dispatch<RootState>) => ({
  dotActions: bindActionCreators(actions, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
