import PropTypes from 'prop-types';

export default {
  cities: PropTypes.arrayOf(PropTypes.string).isRequired,
  changeCity: PropTypes.func.isRequired,
  activeCity: PropTypes.string.isRequired,
};
