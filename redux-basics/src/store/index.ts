import { createSlice, configureStore } from "@reduxjs/toolkit";

export interface CountState {
  count: number;
  amount: number;
}

const initialState: CountState = {
  count: 0,
  amount: 1,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment(state) {
      state.count = state.count + state.amount;
    },
    decrement(state) {
      state.count = state.count - state.amount;
    },
    setAmount(state, action: { type: string; payload: number }) {
      state.amount = action.payload;
    },
  },
});

const store = configureStore({
  reducer: counterSlice.reducer,
});

export const counterActions = counterSlice.actions;
export default store;
