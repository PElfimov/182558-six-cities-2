import React from "react";
import LocationsCity from "../locations-city/locations-city";
import propTypes from "./prop-types";

export default function Tabs(props) {
  const {cities, activeCity, onChangeCity} = props;
  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {cities.map((it, i) => (
            <LocationsCity
              key={it + i}
              name={it}
              isActive={it === activeCity}
              onClick={onChangeCity}
            />
          ))}
        </ul>
      </section>
    </div>
  );
}

Tabs.propTypes = propTypes;
