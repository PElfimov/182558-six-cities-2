import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {compose} from "redux";
import PropTypes from 'prop-types';

import Operation from './../../store/actions/async-actions/async-actions';
const withCommentForm = (Component) => {
  class WithCommentForm extends PureComponent {
    constructor(props) {
      super(props);
      this.state = {
        rating: `0`,
        comment: ``,
        disabledButton: `disabled`,
        disabledInput: ``,
        disabledTextAea: ``,
      };
      this._addValueFormChangeHandler = this._addValueFormChangeHandler.bind(this);
      this._addReview = this._addReview.bind(this);
      this._checkDisabledButton = this._checkDisabledButton.bind(this);
    }

    componentDidUpdate() {
      this._checkDisabledButton();
    }


    render() {
      const {rating, comment, disabledButton, disabledInput, disabledTextAea, errorResponse} = this.state;
      return <Component
        {...this.props}
        rating={rating}
        comment={comment}
        disabledButton={disabledButton}
        disabledInput= {disabledInput}
        disabledTextAea={disabledTextAea}
        errorResponse = {errorResponse}
        addReview={this._addReview}
        addValueFormChangeHandler={this._addValueFormChangeHandler}
      />;
    }

    _checkDisabledButton() {
      const {comment, rating} = this.state;
      if (rating !== `0` && comment.length >= 50 && comment.length <= 300) {
        this.setState({disabledButton: ``});
      } else {
        this.setState({disabledButton: `disabled`});
      }
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


  return WithCommentForm;
};

const mapDispatchToProps = (dispatch) => ({
  addReview: (idHotel, rating, comment) => {
    dispatch(Operation.addReview(idHotel, rating, comment));
  }
});

const composedHoc = compose(
    connect(null, mapDispatchToProps),
    withCommentForm
);

export {withCommentForm};
export default composedHoc;


