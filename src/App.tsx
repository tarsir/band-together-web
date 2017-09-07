import * as React from 'react';
import './App.css';

import CurrentUserInfo from './components/containers/CurrentUserInfo';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Band Together</h2>
        </div>
        <div className="App-intro">
          <CurrentUserInfo />
        </div>
      </div>
    );
  }
}

export default App;
