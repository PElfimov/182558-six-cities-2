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
    }

    render() {
      const {rating, comment} = this.state;
      const {addReview} = this.props;
      return <Component
        {...this.props}
        rating={rating}
        comment={comment}
        addReview = {addReview}
        addValueFormChangeHandler={this._addValueFormChangeHandler}
      />;
    }

    _addValueFormChangeHandler(evt, nameInput) {
      this.setState({[nameInput]: evt.target.value});
    }

    // _addReview(idHotel, rating, comment) {
    //   console.log(this.props);

    //   const {addReview} = this.props;
    //   console.log(idHotel, rating, comment);

    //   addReview(idHotel, rating, comment);
    //   this.setState({
    //     rating: 0,
    //     comment: ``
    //   }
    //   );
    // }
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


