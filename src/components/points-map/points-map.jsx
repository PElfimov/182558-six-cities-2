import leaflet from "leaflet";
import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {getCityOffers} from '../../store/selectors/selectors';

class PointsMap extends React.Component {
  constructor(props) {
    super(props);
    this.ref = React.createRef();
    this.el = null;
    this.markerGroup = null;
  }

  render() {
    return (
      <section className="cities__map map">
        <div style={{height: `100%`}} ref={this.ref}></div>
      </section>
    );
  }

  createIcon(isActive) {
    return leaflet.icon({
      iconUrl: isActive ? `img/pin-active.svg` : `img/pin.svg`,
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

  renderOffers(offers, activeId) {
    if (this.markerGroup) {
      this.markerGroup.clearLayers();
    }
    this.markerGroup = leaflet.layerGroup().addTo(this.el);
    for (const point of offers) {
      let isActiveMarker = activeId === point.id ? true : false;
      leaflet
        .marker(point.coordinates, {icon: this.createIcon(isActiveMarker)})
        .addTo(this.markerGroup);
    }

  }


  componentDidUpdate(prevProps) {

    const {offers, activeCard} = this.props;
    const activeId = activeCard.id;
    const city = offers[0].city.coordinates;
    if (prevProps.offers !== this.props.offers) {
      if (this.el) {
        this.el.remove();
      }
      this.createArea({city, elem: this.ref.current});
    }
    this.renderOffers(offers, activeId);
  }

  componentWillUnmount() {
    this.el = null;
  }
}

PointsMap.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.exact({
    id: PropTypes.number,
    city: PropTypes.exact({
      name: PropTypes.string,
      coordinates: PropTypes.arrayOf(PropTypes.number),
      zoom: PropTypes.number,
    }),
    isPremium: PropTypes.bool,
    isFavorite: PropTypes.bool,
    cost: PropTypes.number,
    name: PropTypes.string,
    rating: PropTypes.number,
    type: PropTypes.string,
    coordinates: PropTypes.array,
    previewImage: PropTypes.string,
    images: PropTypes.arrayOf(PropTypes.string),
    bedrooms: PropTypes.number,
    maxAdults: PropTypes.number,
    goods: PropTypes.arrayOf(PropTypes.string),
    host: PropTypes.object,
    description: PropTypes.string,
  })
  ).isRequired,
  activeCard: PropTypes.exact({
    id: PropTypes.number,
    city: PropTypes.exact({
      name: PropTypes.string,
      coordinates: PropTypes.arrayOf(PropTypes.number),
      zoom: PropTypes.number,
    }),
    isPremium: PropTypes.bool,
    isFavorite: PropTypes.bool,
    cost: PropTypes.number,
    name: PropTypes.string,
    rating: PropTypes.number,
    type: PropTypes.string,
    coordinates: PropTypes.array,
    previewImage: PropTypes.string,
    images: PropTypes.arrayOf(PropTypes.string),
    bedrooms: PropTypes.number,
    maxAdults: PropTypes.number,
    goods: PropTypes.arrayOf(PropTypes.string),
    host: PropTypes.object,
    description: PropTypes.string,
  })
};

const mapStateToProps = (state, ownProps) =>
  Object.assign({}, ownProps, {
    offers: getCityOffers(state),
  });

export {PointsMap};
export default connect(mapStateToProps, null)(PointsMap);
