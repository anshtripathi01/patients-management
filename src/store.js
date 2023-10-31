import { configureStore } from "@reduxjs/toolkit";
import patientReducer from "./slices/patientSlice";
import wardReducer from "./slices/wardSlice";
const store = configureStore({
  reducer: {
    patients:patientReducer,
    wards:wardReducer,
  },
});

export default store;
