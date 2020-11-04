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

    const ACTIVE_PIN_URL = `img/pin-active.svg`;
    const INACTIVE_PIN_URL = `img/pin.svg`;

    this.inactivePin = leaflet.icon({
      iconUrl: INACTIVE_PIN_URL,
      iconSize: [30, 30],
    });

    this.activePin = leaflet.icon({
      iconUrl: ACTIVE_PIN_URL,
      iconSize: [30, 30],
    });

    this.map = leaflet.map(`map`, {
      zoomControl: false,
      marker: true,
    });

    leaflet
      .tileLayer(
          `https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`,
          {
            attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`,
          }
      )
      .addTo(this.map);

    this.markersLayer = leaflet.layerGroup().addTo(this.map);

    offers.forEach((offer) => {
      const icon =
        offer.id === hoveredOfferID ? this.activePin : this.inactivePin;
      leaflet.marker(offer.coordinates, {icon}).addTo(this.markersLayer);
    });
  }

  _renderPins() {
    const {offers, hoveredOfferID} = this.props;
    this.markersLayer.clearLayers();

    offers.forEach((offer) => {
      const icon =
        offer.id === hoveredOfferID ? this.activePin : this.inactivePin;
      leaflet.marker(offer.coordinates, {icon}).addTo(this.markersLayer);
    });
  }

  _positionMap() {
    const {latitude, longitude, zoom} = this.props.activeCity.location;
    this.map.setView([latitude, longitude], zoom);
  }

  componentDidMount() {
    this._createMap();
    this._positionMap();
  }

  componentDidUpdate(prevProps) {
    this._renderPins();

    if (this.props.activeCity.name !== prevProps.activeCity.name) {
      this._positionMap();
    }
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
  activeCity: PropTypes.object.isRequired,
};

export default Map;
