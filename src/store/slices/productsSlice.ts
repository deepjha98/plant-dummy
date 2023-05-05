import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

type InitialState = {
  products: any | [];
  loading: boolean;
  error: unknown;
};
const initialState: InitialState = {
  products: [],
  loading: false,
  error: "",
};

export const fetchProducts = createAsyncThunk("product/fetchProducts", () =>
  axios
    .get("http://localhost:9000/plantae/products")
    .then((response): any[] => {
      return response.data.data;
    })
);

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProducts: (state, action: PayloadAction<[]>) => {
      state.products = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.loading = false;
      state.products = action?.payload;
    });
    builder.addCase(fetchProducts.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export default productsSlice.reducer;
export const { addProducts } = productsSlice.actions;
