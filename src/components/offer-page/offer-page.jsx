import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import {connect} from "react-redux";

import ReviewsList from "../reviews-list/reviews-list";
import ReviewsForm from "../reviews-form/reviews-form";
import PlacesList from "../places-list/places-list";
import Map from "../map/map";

import withReviewsForm from "../../hocs/with-reviews-form/with-reviews-form";
import withPlacesList from "../../hocs/with-places-list/with-places-list";

import offers from "../../mocks/offers";
import reviews from "../../mocks/reviews";

import {ActionCreator} from "../../store/action";
import {getActiveCity, getHoveredOfferID} from "../../store/selectors";

const ReviewsFormWrapped = withReviewsForm(ReviewsForm);
const PlacesListWrapped = withPlacesList(PlacesList);

const OfferPage = (props) => {
  const {match, hoveredOfferID, activeCity, setHoveredOfferID} = props;

  const id = match.params.id;
  const offer = offers[id];
  const offersNear = offers.filter((item) => item.id !== offer.id).slice(0, 3);

  return (
    <div className="page">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Link to="/" className="header__logo-link">
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

      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <div className="property__gallery">
              {offer.photos.map((photo, index) => (
                <div className="property__image-wrapper" key={index}>
                  <img
                    className="property__image"
                    src={photo}
                    alt="Photo studio"
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="property__container container">
            <div className="property__wrapper">
              {offer.isPremium ? (
                <div className="property__mark">
                  <span>Premium</span>
                </div>
              ) : null}
              <div className="property__name-wrapper">
                <h1 className="property__name">{offer.title}</h1>
                <button
                  className="property__bookmark-button button"
                  type="button"
                >
                  <svg
                    className="property__bookmark-icon"
                    width="31"
                    height="33"
                  >
                    <use xlinkHref="#icon-bookmark"></use>
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={{width: `80%`}}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">
                  {offer.rating}
                </span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  {offer.type}
                </li>
                <li className="property__feature property__feature--bedrooms">
                  {offer.bedroomsNum}&nbsp;
                  {offer.bedroomsNum > 1 ? `Bedrooms` : `Bedroom`}
                </li>
                <li className="property__feature property__feature--adults">
                  Max {offer.guestsMaxNum}&nbsp;
                  {offer.guestsMaxNum > 1 ? `adults` : `adult`}
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">€{offer.price}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <div className="property__inside">
                <h2 className="property__inside-title">What&apos;s inside</h2>
                <ul className="property__inside-list">
                  {offer.facilities.map((facility, index) =>
                    facility.isAvailable ? (
                      <li className="property__inside-item" key={index}>
                        {facility.type}
                      </li>
                    ) : null
                  )}
                </ul>
              </div>
              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <div className="property__host-user user">
                  {offer.host.isSuper ? (
                    <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                      <img
                        className="property__avatar user__avatar"
                        src={offer.host.avatar}
                        width="74"
                        height="74"
                        alt="Host avatar"
                      />
                    </div>
                  ) : (
                    <div className="property__avatar-wrapper user__avatar-wrapper">
                      <img
                        className="property__avatar user__avatar"
                        src={offer.host.avatar}
                        width="74"
                        height="74"
                        alt="Host avatar"
                      />
                    </div>
                  )}
                  <span className="property__user-name">{offer.host.name}</span>
                </div>
                <div className="property__description">
                  <p className="property__text">{offer.description}</p>
                  <p className="property__text">{offer.description}</p>
                </div>
              </div>
              <section className="property__reviews reviews">
                <ReviewsList reviews={reviews} offer={offer} />
                <ReviewsFormWrapped />
              </section>
            </div>
          </div>
          <Map
            offers={offersNear}
            className={`property__map`}
            hoveredOfferID={hoveredOfferID}
            activeCity={activeCity}
          />
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">
              Other places in the neighbourhood
            </h2>
            <PlacesListWrapped
              offers={offersNear}
              cardClassName={`near-places__card`}
              imageClassName={`near-places__image-wrapper`}
              listClassName={`near-places__list`}
              setHoveredOfferID={setHoveredOfferID}
            />
          </section>
        </div>
      </main>
    </div>
  );
};

OfferPage.propTypes = {
  match: PropTypes.object.isRequired,
  activeCity: PropTypes.object.isRequired,
  setHoveredOfferID: PropTypes.func.isRequired,
  hoveredOfferID: PropTypes.number,
};

const mapStateToProps = (state) => ({
  activeCity: getActiveCity(state),
  hoveredOfferID: getHoveredOfferID(state),
});

const mapDispatchToProps = (dispatch) => ({
  setHoveredOfferID(id) {
    dispatch(ActionCreator.setHoveredOfferID(id));
  },
});

export {OfferPage};
export default connect(mapStateToProps, mapDispatchToProps)(OfferPage);
