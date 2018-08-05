import 'normalize.css/normalize.css';

import React, { Component } from 'react';
import Switch from 'react-router-dom/Switch';
import Route from 'react-router-dom/Route';

import './globals.css';

import Error404 from '../Error404';
import Header from '../Header';

import Helmet from './Helmet';
import AsyncHomeRoute from './AsyncHomeRoute';
import AsyncCounterRoute from './AsyncCounterRoute';

import auth from '../../services/auth';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isAuthenticated: false,
    };
  }

  async checkAuth() {
    const isAuthenticated = await auth.isAuthenticated();

    if (isAuthenticated) {
      this.setState(() => ({
        isAuthenticated,
      }));
    }
  }

  componentDidMount() {
    this.checkAuth();
  }

  render() {
    const { isAuthenticated } = this.state;

    return (
      <div style={{ padding: '2rem' }}>
        <Helmet />

        <Header isAuthenticated={isAuthenticated} />

        <div style={{ paddingTop: '2rem', paddingBottom: '2rem' }}>
          <Switch>
            <Route exact path="/" component={AsyncHomeRoute} />
            <Route path="/counter" render={() => <AsyncCounterRoute />} />
            <Route component={Error404} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
