import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';

import Home from './components/Home';
import LoginPageC from './components/auth/LoginPageC';
import UserInfoC from './components/user/UserInfoC';
import UserListC from './components/user/UserListC';
import BandInfoC from './components/band/BandInfoC';
import BandListC from './components/band/BandListC';
import HeaderC from './components/header/HeaderC';
import { ErrorPage } from './components/generic/Error';

const RoutingSwitch = () => {
  return (
    <section className="section">
      <div className="container">
        <Switch>
          <Route exact={true} path="/" component={Home} />
          <Route exact={true} path="/users" component={UserListC} />
          <Route exact={true} path="/bands" component={BandListC} />
          <Route exact={true} path="/login" component={LoginPageC} />
          <Route path="/users/:userId" component={UserInfoC} />
          <Route path="/bands/:bandId" component={BandInfoC} />
          <Route path="/*" component={ErrorPage} />
        </Switch>
      </div>
    </section>
  );
};

class App extends React.Component {

  render() {
    return (
      <div>
        <HeaderC />
        <RoutingSwitch />
      </div>
    );
  }
}

export default App;
