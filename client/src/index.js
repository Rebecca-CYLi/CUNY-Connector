import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import store from "./redux/store/index";
import App from "./App";
import { BrowserRouter as Router} from "react-router-dom";
import * as serviceWorker from './serviceWorker';

//needed to get store.getstate() in console
import index from "./redux/index";

render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();