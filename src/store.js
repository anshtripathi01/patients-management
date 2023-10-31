import { configureStore } from "@reduxjs/toolkit";

// import teacherReducer from "./slices/teacherSlice";
const store = configureStore({
  reducer: {
    patients:[],
    wards:[],
  },
});

export default store;
