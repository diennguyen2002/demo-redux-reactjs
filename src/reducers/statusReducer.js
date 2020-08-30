import * as types from "../constants/index";

let intialState = false;

const statusReducer = (state = intialState, action) => {
  if (action.type === types.TOGGLE_STATUS) {
    return !state;
  }
  return state;
};

export default statusReducer;
