import { createStore } from "redux";

export interface CountState {
  count: number;
  amount: number;
}

interface Action {
  readonly type: string;
  readonly amount: number;
}

const initial: CountState = {
  count: 0,
  amount: 1,
};

const countReducer = (state: CountState = initial, action: Action) => {
  if (action.type === "increment") {
    return { ...state, count: state.count + state.amount};
  }
  if (action.type === "decrement") {
    return { ...state, count: state.count - state.amount};
  }
  if (action.type === "change_amount") {
    return { ...state, amount: +action.amount}
  }
  return state;
};

const store = createStore(countReducer);

export default store;
