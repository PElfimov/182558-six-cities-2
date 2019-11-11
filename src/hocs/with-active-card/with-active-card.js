
import React, {PureComponent} from 'react';


const withActiveCard = (Component) => {
  class WithActiveCard extends PureComponent {
    constructor(props) {
      super(props);
      this.state = {activeCard: {}};
      this.handleHover = this.handleHover.bind(this);
    }

    handleHover(data) {
      this.setState({
        activeCard: Object.assign(this.state.activeCard, data)
      });
    }

    render() {
      return <Component
        {...this.props}
        handleHover={this.handleHover}
        activeCard={this.state.activeCard}
      />;
    }
  }

  WithActiveCard.propTypes = {};

  return WithActiveCard;
};

export default withActiveCard;
