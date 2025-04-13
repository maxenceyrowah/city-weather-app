import { createSlice } from "@reduxjs/toolkit";

const API_KEY = import.meta.env.VITE_API_WEATHER_KEY;
const API_WEATHER_URL = (city) =>
  `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;

const weatherSlice = createSlice({
  name: "weather",
  initialState: { data: {}, loading: false },
  reducers: {
    setWeather: (state, action) => {
      state.data = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export const { setWeather, setLoading } = weatherSlice.actions;

export const fetchWeather = (city) => async (dispatch) => {
  if (!city) {
    alert("Veuillez saisir une ville");
    return;
  }

  dispatch(setLoading(true));
  try {
    const response = await fetch(API_WEATHER_URL(city));
    const data = await response.json();

    dispatch(setWeather(data));
  } catch (error) {
    console.error("Erreur lors de la récupération des données météo :", error);
  } finally {
    dispatch(setLoading(false));
  }
};

export default weatherSlice.reducer;
