import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import {connect} from "react-redux";

import PlacesList from "../places-list/places-list";
import CitiesList from "../cities-list/cities-list";
import Sorting from "../sorting/sorting";
import Map from "../map/map";
import MainEmpty from "../main-empty/main-empty";

import withPlacesList from "../../hocs/with-places-list/with-places-list";

import {ActionCreator} from "../../store/action";
import {
  getActiveCity,
  getOffersCitiesList,
  getOffersBySortType,
  getActiveSortType,
  getHoveredOfferID,
} from "../../store/selectors";

import {OfferPropTypes} from "../../utils/prop-types";

const PlacesListWrapped = withPlacesList(PlacesList);

const Main = (props) => {
  const {
    cities,
    activeCity,
    changeCity,
    offers,
    sortOffersBy,
    activeSortType,
    setHoveredOfferID,
    hoveredOfferID,
  } = props;

  const isOffersAvailable = offers.length > 0;
  const mainEmptyClass = !isOffersAvailable ? `page__main--index-empty` : ``;

  return (
    <div className="page page--gray page--main">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Link
                to="/"
                className="header__logo-link header__logo-link--active"
              >
                <img
                  className="header__logo"
                  src="img/logo.svg"
                  alt="6 cities logo"
                  width="81"
                  height="41"
                />
              </Link>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <a
                    className="header__nav-link header__nav-link--profile"
                    href="#"
                  >
                    <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                    <span className="header__user-name user__name">
                      Oliver.conner@gmail.com
                    </span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className={`page__main page__main--index ${mainEmptyClass}`}>
        <h1 className="visually-hidden">Cities</h1>
        <CitiesList
          cities={cities}
          activeCity={activeCity}
          changeCity={changeCity}
        />
        <div className="cities">
          {isOffersAvailable ? (
            <div className="cities__places-container container">
              <section className="cities__places places">
                <h2 className="visually-hidden">Places</h2>
                <b className="places__found">
                  {offers.length}&nbsp;
                  {offers.length > 1 ? `places` : `place`} to stay in{` `}
                  {activeCity.name}
                </b>
                <Sorting
                  sortOffersBy={sortOffersBy}
                  activeSortType={activeSortType}
                />
                <PlacesListWrapped
                  offers={offers}
                  cardClassName={`cities__place-card`}
                  imageClassName={`cities__image-wrapper`}
                  listClassName={`cities__places-list tabs__content`}
                  setHoveredOfferID={setHoveredOfferID}
                />
              </section>
              <div className="cities__right-section">
                <Map
                  offers={offers}
                  className={`cities__map`}
                  hoveredOfferID={hoveredOfferID}
                  activeCity={activeCity}
                />
              </div>
            </div>
          ) : (
            <MainEmpty />
          )}
        </div>
      </main>
    </div>
  );
};

Main.propTypes = {
  cities: PropTypes.array.isRequired,
  activeCity: PropTypes.object.isRequired,
  changeCity: PropTypes.func.isRequired,
  offers: PropTypes.arrayOf(OfferPropTypes).isRequired,
  sortOffersBy: PropTypes.func.isRequired,
  activeSortType: PropTypes.string.isRequired,
  setHoveredOfferID: PropTypes.func.isRequired,
  hoveredOfferID: PropTypes.number,
};

const mapStateToProps = (state) => ({
  cities: getOffersCitiesList(state),
  activeCity: getActiveCity(state),
  offers: getOffersBySortType(state),
  activeSortType: getActiveSortType(state),
  hoveredOfferID: getHoveredOfferID(state),
});

const mapDispatchToProps = (dispatch) => ({
  changeCity(city) {
    dispatch(ActionCreator.changeCity(city));
  },
  sortOffersBy(type) {
    dispatch(ActionCreator.sortOffersBy(type));
  },
  setHoveredOfferID(id) {
    dispatch(ActionCreator.setHoveredOfferID(id));
  },
});

export {Main};
export default connect(mapStateToProps, mapDispatchToProps)(Main);
