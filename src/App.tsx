import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';

import Home from './components/Home';
import HeaderC from './components/containers/HeaderC';

const RoutingSwitch = () => {
  return (
    <Switch>
      <Route exact={true} path="/" component={Home} />
      {/* <Route path="/user" component={Home} /> */}
    </Switch>
  );
};

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <HeaderC />
        </div>
        <div className="App-main">
          <RoutingSwitch />
        </div>
      </div>
    );
  }
}

export default App;
