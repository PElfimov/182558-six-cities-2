
import React, {PureComponent} from 'react';
import history from './../../history';


const withHistory = (Component) => {
  class WithActiveCard extends PureComponent {
    constructor(props) {
      super(props);
    }

    render() {
      return <Component
        {...this.props}
        history={history}

      />;
    }
  }

  withHistory.propTypes = {};

  return WithActiveCard;
};

export default withHistory;
