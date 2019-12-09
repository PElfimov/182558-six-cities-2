import React, {PureComponent} from 'react';

const withSortList = (Component) => {
  class WithSortList extends PureComponent {
    constructor(props) {
      super(props);
      this.state = {
        isSortOpened: false
      };
      this.handleSortListClick = this.handleSortListClick.bind(this);
    }

    handleSortListClick() {
      this.setState((prevState) => ({isSortOpened: !prevState.isSortOpened}));
    }

    render() {
      const {isSortOpened} = this.state;

      return <Component
        {...this.props}
        isSortOpened={isSortOpened}
        onSortListClick={this.handleSortListClick}
      />;
    }
  }

  WithSortList.propTypes = {};

  return WithSortList;
};

export default withSortList;
