import { createSlice } from "@reduxjs/toolkit";
import { addWard, editWard, fetchWards } from "../services/wardServices";
const initialState = {
  wards: [],
};

const wardSlice = createSlice({
  name: "wards",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchWards.fulfilled, (state, action) => {
      state.wards = action.payload;
    });
    builder.addCase(addWard.fulfilled, (state, action) => {
      state.wards = [...state.wards, action.payload];
    });
    builder.addCase(editWard.fulfilled, (state, action) => {
      return state;
    });
  },
});

export default wardSlice.reducer;
