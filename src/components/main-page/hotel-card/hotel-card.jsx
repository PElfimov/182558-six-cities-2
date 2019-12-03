import React from "react";
import PropTypes from "prop-types";
import BookmarkButton from "../../bookmark-button/bookmark-button";
import Operation from './../../../store/actions/async-actions/async-actions';
import {connect} from 'react-redux';
import {Link} from "react-router-dom";

function Premium() {
  return (
    <div className="place-card__mark">
      <span>Premium</span>
    </div>
  );
}

function HotelCard(props) {
  const {onHover, offer, history, favoriteHotelHandler, view = `cities`} = props;
  const answer = offer;
  const {isPremium, isFavorite, cost, rating, name, type, previewImage, id} = offer;

  return (
    <article
      onMouseOver={() => {
        onHover(answer);
      }}
      className={`${view}__place-card place-card`}>
      {isPremium && <Premium />}
      <div className={`${view}__image-wrapper place-card__image-wrapper`}>
        <a href="#">
          <img
            className="place-card__image"
            src={previewImage}
            width="260"
            height="200"
            alt="Place image"
          />
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{cost}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <BookmarkButton
            isBookmarkAdded={isFavorite}
            onClick={_isFavoriteHotelHandler}
          />
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: rating * 20 + `%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link className="jsTitle" to={`/offer/${id}`} href="#">
            {name}
          </Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );

  function _isFavoriteHotelHandler(evt) {
    evt.preventDefault();
    let status = isFavorite ? 0 : 1;
    favoriteHotelHandler(id, status, history);
  }

}

HotelCard.propTypes = {
  offer: PropTypes.exact({
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
  }).isRequired,
  onHover: PropTypes.func.isRequired,
  favoriteHotelHandler: PropTypes.func,
  history: PropTypes.object,
  view: PropTypes.string
};

const mapDispatchToProps = (dispatch) => ({
  favoriteHotelHandler: (id, status, history) => {
    dispatch(Operation.favoriteHotelHandler(id, status, history));
  }
});


export {HotelCard};

export default connect(null, mapDispatchToProps)(HotelCard);
