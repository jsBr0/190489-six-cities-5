const ActionType = {
  CHANGE_CITY: `CHANGE_CITY`,
  SELECT_SORT_TYPE: `SELECT_SORT_TYPE`,
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
};

export {ActionType, ActionCreator};
