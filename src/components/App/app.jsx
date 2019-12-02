import React, {PureComponent} from "react";
import {connect} from "react-redux";
import Header from "../header/header";
import City from "../main-page/city/city";
import Tabs from "../tabs-panel/tabs/tabs";
import propTypes from "./prop-types";
import {ActionCreator} from "../../store/actions/action-creator/action-creator";
import withActiveCard from "../../hocs/with-active-card/with-active-card";
import SignIn from '../sign-in/sign-in';
import withSignIn from '../../hocs/with-sign-in/with-sign-in';
import {Switch, Route} from "react-router-dom";
import Favorites from '../favorites/favorites';
import withAuth from '../../hocs/with-auth/with-auth';
import Operation from '../../store/actions/async-actions/async-actions';


const WithActiveCard = withActiveCard(City);
const SignInWrapped = withSignIn(SignIn);

class App extends PureComponent {
  constructor(props) {
    super(props);
  }

  _initialState() {
    const {offers} = this.props;
    const city = offers[0].city.name;
    this.props.changeCity(city);
  }


  componentDidUpdate(prevProps) {
    const {isLogin} = this.props;
    if (this.props.offers.length !== prevProps.offers.length) {
      this._initialState();
    }
    isLogin();
  }

  _getMainPage() {
    return (
      <div className="page page--gray page--main">
        <Header />
        <main className="page__main page__main--index">
          <h1 className="visually-hidden">Cities</h1>
          <Tabs />
          <WithActiveCard />
        </main>
      </div>
    );
  }


  render() {

    return (
      <Switch>
        <Route path="/" exact render={() =>
          this._getMainPage()
        } />
        <Route path="/login" exact component={SignInWrapped} />
        <Route path="/favorites" component={withAuth(Favorites)} />
        <Route
          render={() => (
            <h1>
              404.
              <br />
              <small>Page not found</small>
            </h1>
          )}
        />
      </Switch>
    );
  }
}

App.propTypes = propTypes;

const mapStateToProps = (state, ownProps) =>
  Object.assign({}, ownProps, {
    offers: state.externalData.offers,
    isAuthorizationRequired: state.externalData.isAuthorizationRequired,

  });

const mapDispatchToProps = (dispatch) => ({
  changeCity: (city) => {
    dispatch(ActionCreator.changeCity(city));
  },
  isLogin: ()=>{
    dispatch(Operation.getLogin());
  }

});

export {App};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
