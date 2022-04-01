import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const CounterSlice = createSlice({
  name: "counter",
  initialState: [],
  reducers: {
    incrementer(state) {
      //immer makes it immutable
      state.value++;
    },
  },
});

export const { incrementer } = CounterSlice.actions;
export default CounterSlice.reducer;
