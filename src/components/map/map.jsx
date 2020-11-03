import React from "react";
import PropTypes from "prop-types";

import {OfferPropTypes} from "../../utils/prop-types";

import leaflet from "leaflet";
import "leaflet/dist/leaflet.css";

class Map extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  _createMap() {
    const {offers, hoveredOfferID} = this.props;

    const defaults = [52.38333, 4.9];

    const inactivePin = leaflet.icon({
      iconUrl: `img/pin.svg`,
      iconSize: [30, 30],
    });

    const activePin = leaflet.icon({
      iconUrl: `img/pin-active.svg`,
      iconSize: [30, 30],
    });

    const zoom = 12;
    this.map = leaflet.map(`map`, {
      center: defaults,
      zoom,
      zoomControl: false,
      marker: true,
    });
    this.map.setView(defaults, zoom);

    leaflet
      .tileLayer(
          `https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`,
          {
            attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`,
          }
      )
      .addTo(this.map);

    offers.forEach((offer) => {
      const icon = offer.id === hoveredOfferID ? activePin : inactivePin;
      leaflet.marker(offer.coordinates, {icon}).addTo(this.map);
    });
  }

  componentDidMount() {
    this._createMap();
  }

  componentDidUpdate() {
    this.map.remove();
    this._createMap();
  }

  render() {
    const {className} = this.props;

    return <section className={`${className} map`} id="map"></section>;
  }
}

Map.propTypes = {
  offers: PropTypes.arrayOf(OfferPropTypes).isRequired,
  className: PropTypes.string.isRequired,
  hoveredOfferID: PropTypes.number,
};

export default Map;
