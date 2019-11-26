import {createStore, applyMiddleware, combineReducers} from "redux";
import {Provider} from "react-redux";
import React from "react";
import ReactDOM from "react-dom";
import {Router} from "react-router-dom";
import App from "./components/app/app";
import localData from "./store/reducer/local-data/local-data";
import configureAPI from "./api";
import thunk from "redux-thunk";
import {compose} from "recompose";
import externalData from './store/reducer/external-data/external-data';
import Operation from './store/actions/async-actions/async-actions';
import {createBrowserHistory} from "history";


const init = () => {
  const history = createBrowserHistory();
  const api = configureAPI((...args) => store.dispatch(...args));

  const reducer = combineReducers({
    localData,
    externalData
  });

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
