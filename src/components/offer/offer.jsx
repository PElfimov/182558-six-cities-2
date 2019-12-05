import React from "react";
import PropTypes from "prop-types";
import {connect} from 'react-redux';
import Header from './../header/header';
import Gallery from "./gallery/gallery";
import BookmarkButton from '../bookmark-button/bookmark-button';
import withFavoriteHandler from '../../hocs/with-favorite-handler/with-favorite-handler';
import Goods from './goods/goods';
import Host from "./host/host";
import Reviews from "../reviews/reviews";
import PointsMap from './../points-map/points-map';
import SmallOffersList from './small-offers-list/small-offers-list';
import {getSmallHotelsList} from './../../store/selectors/selectors';

const BookmarkButtonWrapped = withFavoriteHandler(BookmarkButton);
const _getPremiumMarker = () => {
  return (
    <div className="property__mark">
      <span>Premium</span>
    </div>
  );
};

const Offer = (props)=>{

  const {offers, match, history} = props;
  const id = Number(match.params.id);
  const offer = offers[Number(id) - Number(1)];
  const {
    images,
    isPremium,
    isFavorite,
    goods,
    rating,
    type,
    bedrooms,
    maxAdults,
    host,
    cost,
    description,
  } = offer;
  const smallHotelsList = getSmallHotelsList(offers, id);
  smallHotelsList.push(offer);


  return (
    <React.Fragment>
      <Header />
      <main className="page__main page__main--property">
        <section className="property">
          <Gallery images={images}/>
          <div className="property__container container">
            <div className="property__wrapper">
              {isPremium && _getPremiumMarker()}
              <div className="property__name-wrapper">
                <h1 className="property__name">{name}</h1>
                <BookmarkButtonWrapped
                  isFavorite={isFavorite}
                  history = {history}
                  id = {id}
                  type ={`property`}
                />
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={{width: rating * 20 + `%`}}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">{rating}</span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  {type}
                </li>
                <li className="property__feature property__feature--bedrooms">
                  {bedrooms} Bedrooms
                </li>
                <li className="property__feature property__feature--adults">
                  Max {maxAdults} adults
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">&euro;{cost}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <Goods goods={goods}/>
              <Host host={host} description = {description}/>
              <Reviews />
            </div>
          </div>
          <section className="property__map map">
            <PointsMap
              activeCard={offer}
              offers={smallHotelsList}/>
          </section>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <div className="near-places__list places__list">
              <SmallOffersList offers={offers} id={id}/>
            </div>
          </section>
        </div>
      </main>
    </React.Fragment>
  );

};

Offer.propTypes = {
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
  match: PropTypes.object,
  history: PropTypes.object,
  favoriteHotelHandler: PropTypes.func,
  goods: PropTypes.arrayOf(PropTypes.string),
  rating: PropTypes.number,
  bedrooms: PropTypes.number,
  maxAdults: PropTypes.number,
  type: PropTypes.string,
  host: PropTypes.object,
  cost: PropTypes.number,
};

const mapStateToProps = (state, ownProps) =>
  Object.assign({}, ownProps, {
    offers: state.externalData.offers
  });


export {Offer};

export default connect(mapStateToProps, null)(Offer);
