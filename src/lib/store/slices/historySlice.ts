import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface HistoryState {
  cities: string[];
  maxHistorySize: number;
}

const initialState: HistoryState = {
  cities: [],
  maxHistorySize: 10,
};

export const historySlice = createSlice({
  name: "history",
  initialState,
  reducers: {
    addCityToHistory: (state, action: PayloadAction<string>) => {
      const city = action.payload.trim().toLowerCase();

      // Supprimer la ville si elle existe déjà
      state.cities = state.cities.filter((c) => c.toLowerCase() !== city);

      // Ajouter en première position
      state.cities.unshift(action.payload.trim());

      // Limiter la taille de l'historique
      if (state.cities.length > state.maxHistorySize) {
        state.cities = state.cities.slice(0, state.maxHistorySize);
      }
    },
    removeCityFromHistory: (state, action: PayloadAction<string>) => {
      state.cities = state.cities.filter((city) => city !== action.payload);
    },
    clearHistory: (state) => {
      state.cities = [];
    },
    loadHistoryFromStorage: (state, action: PayloadAction<string[]>) => {
      state.cities = action.payload;
    },
  },
});

export const {
  addCityToHistory,
  removeCityFromHistory,
  clearHistory,
  loadHistoryFromStorage,
} = historySlice.actions;
