import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

class ReviewsItem extends PureComponent {
  render() {
    const {review: {rating, date, comment, user: {avatar, name, isPro}}} = this.props;
    return <li className="reviews__item">
      <div className="reviews__user user">
        <div className={classNames(
            `reviews__avatar-wrapper user__avatar-wrapper`,
            isPro && `reviews__avatar-wrapper--pro`)}>
          <img className="reviews__avatar user__avatar" src={avatar} width="54" height="54" alt="Reviews avatar" />
        </div>
        <span className="reviews__user-name">
          {name}
        </span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{width: rating * 20 + `%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {comment}
        </p>
        <time className="reviews__time" dateTime="2019-04-24">{date}</time>
      </div>
    </li>;
  }
}

ReviewsItem.propTypes = {
  review: PropTypes.shape({
    rating: PropTypes.number.isRequired,
    date: PropTypes.string.isRequired,
    comment: PropTypes.string.isRequired,
    user: PropTypes.shape({
      avatar: PropTypes.string,
      name: PropTypes.string,
      isPro: PropTypes.bool,
    }),
  })
};

export default ReviewsItem;
