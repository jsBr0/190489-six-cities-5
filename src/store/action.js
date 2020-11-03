const ActionType = {
  CHANGE_CITY: `CHANGE_CITY`,
  SELECT_SORT_TYPE: `SELECT_SORT_TYPE`,
  SET_HOVERED_OFFER_ID: `SET_HOVERED_OFFER_ID:`,
};

const ActionCreator = {
  changeCity: (city) => {
    return {
      type: ActionType.CHANGE_CITY,
      payload: city,
    };
  },
  sortOffersBy: (type) => {
    return {
      type: ActionType.SELECT_SORT_TYPE,
      payload: type,
    };
  },
  setHoveredOfferID: (id) => {
    return {
      type: ActionType.SET_HOVERED_OFFER_ID,
      payload: id,
    };
  },
};

export {ActionType, ActionCreator};
