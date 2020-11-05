import React from "react";
import PropTypes from "prop-types";

const CitiesList = (props) => {
  const {cities, activeCity, changeCity} = props;

  const citiesList = Object.values(cities);

  const handleCityClick = (evt, city) => {
    evt.preventDefault();
    changeCity(city);
  };

  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {citiesList.map((city, id) => (
            <li className="locations__item" key={id}>
              <a
                className={`locations__item-link tabs__item ${
                  activeCity.name === city.name && `tabs__item--active`
                }`}
                onClick={(evt) => handleCityClick(evt, city)}
                href="#"
              >
                <span>{city.name}</span>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

CitiesList.propTypes = {
  cities: PropTypes.object.isRequired,
  activeCity: PropTypes.object.isRequired,
  changeCity: PropTypes.func.isRequired,
};

export default CitiesList;
