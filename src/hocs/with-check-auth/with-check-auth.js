import React, {PureComponent} from 'react';
import {Redirect} from "react-router-dom";
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import Operation from '../../store/actions/async-actions/async-actions';

const withCheckAuth = (Component) => {
  class WithCheckAuth extends PureComponent {
    constructor(props) {
      super(props);
    }

    _getScreen() {
      const {isAuthorization} = this.props;
      if (isAuthorization) {
        return <Redirect to="/login" />;

      } else {
        return <Component {...this.props} />;
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

  WithCheckAuth.propTypes = {
    isAuthorization: PropTypes.bool,
    isLogin: PropTypes.func
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
  return connect(mapStateToProps, mapDispatchToProps)(WithCheckAuth);
};

export default withCheckAuth;
