import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type InitialState = {
  isLoggedIn: boolean;
};
const initialState: InitialState = {
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginUser: (state, action: PayloadAction<[]>) => {
      state.isLoggedIn = true;
    },
  },
});

export default authSlice.reducer;
export const { loginUser } = authSlice.actions;
