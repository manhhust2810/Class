import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'font-awesome/css/font-awesome.min.css';
//store
// import { createStore } from "redux";
// import myReducer from "./reducers/index";
import { Provider } from "react-redux";
import store from "./store";
import "bootstrap/dist/css/bootstrap.min.css";
import "./scss/reset.scss";
import "./scss/components.scss";

// const store = createStore(myReducer);

ReactDOM.render(
  // <React.StrictMode>
  <Provider store={store}>
      <App />
  </Provider>,   
  // </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();