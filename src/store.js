import { configureStore } from "@reduxjs/toolkit";

import patientReducer from "./slices/patientSlice";
const store = configureStore({
  reducer: {
    patients:patientReducer,
    wards:[],
  },
});

export default store;
