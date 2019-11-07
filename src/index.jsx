import {createStore} from "redux";
import {Provider} from "react-redux";
import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app";
import offers from "./mocks/offers";
import {reducer} from "./reducer/reducer";

const init = () => {
  const store = createStore(reducer);
  ReactDOM.render(
      <Provider store={store}>
        <App offers={offers} />
      </Provider>,
      document.querySelector(`#root`)
  );
};

init();
