
import 'babel-polyfill';

import React, { Component, PropTypes } from 'react';
import { render } from 'react-dom';

import Promise from 'promise-polyfill';
import { Provider, connect } from 'react-redux';
import classNames from 'classnames';

import Store from './store/Store';
import Routes from './Routes';
import './stylesheets/components/App.scss';

window.Promise = window.Promise || Promise;

@connect((store) => ({ expanded: store.app.expanded }))
class App extends Component {
  static propTypes = {
    children: PropTypes.object,
    location: PropTypes.object,
    userData: PropTypes.object,
    expanded: PropTypes.bool,
    screenSizeBig: PropTypes.bool,
    dispatch: PropTypes.func,
    isError: PropTypes.bool,
    isLoading: PropTypes.bool,
    showOnboarding: PropTypes.bool,
  };

  state = {
    expandedHover: false,
  };

  render() {
    const classes = {
      container: classNames('ev-main__container', {
        'ev-expanded': this.props.expanded,
      }),
      leftContainer: classNames('ev-main__left-container', {
        'ev-expanded': this.props.expanded || this.state.expandedHover,
      }),
      rightContainer: classNames('ev-main__right-container'),
      content: classNames('ev-main__content'),
      sidebar: classNames('ev-main__sidebar'),
    };

    return (
      <div className={classes.container}>
        <div className={classes.leftContainer}>
          <div className={classes.sidebar} />
        </div>
        <div className={classes.rightContainer}>
          <div className={classes.content}>
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}

render(<Provider store={Store}><Routes app={App} /></Provider>, document.getElementById('container'));
