import React from "react";

import {SortingPropTypes} from "../../utils/prop-types";

import {SortType} from "../../const";

export default class Sorting extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeClass: false,
    };

    this._handleToggleActiveClass = this._handleToggleActiveClass.bind(this);
    this._handleListOpen = this._handleListOpen.bind(this);
    this._handleSelectSortType = this._handleSelectSortType.bind(this);
  }

  _handleToggleActiveClass() {
    this.setState({
      activeClass: !this.state.activeClass,
    });
  }

  _handleListOpen() {
    this._handleToggleActiveClass();
  }

  _handleSelectSortType(type) {
    const {sortOffersBy} = this.props;
    sortOffersBy(type);

    this._handleToggleActiveClass();
  }

  render() {
    const {activeSortType} = this.props;
    const sortTypes = Object.values(SortType);

    return (
      <form className="places__sorting" action="#" method="get">
        <span className="places__sorting-caption">Sort by </span>
        <span
          className="places__sorting-type"
          tabIndex="0"
          onClick={this._handleListOpen}
        >
          {activeSortType}
          <svg className="places__sorting-arrow" width="7" height="4">
            <use xlinkHref="#icon-arrow-select"></use>
          </svg>
        </span>
        <ul
          className={`places__options places__options--custom ${
            this.state.activeClass && `places__options--opened`
          }`}
        >
          {sortTypes.map((type, index) => (
            <li
              className={`places__option ${
                activeSortType === type && `places__option--active`
              }`}
              tabIndex="0"
              key={index}
              onClick={() => this._handleSelectSortType(type)}
            >
              {type}
            </li>
          ))}
        </ul>
      </form>
    );
  }
}

Sorting.propTypes = SortingPropTypes;
