import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';


import Header from '../header/header';
import Operation from '../../store/actions/async-actions/async-actions';
class SignIn extends PureComponent {

  constructor(props) {
    super(props);

    this._authFormSubmitHandler = this._authFormSubmitHandler.bind(this);
  }

  componentDidUpdate() {
    const {isAuthorizationRequired, history} = this.props;
    if (isAuthorizationRequired) {
      history.push(`/`);
    }
  }


  render() {
    const {email, password, addValueFormChangeHandler} = this.props;
    return <div className="page page--gray page--login">
      <Header />

      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <form className="login__form form" action="#" method="post" onSubmit={this._authFormSubmitHandler}>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">E-mail</label>
                <input
                  className="login__input form__input"
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={email}
                  onChange={(evt) => addValueFormChangeHandler(evt, `email`)}
                  required=""
                />
              </div>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">Password</label>
                <input
                  className="login__input form__input"
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={password}
                  onChange={(evt) => addValueFormChangeHandler(evt, `password`)}
                  required=""
                />
              </div>
              <button className="login__submit form__submit button" type="submit">Sign in</button>
            </form>
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <a className="locations__item-link" href="#">
                <span>Amsterdam</span>
              </a>
            </div>
          </section>
        </div>
      </main>
    </div>;
  }

  _authFormSubmitHandler(evt) {
    evt.preventDefault();
    const {email, password, checkLogin, history} = this.props;
    if (email.length && password.length) {
      checkLogin(email, password, history);
    }
  }
}

const mapDispatchToProps = (dispatch) => ({
  checkLogin: (email, password, history) => {
    dispatch(Operation.checkLogin(email, password, history));
  }
});

const mapStateToProps = (state, ownProps) =>
  Object.assign({}, ownProps, {
    isAuthorizationRequired: state.externalData.isAuthorizationRequired,

  });

SignIn.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  checkLogin: PropTypes.func,
  addValueFormChangeHandler: PropTypes.func.isRequired,
  history: PropTypes.object,
  isAuthorizationRequired: PropTypes.bool
};

export {SignIn};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
