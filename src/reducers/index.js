import statusReducer from "./statusReducer";
import sortReducer from "./sortReducer";

import { combineReducers } from "redux";

const reducer = combineReducers({
  status: statusReducer,
  sort: sortReducer
});

export default reducer;
