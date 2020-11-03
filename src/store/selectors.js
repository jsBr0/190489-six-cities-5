import {SortType} from "../const";

const getActiveCity = (state) => state.activeCity;

const getActiveCityOffers = (state) => {
  const {activeCity, offers} = state;
  return offers.filter((offer) => offer.city === activeCity);
};

const getOffersCitiesList = (state) => {
  const {offers} = state;
  let cities = new Set();
  offers.forEach((offer) => cities.add(offer.city));
  return Array.from(cities);
};

const getActiveSortType = (state) => state.activeSortType;

const getOffersBySortType = (state) => {
  const {activeSortType} = state;
  const offers = getActiveCityOffers(state);

  switch (activeSortType) {
    case SortType.POPULAR:
      return offers;
    case SortType.PRICE_LOW_TO_HIGH:
      return offers.slice().sort((a, b) => a.price - b.price);
    case SortType.PRICE_HIGH_TO_LOW:
      return offers.slice().sort((a, b) => b.price - a.price);
    case SortType.TOP_RATED_FIRST:
      return offers.slice().sort((a, b) => b.rating - a.rating);
    default:
      return offers;
  }
};

const getHoveredOfferID = (state) => state.hoveredOfferID;

export {
  getActiveCity,
  getActiveCityOffers,
  getOffersCitiesList,
  getActiveSortType,
  getOffersBySortType,
  getHoveredOfferID,
};
