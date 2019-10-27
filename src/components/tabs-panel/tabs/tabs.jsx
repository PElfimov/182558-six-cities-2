import React from "react";
import LocationsCity from "../locations-city/locations-city";
const cities = [
  {
    name: `Paris`,
    isActive: false
  },
  {
    name: `Cologne`,
    isActive: false
  },
  {
    name: `Brussels`,
    isActive: true
  },
  {
    name: `Amsterdam`,
    isActive: false
  },
  {
    name: `Hamburg`,
    isActive: false
  },
  {
    name: `Dusseldorf`,
    isActive: false
  }
];

function handleClick() {}

export default function Tabs() {
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
