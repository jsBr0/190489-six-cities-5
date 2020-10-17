import React from "react";
import PropTypes from "prop-types";

import {OfferPropTypes} from "../../utils/prop-types";

import leaflet from "leaflet";
import "leaflet/dist/leaflet.css";

export default class Map extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const {offers} = this.props;

    const offersCords = offers.map((offer) => offer.coordinates);

    const city = [52.38333, 4.9];

    const icon = leaflet.icon({
      iconUrl: `img/pin.svg`,
      iconSize: [30, 30],
    });

    const zoom = 12;
    const map = leaflet.map(`map`, {
      center: city,
      zoom,
      zoomControl: false,
      marker: true,
    });
    map.setView(city, zoom);

    leaflet
      .tileLayer(
          `https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`,
          {
            attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`,
          }
      )
      .addTo(map);

    offersCords.forEach((offerCords) =>
      leaflet.marker(offerCords, {icon}).addTo(map)
    );
  }

  render() {
    const {className} = this.props;

    return <section className={`${className} map`} id="map"></section>;
  }
}

Map.propTypes = {
  offers: PropTypes.arrayOf(OfferPropTypes).isRequired,
  className: PropTypes.string
};
