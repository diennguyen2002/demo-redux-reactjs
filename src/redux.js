import { createStore } from "redux";
import { actionToggleStatus, actionChangeSort } from "./actions/index";
import reducer from "./reducers/index";

const store = createStore(reducer);

// Default
console.log("DEFAULT", store.getState());

// toggle status
store.dispatch(actionToggleStatus());
console.log("TOGGLE_STATUS", store.getState());

//change sort
store.dispatch(actionChangeSort({ by: "name", value: -1 }));
console.log("CHANGE_SORT", store.getState());
