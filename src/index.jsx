import {createStore, applyMiddleware} from "redux";
import {Provider} from "react-redux";
import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app";
import offers from "./mocks/offers";
import {reducer} from "./store/reducer/local-data/reducer";
import configureAPI from "./api";
import thunk from "redux-thunk";
import {compose} from "recompose";

const init = () => {
  const api = configureAPI((...args) => store.dispatch(...args));
  const store = createStore(
      reducer,
      compose(
          applyMiddleware(thunk.withExtraArgument(api)),
          window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
      )
  );

  ReactDOM.render(
      <Provider store={store}>
        <App offers={offers} />
      </Provider>,
      document.querySelector(`#root`)
  );
};

init();
