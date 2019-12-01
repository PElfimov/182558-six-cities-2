
import React, {PureComponent} from 'react';


const withActiveCard = (Component) => {
  class WithActiveCard extends PureComponent {
    constructor(props) {
      super(props);
      this.state = {activeCard: []};
      this.handleHover = this.handleHover.bind(this);
    }

    handleHover(data) {
      const offer = Object.assign({}, data);
      this.setState({
        activeCard: offer,
      });

    }

    render() {
      const {activeCard} = this.state;
      return <Component
        {...this.props}
        handleHover={this.handleHover}
        activeCard={activeCard}
      />;
    }
  }

  WithActiveCard.propTypes = {};

  return WithActiveCard;
};

export default withActiveCard;
