'use client'

import { Provider } from 'react-redux'
import { store } from './index'
import { useEffect } from 'react'
import { useAppDispatch } from '@/hooks/redux'
import { loadHistoryFromStorage } from './slices/historySlice'

function StoreInitializer({ children }: { children: React.ReactNode }) {
  const dispatch = useAppDispatch()
  
  useEffect(() => {
    // Charger l'historique depuis localStorage au démarrage
    const savedHistory = localStorage.getItem('weather-history')
    if (savedHistory) {
      try {
        const cities = JSON.parse(savedHistory)
        dispatch(loadHistoryFromStorage(cities))
      } catch (error) {
        console.error('Erreur lors du chargement de l\'historique:', error)
      }
    }
  }, [dispatch])
  
  return <>{children}</>
}

export function ReduxProvider({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <StoreInitializer>
        {children}
      </StoreInitializer>
    </Provider>
  )
}