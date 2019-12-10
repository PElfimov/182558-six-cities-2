import React, {PureComponent, Fragment} from 'react';
import PropTypes from 'prop-types';

const nameStarts = [`terribly`, `badly`, `not bad`, `good`, `perfect`];

class CommentForm extends PureComponent {

  constructor(props) {
    super(props);
    this._commentFormSubmitHandler = this._commentFormSubmitHandler.bind(this);
  }

  render() {
    const {
      comment,
      addValueFormChangeHandler,
      rating,
      disabledButton,
      disabledTextAea,
      disabledInput} = this.props;


    return <form className="reviews__form form" action="#" method="post" onSubmit={this._commentFormSubmitHandler}>
      <label
        className="reviews__label form__label"
        htmlFor="review"
      >
        Your review
      </label>
      <div className="reviews__rating-form form__rating">
        { this._getRatingCheck(rating).map((it, index) => (
          <Fragment key={`${index + 1}-stars`}>
            <input
              className="form__rating-input visually-hidden"
              name="rating"
              value={index + 1}
              id={`${index + 1}-stars`}
              type="radio"
              checked={it}
              onChange={(evt) => addValueFormChangeHandler(evt, `rating`)}
              disabled={disabledInput}
            />
            <label
              htmlFor={`${index + 1}-stars`}
              className="reviews__rating-label form__rating-label"
              title={nameStarts[index]}
            >
              <svg
                className="form__star-image"
                width="37"
                height="33"
              >
                <use xlinkHref="#icon-star"></use>
              </svg>
            </label>
          </Fragment>
        )).reverse()
        }
      </div>
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        value={comment}
        onChange={(evt) => addValueFormChangeHandler(evt, `comment`)}
        disabled={disabledTextAea}
      ></textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set{` `}
          <span className="reviews__star">rating</span> and
          describe your stay with at least{` `}
          <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled={disabledButton}
        >
          Submit
        </button>
      </div>
    </form>;
  }

  _commentFormSubmitHandler(evt) {
    evt.preventDefault();
    const {rating, comment, addReview, idHotel} = this.props;
    if (rating !== `0` && comment.length >= 50 && comment.length <= 300) {
      addReview(idHotel, rating, comment);
    }
  }

  _getRatingCheck(rating) {


    const checkArray = [false, false, false, false, false];
    const checkArrayResult = checkArray.map((it, index)=>{
      if (index === (rating - 1)) {
        it = true;
      } else {
        it = false;
      }
      return it;
    });

    return rating === `0` ? checkArray : checkArrayResult;
  }
}

CommentForm.propTypes = {
  rating: PropTypes.string.isRequired,
  comment: PropTypes.string.isRequired,
  addReview: PropTypes.func,
  addValueFormChangeHandler: PropTypes.func.isRequired,
  idHotel: PropTypes.number.isRequired,
  disabledButton: PropTypes.string,
  disabledTextAea: PropTypes.string,
  disabledInput: PropTypes.string

};

export default CommentForm;

