import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import {Link} from "react-router-dom";

export default function LocationsCity(props) {
  const {name, isActive} = props;
  return (
    <li className="locations__item">
      <Link
        className={classNames(`locations__item-link`, `tabs__item `, {
          "tabs__item--active": isActive
        })}
        to={`/${name}`}>
        <span>{name}</span>
      </Link>
    </li>
  );
}
LocationsCity.propTypes = {
  name: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired
};
