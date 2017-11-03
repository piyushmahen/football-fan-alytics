
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { IndexRoute, Router, Route, useRouterHistory } from 'react-router';
import { createHistory } from 'history';
import Loadable from 'react-loadable';

import Dashboard from './routes/dashboard/Dashboard';

function MyLoadingComponent() {
  return <div>Loading...</div>;
}

const LeaguesTable = Loadable({
  loader: () => import('./routes/leagues-table/LeaguesTable'),
  loading: MyLoadingComponent,
});

const history = useRouterHistory(createHistory)({
  basename: '/dashboard',
});

class Routes extends PureComponent {

  static propTypes = {
    app: PropTypes.func.isRequired,
    expanded: PropTypes.bool,
    enableProducts: PropTypes.array,
    dispatch: PropTypes.func,
    isLoading: PropTypes.bool,
  };

  render() {
    return (
      <Router onUpdate={() => window.scrollTo(0, 0)} history={history}>
        <Route path="/" component={this.props.app}>
          <IndexRoute component={Dashboard} />
          <Route path="/competition" component={LeaguesTable} />
        </Route>
      </Router>
    );
  }
}

export {
  Routes as default,
  history,
};
