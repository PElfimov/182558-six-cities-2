import React from "react";
import Main from "../main-page/main/main";
import PropTypes from "prop-types";

export default function App(props) {
  return <Main offers={props.offers} />;
}

App.propTypes = {
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
