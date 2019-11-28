import {createStore, applyMiddleware} from "redux";
import {Provider} from "react-redux";
import React from "react";
import ReactDOM from "react-dom";
import {Router} from "react-router-dom";
import App from "./components/app/app";
import configureAPI from "./api";
import thunk from "redux-thunk";
import {compose} from "recompose";
import reducer from './store/index';
import Operation from './store/actions/async-actions/async-actions';
import history from "./history";


const init = () => {

  const api = configureAPI((...args) => store.dispatch(...args));

  const store = createStore(
      reducer,
      compose(
          applyMiddleware(thunk.withExtraArgument(api)),
          window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
      )
  );
  store.dispatch(Operation.loadOffers());

  ReactDOM.render(
      <Provider store={store}>
        <Router history={history}>
          <App />
        </Router>
      </Provider>,
      document.querySelector(`#root`)
  );
};

init();
