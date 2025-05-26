import { useState, useCallback } from 'react'
import { useAppDispatch, useAppSelector } from './redux'
import { fetchWeatherData, clearWeatherData } from '@/lib/store/slices/weatherSlice'
import { addCityToHistory } from '@/lib/store/slices/historySlice'

export const useWeather = () => {
  const dispatch = useAppDispatch()
  const { data, loading, error, lastSearchedCity } = useAppSelector(state => state.weather)
  const [searchCity, setSearchCity] = useState('')
  
  const searchWeather = useCallback(async (city?: string) => {
    const cityToSearch = city || searchCity.trim()
    
    if (!cityToSearch) {
      return
    }
    
    try {
      const result = await dispatch(fetchWeatherData(cityToSearch)).unwrap()
      
      // Ajouter à l'historique seulement si la requête réussit
      dispatch(addCityToHistory(result.name))
      
      // Sauvegarder dans localStorage
      const currentHistory = JSON.parse(localStorage.getItem('weather-history') || '[]')
      const updatedHistory = [result.name, ...currentHistory.filter((c: string) => c !== result.name)].slice(0, 10)
      localStorage.setItem('weather-history', JSON.stringify(updatedHistory))
      
      setSearchCity('')
    } catch (error) {
      console.error('Erreur lors de la recherche:', error)
    }
  }, [searchCity, dispatch])
  
  const clearWeather = useCallback(() => {
    dispatch(clearWeatherData())
  }, [dispatch])
  
  return {
    // État
    weatherData: data,
    loading,
    error,
    lastSearchedCity,
    searchCity,
    
    // Actions
    setSearchCity,
    searchWeather,
    clearWeather,
  }
}