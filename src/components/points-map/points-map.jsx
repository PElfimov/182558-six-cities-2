import leaflet from "leaflet";
import React from "react";
import propTypes from "./prop-types";

export default class PointsMap extends React.PureComponent {
  constructor(props) {
    super(props);
    this.ref = React.createRef();
    this.el = null;
  }

  render() {
    return (
      <section className="cities__map map">
        <div style={{height: `100%`}} ref={this.ref}></div>
      </section>
    );
  }

  get icon() {
    return leaflet.icon({
      iconUrl: `img/pin.svg`,
      iconSize: [30, 30]
    });
  }

  createArea({city, elem, zoom = 12}) {
    this.el = leaflet.map(elem, {
      center: city,
      zoom,
      zoomControl: false,
      marker: true
    });
    leaflet
      .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
        attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
      })
      .addTo(this.el);
    this.el.setView(city, zoom);
  }

  renderOffers(points) {
    for (const point of points) {
      leaflet.marker(point, {icon: this.icon}).addTo(this.el);
    }
  }

  componentDidUpdate() {
    const {offers} = this.props;
    const city = offers[0].city.coordinates;
    if (this.el) {
      this.el.remove();
    }

    this.createArea({city, elem: this.ref.current});
    this.renderOffers(offers.map((el) => el.coordinates));
  }

  componentWillUnmount() {
    this.el = null;
  }
}

PointsMap.propTypes = propTypes;
