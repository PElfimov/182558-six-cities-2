import React from "react";
import PropTypes from "prop-types";
import classNames from 'classnames';


export default function BookmarkButton(props) {
  const {isBookmarkAdded, onClick, type = `place-card`} = props;
  const width = type === `place-card` ? 18 : 31;
  const height = type === `place-card` ? 19 : 32;

  return (
    <button className={
      classNames(
          `${type}__bookmark-button `,
          `button`,
          isBookmarkAdded && `${type}__bookmark-button--active`
      )}
    type="button"
    onClick={onClick}>
      <svg className={`place-card__bookmark-icon`} width={width} height={height}>
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">To bookmarks</span>
    </button>

  );
}

BookmarkButton.propTypes = {
  isBookmarkAdded: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
  type: PropTypes.string
};
