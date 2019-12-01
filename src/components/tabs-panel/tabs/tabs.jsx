import React from "react";
import {connect} from "react-redux";
import PropTypes from 'prop-types';
import LocationsCity from "../locations-city/locations-city";
import {getCityList} from "../../../store/selectors/selectors";
import {ActionCreator} from "../../../store/actions/action-creator/action-creator";

function Tabs(props) {
  const {cities, activeCity, changeCity} = props;
  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {cities.map((it, i) => (
            <LocationsCity
              key={it + i}
              name={it}
              isActive={it === activeCity}
              onClick={changeCity}
            />
          ))}
        </ul>
      </section>
    </div>
  );
}

Tabs.propTypes = {
  cities: PropTypes.arrayOf(PropTypes.string).isRequired,
  changeCity: PropTypes.func.isRequired,
  activeCity: PropTypes.string.isRequired,
};

const mapStateToProps = (state, ownProps) =>
  Object.assign({}, ownProps, {
    cities: getCityList(state),
    activeCity: state.localData.city

  });

const mapDispatchToProps = (dispatch) => ({
  changeCity: (city) => {
    dispatch(ActionCreator.changeCity(city));
  }
});

export {Tabs};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Tabs);
