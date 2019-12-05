import React from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import Tabs from './../../tabs-panel/tabs/tabs';
import Header from './../../header/header';
import withActiveCard from './../../../hocs/with-active-card/with-active-card';
import City from './../city/city';
import {ActionCreator} from "../../../store/actions/action-creator/action-creator";

const Main = (props)=>{
  const {match, changeCity} = props;
  const name = match.params.name;
  changeCity(name);

  const WithActiveCard = withActiveCard(City);
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
};

Main.propTypes = {
  match: PropTypes.object,
  changeCity: PropTypes.func,
};

const mapDispatchToProps = (dispatch) => ({
  changeCity: (city) => {
    dispatch(ActionCreator.changeCity(city));
  }
});


export {Main};

export default connect(null, mapDispatchToProps)(Main);

