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
        disabledTextArea: ``,
        errorResponse: false
      };
      this._addValueFormChangeHandler = this._addValueFormChangeHandler.bind(this);
      this._addReview = this._addReview.bind(this);
      this._checkDisabledButton = this._checkDisabledButton.bind(this);
      this.addResponseErr = this.addResponseErr.bind(this);
      this.unblockedForm = this.unblockedForm.bind(this);
    }

    componentDidUpdate() {
      this._checkDisabledButton();
    }


    render() {
      const {rating, comment, disabledButton, disabledInput, disabledTextArea, errorResponse} = this.state;
      return <Component
        {...this.props}
        rating={rating}
        comment={comment}
        disabledButton={disabledButton}
        disabledInput= {disabledInput}
        disabledTextArea={disabledTextArea}
        errorResponse = {errorResponse}
        addReview={this._addReview}
        addValueFormChangeHandler={this._addValueFormChangeHandler}
      />;
    }

    _checkDisabledButton() {
      const {comment, rating, disabledTextArea} = this.state;
      if (rating !== `0` && comment.length >= 50 && comment.length <= 300 && disabledTextArea === ``) {
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
        disabledButton: `disabled`,
        disabledInput: `disabled`,
        disabledTextArea: `disabled`,
      });
      addReview(idHotel, rating, comment, this.unblockedForm, this.addResponseErr);

    }

    unblockedForm() {
      this.setState({
        rating: `0`,
        comment: ``,
        disabledInput: ``,
        disabledTextArea: ``,
      });

    }

    addResponseErr() {
      this.setState({
        errorResponse: true,
      });

    }
  }

  WithCommentForm.propTypes = {
    addReview: PropTypes.func,
  };


  return WithCommentForm;
};

const mapDispatchToProps = (dispatch) => ({
  addReview: (idHotel, rating, comment, unblockedForm, addResponseErr) => {
    dispatch(Operation.addReview(idHotel, rating, comment, unblockedForm, addResponseErr));
  }
});

const composedHoc = compose(
    connect(null, mapDispatchToProps),
    withCommentForm
);

export {withCommentForm};
export default composedHoc;


