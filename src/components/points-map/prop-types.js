import PropTypes from 'prop-types';

export default {
  city: PropTypes.arrayOf(PropTypes.number).isRequired,
  offers: PropTypes.arrayOf(PropTypes.exact({
    id: PropTypes.number,
    city: PropTypes.exact({
      name: PropTypes.string,
      coordinates: PropTypes.arrayOf(PropTypes.number)
    }),
    isPremium: PropTypes.bool,
    cost: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    type: PropTypes.oneOf([`Private room`, `Apartment`]),
    coordinates: PropTypes.array
  })
  ).isRequired
};
