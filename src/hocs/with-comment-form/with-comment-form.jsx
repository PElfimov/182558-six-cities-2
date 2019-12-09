import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import Operation from './../../store/actions/async-actions/async-actions';
const withCommentForm = (Component) => {
  class WithCommentForm extends PureComponent {
    constructor(props) {
      super(props);
      this.state = {
        rating: `0`,
        comment: ``
      };
      this._addValueFormChangeHandler = this._addValueFormChangeHandler.bind(this);
      this._addReview = this._addReview.bind(this);
    }

    render() {
      const {rating, comment} = this.state;
      return <Component
        {...this.props}
        rating={rating}
        comment={comment}
        addReview = {this._addReview}
        addValueFormChangeHandler={this._addValueFormChangeHandler}
      />;
    }

    _addValueFormChangeHandler(evt, nameInput) {
      this.setState({[nameInput]: evt.target.value});
    }

    _addReview(idHotel, rating, comment) {
      const {addReview} = this.props;
      this.setState({
        rating: `0`,
        comment: ``
      });
      addReview(idHotel, rating, comment);

    }
  }

  WithCommentForm.propTypes = {
    addReview: PropTypes.func,
  };

  const mapDispatchToProps = (dispatch) => ({
    addReview: (idHotel, rating, comment) => {
      dispatch(Operation.addReview(idHotel, rating, comment));
    }
  });

  return connect(null, mapDispatchToProps)(WithCommentForm);
};


export default withCommentForm;


