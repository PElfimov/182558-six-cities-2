import PropTypes from 'prop-types';

export default {
  points: PropTypes.arrayOf(PropTypes.number),
  city: PropTypes.arrayOf(PropTypes.number).isRequired
};
