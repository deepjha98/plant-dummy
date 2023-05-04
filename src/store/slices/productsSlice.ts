import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type InitialState = {
  products: [];
};
const initialState: InitialState = {
  products: [],
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProducts: (state, action: PayloadAction<[]>) => {
      state.products = action.payload;
    },
  },
});

export default productsSlice.reducer;
export const { addProducts } = productsSlice.actions;
