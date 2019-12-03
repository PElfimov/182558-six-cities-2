import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import Operation from '../../store/actions/async-actions/async-actions';

const withFavoriteHandler = (Component) => {
  const WithFavoriteHandler = (props)=> {
    const {favoriteHotelHandler, isFavorite, id, history} = props;
    return (
      <React.Fragment>
        <Component
          {...props}
          onClick= {_isFavoriteHotelHandler}
          isBookmarkAdded = {isFavorite}
        />
      </React.Fragment>
    );


    function _isFavoriteHotelHandler(evt) {
      evt.preventDefault();
      let status = isFavorite ? 0 : 1;
      favoriteHotelHandler(id, status, history);
    }
  };

  WithFavoriteHandler.propTypes = {
    favoriteHotelHandler: PropTypes.func,
    isFavorite: PropTypes.bool,
    id: PropTypes.number,
    history: PropTypes.object

  };


  const mapDispatchToProps = (dispatch) => ({
    favoriteHotelHandler: (id, status, history) => {
      dispatch(Operation.favoriteHotelHandler(id, status, history));
    }
  });
  return connect(null, mapDispatchToProps)(WithFavoriteHandler);
};

export default withFavoriteHandler;
