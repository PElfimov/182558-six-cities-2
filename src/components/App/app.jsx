import React, {PureComponent} from "react";
import {connect} from "react-redux";
import Header from "../header/header";
import City from "../main-page/city/city";
import Tabs from "../tabs-panel/tabs/tabs";
import propTypes from "./prop-types";
import {ActionCreator, getCitiesListFromOffers, getFilteredOffers} from "../../store/actions/action-creator/action-creator";
import withActiveCard from "../../hocs/with-active-card/with-active-card";
import ModelOffers from '../../store/model-offers/model-offers';
import SignIn from '../sign-in/sign-in';
import withSignIn from '../../hocs/with-sign-in/with-sign-in';
import {Switch, Route, Redirect} from "react-router-dom";


const WithActiveCard = withActiveCard(City);
const SignInWrapped = withSignIn(SignIn);

class App extends PureComponent {
  constructor(props) {
    super(props);
  }

  _initialState() {
    const cities = getCitiesListFromOffers(this.props.offers);
    const offers = getFilteredOffers(this.props.offers, cities[0]);
    this.props.setCities(cities);
    this.props.changeCity(cities[0], offers);

  }

  replaceOffers(city) {
    const {offers} = this.props;
    const citiesOffers = getFilteredOffers(offers, city);
    this.props.changeCity(city, citiesOffers);
  }
  componentDidUpdate(prevProps) {
    if (this.props.offers.length !== prevProps.offers.length) {
      this._initialState();
    }
  }

  renderScreen(isAuthorizationRequired) {
    if (isAuthorizationRequired) {
      const {city, cities, cityOffers} = this.props;
      return <div className="page page--gray page--main">
        <Header />
        <main className="page__main page__main--index">
          <h1 className="visually-hidden">Cities</h1>
          <Tabs
            cities={cities}
            activeCity={city}
            onChangeCity={(selectedCity) => this.replaceOffers(selectedCity)}
          />
          <WithActiveCard offers={cityOffers} />
        </main>
      </div>;
    } else {
      return <SignInWrapped />;
    }
  }


  render() {
    const {isAuthorizationRequired} = this.props;

    return (
      <React.Fragment>
        {this.renderScreen(isAuthorizationRequired)}
      </React.Fragment>
    );
  }
}

App.propTypes = propTypes;

const mapStateToProps = (state, ownProps) =>
  Object.assign({}, ownProps, {
    city: state.localData.city,
    cityOffers: state.localData.cityOffers,
    cities: state.localData.cities,
    offers: ModelOffers.parseOffers(state.externalData.offers),
    isAuthorizationRequired: state.externalData.isAuthorizationRequired,

  });

const mapDispatchToProps = (dispatch) => ({
  setCities: (cities) => {
    dispatch(ActionCreator.setCities(cities));
  },
  changeCity: (city, offers) => {
    dispatch(ActionCreator.changeCity(city));
    dispatch(ActionCreator.setOffers(offers));
  }
});

export {App};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
