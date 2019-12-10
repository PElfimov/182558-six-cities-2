import React, {PureComponent} from 'react';
import {Redirect} from "react-router-dom";
import {connect} from 'react-redux';
import {compose} from "redux";
import PropTypes from 'prop-types';
import Operation from '../../store/actions/async-actions/async-actions';

const withAuth = (Component) => {
  class WithAuth extends PureComponent {
    constructor(props) {
      super(props);
    }

    _getScreen() {
      const {isAuthorization} = this.props;
      if (isAuthorization) {
        return <Component {...this.props} />;
      } else {
        return <Redirect to="/login" />;
      }
    }

    componentDidUpdate() {
      const {isLogin} = this.props;
      isLogin();
    }
    render() {
      return (
        <React.Fragment>
          {this._getScreen()}
        </React.Fragment>
      );
    }
  }

  WithAuth.propTypes = {
    isAuthorization: PropTypes.bool,
    isLogin: PropTypes.func
  };


  return WithAuth;
};

const mapStateToProps = (state, ownProps) =>
  Object.assign({}, ownProps, {
    isAuthorization: state.externalData.isAuthorizationRequired,

  });

const mapDispatchToProps = (dispatch) => ({
  isLogin: () => {
    dispatch(Operation.getLogin());
  }
});

const composedHoc = compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuth
);

export {withAuth};
export default composedHoc;
