import { createStore } from "redux";
import { Action } from "redux";

export interface CountState {
  count: number
}

const countReducer = (state: CountState = { count: 0 }, action: Action) => {
  if (action.type === "increment") {
    return { count: state.count + 1 };
  }
  if (action.type === "decrement") {
    return { count: state.count - 1 };

  }
  return state;
};
const store = createStore(countReducer);

export default store;
