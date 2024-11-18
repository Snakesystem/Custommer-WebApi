import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Slice untuk counter
export const counterSlice = createSlice({
    name: 'counter',
    initialState: { value: 0 },
    reducers: {
      increment: (state) => {
        state.value += 1;
      },
      decrement: (state) => {
        state.value -= 1;
      },
      incrementByAmount: (state, action: PayloadAction<number>) => {
        state.value += action.payload;
      },
    },
});

// Ekspor actions dan reducer
export const { increment, decrement, incrementByAmount } = counterSlice.actions;