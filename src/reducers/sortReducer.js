import * as types from "../constants/index";

let intialState = {
  by: "name",
  value: 1 // 1: A-Z ;  -1 : Z-A
};

const sortReducer = (state = intialState, action) => {
  if (action.type === types.CHANGE_SORT) {
    return {
      by: action.sort.by,
      value: action.sort.value
    };
  }
  return state;
};

export default sortReducer;
