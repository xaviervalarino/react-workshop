import { createSlice } from "@reduxjs/toolkit";

const initialState = {
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

export default counterSlice.reducer
export const counterActions = counterSlice.actions;
