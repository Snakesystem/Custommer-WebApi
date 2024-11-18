import { createSlice } from "@reduxjs/toolkit";

// Slice untuk session
export const sessionSlice = createSlice({
    name: 'session',
    initialState: { result: false, message: "" },
    reducers: {
      login: (state) => {
        state.result = true;
      },
      logout: (state) => {
        state.result = false;
      },
    },
});

// Ekspor actions dan reducer
export const { login, logout } = sessionSlice.actions;