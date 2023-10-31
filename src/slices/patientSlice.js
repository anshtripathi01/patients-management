import { createSlice } from "@reduxjs/toolkit";
import { addPatient, editPatient, fetchPatients } from "../services/patientServices";
const initialState = {
  patients: [],
};

const patientSlice = createSlice({
  name: "patients",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPatients.fulfilled, (state, action) => {
      state.patients = action.payload;
    });
    builder.addCase(addPatient.fulfilled, (state, action) => {
      state.patients = [...state.patients, action.payload];
    });
    builder.addCase(editPatient.fulfilled, (state, action) => {
      return state;
    });
  },
});

export default patientSlice.reducer;
