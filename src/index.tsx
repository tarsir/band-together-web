import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import bandTogether from './state/reducers';
import { getUserList } from './state/actions';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import 'bulma/css/bulma.css';

const loggerMiddleware = createLogger();

let store = createStore(
  bandTogether,
  (window as any).devToolsExtension ? (window as any).devToolsExtension() : f => f,
  applyMiddleware(
    loggerMiddleware,
    thunk
  )
);

store.dispatch(getUserList());

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
