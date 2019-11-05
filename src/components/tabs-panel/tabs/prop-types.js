import PropTypes from 'prop-types';

export default {
  cities: PropTypes.arrayOf(PropTypes.string).isRequired,
  onChangeCity: PropTypes.func.isRequired,
  activeCity: PropTypes.string.isRequired,
};
