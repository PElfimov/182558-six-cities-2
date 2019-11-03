import React from "react";
import Header from "../header/header";
import City from "../city/city";
import Tabs from "../../tabs-panel/tabs/tabs";
import PropTypes from "prop-types";

export default function Main(props) {
  return (
    <div className="page page--gray page--main">
      <Header />
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <Tabs />
        <City offers={props.offers} />
      </main>
    </div>
  );
}

Main.propTypes = {
  offers: PropTypes.arrayOf(
      PropTypes.exact({
        id: PropTypes.string,
        isPremium: PropTypes.bool,
        cost: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        rating: PropTypes.number.isRequired,
        type: PropTypes.oneOf([`Private room`, `Apartment`]),
        coordinates: PropTypes.array
      })
  ).isRequired
};
