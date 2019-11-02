import leaflet from "leaflet";
import React from "react";
import propTypes from "./prop-types";

export default class Map extends React.PureComponent {
  constructor(props) {
    super(props);
    this.ref = React.createRef();
    this.el = null;

    this.state = {
      city: [52.38333, 4.9],
      zoom: 12,
      tileLayer: `https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`,
      attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
    };
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

  componentDidMount() {
    const {city, zoom, tileLayer, attribution} = this.state;
    const nodeMap = this.ref.current;

    const map = leaflet.map(nodeMap, {
      center: city,
      zoom,
      zoomControl: false,
      marker: true
    });
    map.setView(city, zoom);

    leaflet
      .tileLayer(tileLayer, {
        attribution
      })
      .addTo(map);

    this.props.offers.forEach((offer) => {
      leaflet.marker(offer.coordinates, {icon: this.icon}).addTo(map);
    });
  }
}

Map.propTypes = propTypes;
