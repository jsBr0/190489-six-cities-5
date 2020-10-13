import React, {PureComponent} from "react";
import PropTypes from "prop-types";

import PlaceCard from "../place-card/place-card";

import {OfferPropTypes} from "../../utils/prop-types";

class PlacesList extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      active: null,
    };
  }

  render() {
    const {offers} = this.props;

    return (
      <div className="cities__places-list places__list tabs__content">
        {offers.map((offer) => (
          <PlaceCard
            key={offer.id}
            offer={offer}
            onCardHover={() => {
              this.setState({
                active: offer
              });
            }}
          />
        ))}
      </div>
    );
  }
}

PlacesList.propTypes = {
  offers: PropTypes.arrayOf(OfferPropTypes).isRequired,
};

export default PlacesList;
