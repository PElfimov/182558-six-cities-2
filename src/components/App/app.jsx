import React, {PureComponent} from "react";
import {connect} from "react-redux";
import PropTypes from 'prop-types';
import {ActionCreator} from "../../store/actions/action-creator/action-creator";
import SignIn from '../sign-in/sign-in';
import withSignIn from '../../hocs/with-sign-in/with-sign-in';
import {Switch, Route} from "react-router-dom";
import Favorites from '../favorites/favorites';
import withAuth from '../../hocs/with-auth/with-auth';
import Operation from '../../store/actions/async-actions/async-actions';
import withCheckAuth from './../../hocs/with-check-auth/with-check-auth';
import Offer from './../offer/offer';
import Main from './../main-page/main/main';


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


  render() {

    return (
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/login" exact component={withCheckAuth(SignInWrapped)} />
        <Route path="/favorites" exact component={withAuth(Favorites)} />
        <Route path = "/offer/:id" exact component = {Offer}/>
        <Route path = "/:name" exact component = {Main}/>
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

App.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.exact({
    id: PropTypes.number,
    city: PropTypes.exact({
      name: PropTypes.string,
      coordinates: PropTypes.arrayOf(PropTypes.number),
      zoom: PropTypes.number,
    }),
    isPremium: PropTypes.bool,
    isFavorite: PropTypes.bool,
    cost: PropTypes.number,
    name: PropTypes.string,
    rating: PropTypes.number,
    type: PropTypes.string,
    coordinates: PropTypes.array,
    previewImage: PropTypes.string,
    images: PropTypes.arrayOf(PropTypes.string),
    bedrooms: PropTypes.number,
    maxAdults: PropTypes.number,
    goods: PropTypes.arrayOf(PropTypes.string),
    host: PropTypes.object,
    description: PropTypes.string,
  })
  ).isRequired,
  changeCity: PropTypes.func,
  isLogin: PropTypes.bool
};

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
