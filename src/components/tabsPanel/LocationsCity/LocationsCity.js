import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

LocationsCity.propTypes = {
  name: PropTypes.oneOf([`Paris`, `Cologne`, `Brussels`, `Amsterdam`, `Hamburg`, `Dusseldorf`]),
  isActive: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired
};


export default function LocationsCity(props) {
  return (
    <li className="locations__item">
      <a
        className={
          classNames(`locations__item-link`, `tabs__item `, {'tabs__item--active': props.isActive})}
        href="#"
        onClick={props.onClick}>
        <span>{props.name}</span>
      </a>
    </li>
  );
}
