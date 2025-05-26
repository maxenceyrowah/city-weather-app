import { configureStore } from '@reduxjs/toolkit'
import { weatherSlice } from './slices/weatherSlice'
import { historySlice } from './slices/historySlice'

export const store = configureStore({
  reducer: {
    weather: weatherSlice.reducer,
    history: historySlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["persist/PERSIST"],
      },
    }),
  devTools: process.env.NODE_ENV !== 'production',
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
