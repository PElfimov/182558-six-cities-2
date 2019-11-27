import React from "react";
import PropTypes from "prop-types";
import classNames from 'classnames';


export default function BookmarkButton(props) {
  const {isBookmarkAdded, onClick} = props;

  return (
    <button className={
      classNames(
          `place-card__bookmark-button `,
          `button`,
          {"place-card__bookmark-button--active": isBookmarkAdded}
      )}
    type="button"
    onClick={onClick}>
      <svg className="place-card__bookmark-icon" width="18" height="19">
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">To bookmarks</span>
    </button>

  );
}

BookmarkButton.propTypes = {
  isBookmarkAdded: PropTypes.bool,
  onClick: PropTypes.func.isRequired
};
