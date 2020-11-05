import React from "react";
import PropTypes from "prop-types";

import {OfferPropTypes} from "../../utils/prop-types";

const PlaceCard = (props) => {
  const {offer = {}, cardClassName, imageClassName, setHoveredOfferID} = props;

  return (
    <article
      className={`${cardClassName} place-card`}
      onMouseOver={(evt) => {
        evt.preventDefault();
        setHoveredOfferID(offer.id);
      }}
      onMouseOut={(evt) => {
        evt.preventDefault();
        setHoveredOfferID(null);
      }}
    >
      {offer.isPremium ? (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      ) : null}
      <div className={`${imageClassName} place-card__image-wrapper`}>
        <a href="#">
          <img
            className="place-card__image"
            src={offer.photos[0]}
            width="260"
            height="200"
            alt="Place image"
          />
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">€{offer.price}</b>
            <span className="place-card__price-text">/&nbsp;night</span>
          </div>
          <button className="place-card__bookmark-button button" type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `80%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href="#">{offer.title}</a>
        </h2>
        <p className="place-card__type">{offer.type}</p>
      </div>
    </article>
  );
};

PlaceCard.propTypes = {
  offer: OfferPropTypes,
  cardClassName: PropTypes.string.isRequired,
  imageClassName: PropTypes.string.isRequired,
  setHoveredOfferID: PropTypes.func.isRequired,
};

export default PlaceCard;
