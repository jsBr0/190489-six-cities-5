import {extend} from "../utils/common";
import {ActionType} from "./action";
import offers from "../mocks/offers";

const DEFAULT_CITY = offers[0].city;

const initialState = {
  activeCity: DEFAULT_CITY,
  offers
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return extend(state, {
        activeCity: action.payload
      });
    default:
      return state;
  }
};

export default reducer;
