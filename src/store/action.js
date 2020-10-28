const ActionType = {
  CHANGE_CITY: `CHANGE_CITY`,
  FILTER_OFFERS_LIST: `GET_OFFERS_LIST`
};

const ActionCreator = {
  changeCity: (city) => {
    return ({
      type: ActionType.CHANGE_CITY,
      payload: city
    });
  }
};

export {ActionType, ActionCreator};
