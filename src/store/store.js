import { configureStore } from "@reduxjs/toolkit";
import { thunk } from "redux-thunk";
import { weatherReducer } from "../redux/old-redux/reducer";

const globaStore = configureStore({
  reducer: { weather: weatherReducer },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});

export default globaStore;
