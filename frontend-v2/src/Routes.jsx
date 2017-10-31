
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { IndexRoute, Router, Route, useRouterHistory } from 'react-router';
import { connect } from 'react-redux';
import { createHistory } from 'history';
// import Loadable from 'react-loadable';

import Dashboard from './routes/dashboard/Dashboard';

const history = useRouterHistory(createHistory)({
  basename: '/dashboard',
});

@connect((store) => ({ enableProducts: store.app.userData.enableProducts, isLoading: store.app.isLoading }))
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
        </Route>
      </Router>
    );
  }
}

export {
  Routes as default,
};
