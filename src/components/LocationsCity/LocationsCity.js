import React from "react";
import classNames from "classnames";

export default function LocationsCity(props) {
  return (
    <li className="locations__item">
      <a className={classNames(`locations__item-link`, `tabs__item `, {'tabs__item--active': props.isActive})} href="#">
        <span>{props.name}</span>
      </a>
    </li>
  );
}
