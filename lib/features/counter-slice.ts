import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 0,
};

const counterSlice = createSlice({
  name: "Counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value++;
    },
    amountAdd: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
});

export const { increment, amountAdd } = counterSlice.actions;
export default counterSlice.reducer;
