import React from "react";
import HotelCard from "../hotel-card/hotel-card";
import offers from "../../../mocks/offers";
import FilterHotels from "../filter-hotels/filter-hotels";

function handleClick() {}
function handleHover() {}

export default function City() {
  return (
    <div className="cities">
      <div className="cities__places-container container">
        <section className="cities__places places">
          <h2 className="visually-hidden">Places</h2>
          <b className="places__found">312 places to stay in Amsterdam</b>
          <FilterHotels />
          <div className="cities__places-list places__list tabs__content">
            {offers.map((it, i) => (
              <HotelCard key={name + i} offer={it} onClick={handleClick} onHover={handleHover} />
            ))}
          </div>
        </section>
        <div className="cities__right-section">
          <section className="cities__map map"></section>
        </div>
      </div>
    </div>
  );
}
