import React from "react";
import PropTypes from "prop-types";

import PlaceCard from "../place-card/place-card";

import {OfferPropTypes} from "../../utils/prop-types";

const PlacesList = (props) => {
  const {
    offers,
    cardClassName,
    imageClassName,
    listClassName,
    setHoveredOfferID,
  } = props;

  return (
    <div className={`${listClassName} places__list`}>
      {offers.map((offer) => (
        <PlaceCard
          key={offer.id}
          offer={offer}
          setHoveredOfferID={setHoveredOfferID}
          cardClassName={cardClassName}
          imageClassName={imageClassName}
        />
      ))}
    </div>
  );
};

PlacesList.propTypes = {
  offers: PropTypes.arrayOf(OfferPropTypes).isRequired,
  cardClassName: PropTypes.string.isRequired,
  imageClassName: PropTypes.string.isRequired,
  listClassName: PropTypes.string.isRequired,
  setHoveredOfferID: PropTypes.func.isRequired,
};

export default PlacesList;
