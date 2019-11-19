import React, {PureComponent} from 'react';

const withSignIn = (Component) => {
  class WithSignIn extends PureComponent {
    constructor(props) {
      super(props);
      this.state = {
        email: ``,
        password: ``
      };

      this._addValueFormChangeHandler = this._addValueFormChangeHandler.bind(this);
    }

    render() {
      const {email, password} = this.state;

      return <Component
        {...this.props}
        email={email}
        password={password}
        addValueFormChangeHandler={this._addValueFormChangeHandler}
      />;
    }

    _addValueFormChangeHandler(evt, nameInput) {
      this.setState({[nameInput]: evt.target.value});
    }
  }

  WithSignIn.propTypes = {};

  return WithSignIn;
};

export default withSignIn;
