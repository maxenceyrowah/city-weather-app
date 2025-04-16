import { SET_WEATHER, SET_LOADING } from "./actionTypes";

const API_KEY = import.meta.env.VITE_API_WEATHER_KEY;
const API_WEATHER_URL = (city) =>
  `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;

// Action creators
export const setWeather = (data) => ({
  type: SET_WEATHER,
  payload: data,
});

export const setLoading = (loading) => ({
  type: SET_LOADING,
  payload: loading,
});

// Thunk async action
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
