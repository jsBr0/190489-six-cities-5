import {extend} from "../utils/common";
import {ActionType} from "./action";
import offers from "../mocks/offers";

const DEFAULT_CITY = `Paris`;

const initialState = {
  city: DEFAULT_CITY,
  offers: offers.filter((offer) => offer.city === DEFAULT_CITY)
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return extend(state, {
        city: action.payload
      });
    case ActionType.GET_OFFERS_LIST:
      return extend(state, {
        offers: offers.filter((offer) => offer.city === action.payload)
      });
    default:
      return state;
  }
};

export default reducer;
