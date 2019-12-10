// https://github.com/htmlacademy-react/508859-six-cities-2/blob/master/src/constants.js

import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {ActionCreator} from '../../store/actions/action-creator/action-creator';


const SORT_LIST = [
  {
    id: `id0`,
    name: `Popular`
  },
  {
    id: `id1`,
    name: `Price: low to high`
  },
  {
    id: `id2`,
    name: `Price: high to low`
  },
  {
    id: `id3`,
    name: `Top rated first`
  }
];

class SortList extends PureComponent {

  constructor(props) {
    super(props);
    this._handleSortElemClick = this._handleSortElemClick.bind(this);
    this.props.onSortElemClick(`Popular`);
  }

  _handleSortElemClick(name, openSort, changeSort) {
    openSort();
    changeSort(name);
  }

  render() {
    const {activeSortName, onSortElemClick, isSortOpened, onSortListClick} = this.props;
    return <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      &nbsp;
      <span className="places__sorting-type" tabIndex="0" onClick={onSortListClick}>
        {activeSortName}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select" />
        </svg>
      </span>
      <ul className={`places__options places__options--custom ${isSortOpened && `places__options--opened`}`}>
        {SORT_LIST.map((it) => (
          <li
            key={`sort-${it.id}`}
            onClick={() => this._handleSortElemClick(it.name, onSortListClick, onSortElemClick)}
            className={`places__option ${it.name === activeSortName && `places__option--active`}`}
            tabIndex="0">
            {it.name}
          </li>
        ))}
      </ul>
    </form>;
  }
}

SortList.propTypes = {
  isSortOpened: PropTypes.bool.isRequired,
  activeSortName: PropTypes.string.isRequired,
  onSortElemClick: PropTypes.func.isRequired,
  onSortListClick: PropTypes.func.isRequired
};

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  activeSortName: state.localData.activeSortName
});

const mapDispatchToProps = (dispatch) => ({
  onSortElemClick: (sortName) => dispatch(ActionCreator.changeSortName(sortName))
});

export {SortList};

export default connect(mapStateToProps, mapDispatchToProps)(SortList);
