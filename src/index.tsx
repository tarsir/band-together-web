import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import bandTogether from './state/reducers';
import createHistory from 'history/createBrowserHistory';
import { ConnectedRouter, routerMiddleware } from 'react-router-redux';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import 'bulma/css/bulma.css';

/* for handling existing session tokens in storage */
import { useExistingSession } from './state/auth/actions';

const loggerMiddleware = createLogger();
const history = createHistory();

let store = createStore(
  bandTogether,
  (window as any).devToolsExtension ? (window as any).devToolsExtension() : f => f,
  applyMiddleware(
    loggerMiddleware,
    routerMiddleware(history),
    thunk
  )
);

store.dispatch(useExistingSession());

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
