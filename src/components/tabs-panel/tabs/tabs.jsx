import React from "react";
import LocationsCity from "../locations-city/locations-city";
import propTypes from "./prop-types";

function handleClick() {}

export default function Tabs(props) {
  const {cities} = props;
  console.log(cities);
  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {cities.map((it, i) => (
            <LocationsCity
              key={name + i}
              name={it.name}
              isActive={it.isActive}
              onClick={handleClick}
            />
          ))}
        </ul>
      </section>
    </div>
  );
}

Tabs.propTypes = propTypes;
