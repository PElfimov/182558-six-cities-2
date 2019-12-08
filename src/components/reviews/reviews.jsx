import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import ReviewsList from './reviews-list/reviews-list';
import Operation from '../../store/actions/async-actions/async-actions';
import withCommentForm from '../../hocs/with-comment-form/with-comment-form';
import CommentForm from './comment-form/comment-form';

const CommentFormWrapped = withCommentForm(CommentForm);

// https://github.com/htmlacademy-react/508859-six-cities-2/blob/master/src/components/detail-info/detail-info.jsx
const Reviews = (props) => {
  const {reviews, loadReviews, id, isAuthorizationRequired} = props;
  loadReviews(id);
  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
      <ReviewsList reviews={reviews}/>
      {isAuthorizationRequired && <CommentFormWrapped idHotel={id} />}
    </section>
  );
};

Reviews.propTypes = {
  reviews: PropTypes.arrayOf(PropTypes.exact({
    id: PropTypes.number,
    user: PropTypes.exact({
      name: PropTypes.string,
      id: PropTypes.number,
      isPro: PropTypes.bool,
      avatar: PropTypes.string
    }),
    rating: PropTypes.number,
    comment: PropTypes.string,
    date: PropTypes.string})
  ).isRequired,
  loadReviews: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  isAuthorizationRequired: PropTypes.bool
};


const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  offers: state.externalData.offers,
  reviews: state.externalData.reviews,
  isAuthorizationRequired: state.externalData.isAuthorizationRequired,
});

const mapDispatchToProps = (dispatch) => ({
  loadReviews: (idHotel) => dispatch(Operation.loadReviews(idHotel)),

});

export {Reviews};

export default connect(mapStateToProps, mapDispatchToProps)(Reviews);
