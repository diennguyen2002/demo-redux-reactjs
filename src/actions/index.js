import * as types from "../constants/index";

// toggle status
export const actionToggleStatus = () => {
  return {
    type: types.TOGGLE_STATUS
  };
};

//change sort
export const actionChangeSort = (sort) => {
  return {
    type: types.CHANGE_SORT,
    sort
  };
};
