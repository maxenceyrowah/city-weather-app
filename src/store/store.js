import { configureStore } from "@reduxjs/toolkit";

import weatherReducer from "../slices/WeatherSlice";
import { thunk } from "redux-thunk";

const globaStore = configureStore({
  reducer: { weather: weatherReducer },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});

export default globaStore;
