import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';

import Home from './components/Home';
import UserInfoC from './components/containers/UserInfoC';
import UserListC from './components/user/UserListC';
import HeaderC from './components/containers/HeaderC';

const RoutingSwitch = () => {
  return (
    <section className="section">
      <div className="container">
        <Switch>
          <Route exact={true} path="/" component={Home} />
          <Route exact={true} path="/users" component={UserListC} />
          <Route path="/users/:userId" component={UserInfoC} />
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
