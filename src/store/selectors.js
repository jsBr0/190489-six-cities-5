export const getActiveCity = (state) => state.activeCity;

export const getActiveCityOffers = (state) => {
  const {activeCity, offers} = state;
  return offers.filter((offer) => offer.city === activeCity);
};

export const getOffersCitiesList = (state) => {
  const {offers} = state;
  let cities = new Set();
  offers.forEach((offer) => cities.add(offer.city));
  return Array.from(cities);
};
