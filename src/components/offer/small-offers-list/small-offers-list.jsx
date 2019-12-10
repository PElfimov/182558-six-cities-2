import React from 'react';
import PropTypes from "prop-types";
import HotelCard from './../../main-page/hotel-card/hotel-card';
import {getSmallHotelsList} from './../../../store/selectors/selectors';

const SmallOffersList = (props) =>{
  const {offers, id} = props;
  const list = getSmallHotelsList(offers, id);
  return (
    <React.Fragment>
      {list.map((it)=>{
        return (
          <HotelCard
            key={`${it.id}`}
            offer={it}
            onHover={()=>{}}
          />);
      })}
    </React.Fragment>
  );
};

SmallOffersList.propTypes = {
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
  id: PropTypes.number.isRequired
};

export default SmallOffersList;
