import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";

import {ActionCreator} from "../../store/action";
import {cities} from "../../const";

const CitiesList = (props) => {
  const {activeCity, changeCity, getOffersList} = props;

  const handleCityClick = (evt, city) => {
    evt.preventDefault();
    changeCity(city);
    getOffersList(city);
  };

  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {cities.map((city, id) => (
            <li className="locations__item" key={id}>
              <a
                className={`locations__item-link tabs__item ${activeCity === city && `tabs__item--active`}`}
                onClick={(evt) => handleCityClick(evt, city)}
                href="#"
              >
                <span>{city}</span>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

CitiesList.propTypes = {
  activeCity: PropTypes.string.isRequired,
  changeCity: PropTypes.func.isRequired,
  getOffersList: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  activeCity: state.activeCity,
  offers: state.offers
});

const mapDispatchToProps = (dispatch) => ({
  changeCity(city) {
    dispatch(ActionCreator.changeCity(city));
  },
  getOffersList(city) {
    dispatch(ActionCreator.getOffersList(city));
  }
});

export {CitiesList};
export default connect(mapStateToProps, mapDispatchToProps)(CitiesList);
