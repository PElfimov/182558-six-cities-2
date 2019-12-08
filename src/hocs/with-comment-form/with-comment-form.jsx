import React, {PureComponent} from 'react';

const withCommentForm = (Component) => {
  class WithCommentForm extends PureComponent {
    constructor(props) {
      super(props);
      this.state = {
        rating: `0`,
        comment: ``
      };

      this._addValueFormChangeHandler = this._addValueFormChangeHandler.bind(this);
    }

    render() {
      const {rating, comment} = this.state;

      return <Component
        {...this.props}
        rating={rating}
        comment={comment}
        addValueFormChangeHandler={this._addValueFormChangeHandler}
      />;
    }

    _addValueFormChangeHandler(evt, nameInput) {
      this.setState({[nameInput]: evt.target.value});
    }
  }

  WithCommentForm.propTypes = {};

  return WithCommentForm;
};

export default withCommentForm;
