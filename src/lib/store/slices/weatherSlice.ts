import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { WeatherData, WeatherError } from "@/types/weather";

interface WeatherState {
  data: WeatherData | null;
  loading: boolean;
  error: string | null;
  lastSearchedCity: string | null;
}

const initialState: WeatherState = {
  data: null,
  loading: false,
  error: null,
  lastSearchedCity: null,
};

// Async thunk pour récupérer la météo
export const fetchWeatherData = createAsyncThunk<
  WeatherData,
  string,
  { rejectValue: WeatherError }
>("weather/fetchWeatherData", async (city: string, { rejectWithValue }) => {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}&units=metric&lang=fr`
    );

    if (!response.ok) {
      throw new Error(`Erreur ${response.status}: ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    return rejectWithValue({
      message: error instanceof Error ? error.message : "Erreur inconnue",
      code: "FETCH_ERROR",
    });
  }
});

export const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {
    clearWeatherData: (state) => {
      state.data = null;
      state.error = null;
    },
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchWeatherData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchWeatherData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
        state.lastSearchedCity = action.payload.name;
        state.error = null;
      })
      .addCase(fetchWeatherData.rejected, (state, action) => {
        state.loading = false;
        state.error =
          action.payload?.message ||
          "Erreur lors de la récupération des données";
      });
  },
});

export const { clearWeatherData, clearError } = weatherSlice.actions;
