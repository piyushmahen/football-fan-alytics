
import 'babel-polyfill';

import React, { PureComponent, PropTypes } from 'react';
import { render } from 'react-dom';

import Promise from 'promise-polyfill';
import { Provider } from 'react-redux';
import classNames from 'classnames';

import Store from './store/Store';
import Routes from './Routes';
import './stylesheets/components/App.scss';

window.Promise = window.Promise || Promise;

class App extends PureComponent {
  static propTypes = {
    children: PropTypes.object,
  };
  render() {
    const classes = {
      container: classNames('ev-main__container', {
        'ev-expanded': false,
      }),
      leftContainer: classNames('ev-main__left-container', {
        'ev-expanded': false,
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
