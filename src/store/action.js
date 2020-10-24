const ActionType = {
  CHANGE_CITY: `CHANGE_CITY`,
  GET_OFFERS_LIST: `GET_OFFERS_LIST`
};

const ActionCreator = {
  changeCity: (city) => {
    return ({
      type: ActionType.CHANGE_CITY,
      payload: city
    });
  },
  getOffersList: (city) => {
    return ({
      type: ActionType.GET_OFFERS_LIST,
      payload: city
    });
  }
};

export {ActionType, ActionCreator};
