import { createSlice } from "@reduxjs/toolkit";
import cartItems from "../../cartItems";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: cartItems,
    amount: 4,
    tottal: 0,
    isLoading: true,
  },
});

export default cartSlice.reducer;
