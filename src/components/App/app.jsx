import React from "react";
import {connect} from "react-redux";
import Header from "../main-page/header/header";
import City from "../main-page/city/city";
import Tabs from "../tabs-panel/tabs/tabs";
import propTypes from "./prop-types";
import {ActionCreator, getCitiesListFromOffers} from "../../reducer/reducer";

class App extends React.Component {
  constructor(props) {
    super(props);
    this._initialState();
  }

  _initialState() {
    const cities = getCitiesListFromOffers(this.props.offers);
    this.props.setCities(cities);
    this.props.changeCity(cities[0]);
  }

  render() {
    const {offers, city, changeCity} = this.props;
    const cities = getCitiesListFromOffers(this.props.offers);
    return (
      <div className="page page--gray page--main">
        <Header />
        <main className="page__main page__main--index">
          <h1 className="visually-hidden">Cities</h1>
          <Tabs
            cities={cities}
            activeCity={city}
            onChangeCity={(selectedCity) => changeCity(selectedCity)}
          />
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
  setCities: (cities) => {
    dispatch(ActionCreator.setCities(cities));
  },
  changeCity: (city) => {
    dispatch(ActionCreator.changeCity(city));
  }
});

export {App};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
