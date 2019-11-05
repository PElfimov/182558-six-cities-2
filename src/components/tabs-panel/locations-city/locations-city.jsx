import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

export default function LocationsCity(props) {
  const clickHandler = (evt) => {
    evt.preventDefault();
    const city = evt.target.childNodes[0].nodeValue;
    props.onClick(city);
  };
  return (
    <li className="locations__item">
      <a
        className={classNames(`locations__item-link`, `tabs__item `, {
          "tabs__item--active": props.isActive
        })}
        href="#"
        onClick={clickHandler}>
        <span>{props.name}</span>
      </a>
    </li>
  );
}
LocationsCity.propTypes = {
  name: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired
};
