import {extend} from "../utils/common";
import {ActionType} from "./action";
import offers from "../mocks/offers";
import {SortType} from "../const";

const DEFAULT_CITY = offers[0].city;
const DEFAULT_SORT_TYPE = SortType.POPULAR;

const initialState = {
  activeCity: DEFAULT_CITY,
  activeSortType: DEFAULT_SORT_TYPE,
  offers,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return extend(state, {
        activeCity: action.payload,
      });
    case ActionType.SELECT_SORT_TYPE:
      return extend(state, {
        activeSortType: action.payload,
      });
    default:
      return state;
  }
};

export default reducer;
