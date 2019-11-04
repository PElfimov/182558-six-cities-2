import React, {PureComponent} from "react";
import {connect} from "react-redux";
import Header from "../main-page/header/header";
import City from "../main-page/city/city";
import Tabs from "../tabs-panel/tabs/tabs";
import propTypes from "./prop-types";
import {ActionCreator, getCitiesListFromOffers} from "../../reducer/reducer";

class App extends PureComponent {
  constructor(props) {
    super(props);
  }
  render() {
    const {offers} = this.props;
    const cities = getCitiesListFromOffers(this.props.offers);
    return (
      <div className="page page--gray page--main">
        <Header />
        <main className="page__main page__main--index">
          <h1 className="visually-hidden">Cities</h1>
          <Tabs cities={cities} />
          <City offers={offers} />
        </main>
      </div>
    );
  }
}

App.propTypes = propTypes;

const mapStateToProps = (state, ownProps) =>
  Object.assign({}, ownProps, {
    city: state.city,
    cityOffers: state.cityOffers,
    cities: state.cities
  });

const mapDispatchToProps = (dispatch) => ({
  onUserAnswer: (onUserAnswer, questions, mistakes, maxMistakes, step) => {
    dispatch(ActionCreator.incrementStep());
    dispatch(ActionCreator.incrementMistake(onUserAnswer, questions, mistakes, maxMistakes, step));
  }
});

export {App};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
