import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';

import Home from './components/Home';
import UserListC from './components/user/UserListC';
import HeaderC from './components/containers/HeaderC';

const RoutingSwitch = () => {
  return (
    <div className="container">
      <Switch>
        <Route exact={true} path="/" component={Home} />
        <Route path="/users" component={UserListC} />
      </Switch>
    </div>
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
