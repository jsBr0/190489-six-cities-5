import React, {PureComponent} from "react";
import PropTypes from "prop-types";

import PlaceCard from "../place-card/place-card";

import {OfferPropTypes} from "../../utils/prop-types";

export default class PlacesList extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      active: null,
    };
  }

  render() {
    const {offers, cardClassName, imageClassName, listClassName} = this.props;

    return (
      <div className={`${listClassName} places__list`}>
        {offers.map((offer) => (
          <PlaceCard
            key={offer.id}
            offer={offer}
            onCardHover={() => {
              this.setState({
                active: offer
              });
            }}
            cardClassName={cardClassName}
            imageClassName={imageClassName}
          />
        ))}
      </div>
    );
  }
}

PlacesList.propTypes = {
  offers: PropTypes.arrayOf(OfferPropTypes).isRequired,
  cardClassName: PropTypes.string.isRequired,
  imageClassName: PropTypes.string.isRequired,
  listClassName: PropTypes.string.isRequired,
};
