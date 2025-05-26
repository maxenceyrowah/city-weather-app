"use client";

import { useWeather } from "@/hooks/useWeather";

export default function Home() {
  const {
    weatherData,
    loading,
    error,
    searchCity,
    setSearchCity,
    searchWeather,
  } = useWeather();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    searchWeather();
  };

  return (
    <div className="min-h-screen p-8 max-w-4xl mx-auto">
      <header className="mb-8 text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Weather App</h1>
        <p className="text-gray-600">
          Recherchez la météo de n&apos;importe quelle ville
        </p>
      </header>

      {/* Formulaire de recherche */}
      <form onSubmit={handleSearch} className="mb-8 flex gap-2">
        <input
          type="text"
          value={searchCity}
          onChange={(e) => setSearchCity(e.target.value)}
          placeholder="Entrez le nom d'une ville..."
          className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
        >
          Rechercher
        </button>
      </form>

      {/* Message d'erreur */}
      {error && (
        <div className="mb-8 p-4 bg-red-100 border border-red-400 text-red-700 rounded-md">
          {error}
        </div>
      )}

      {/* Indicateur de chargement */}
      {loading && (
        <div className="flex justify-center items-center py-8">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
        </div>
      )}

      {/* Affichage des données météo */}
      {weatherData && !loading && (
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex justify-between items-start">
            <div>
              <h2 className="text-2xl font-bold">
                {weatherData.name}, {weatherData.sys.country}
              </h2>
              <p className="text-gray-600 capitalize">
                {weatherData.weather[0].description}
              </p>
            </div>
            <div className="text-5xl font-bold">
              {Math.round(weatherData.main.temp)}°C
            </div>
          </div>

          <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="bg-gray-50 p-3 rounded-md">
              <p className="text-gray-500 text-sm">Ressenti</p>
              <p className="font-semibold">
                {Math.round(weatherData.main.feels_like)}°C
              </p>
            </div>
            <div className="bg-gray-50 p-3 rounded-md">
              <p className="text-gray-500 text-sm">Humidité</p>
              <p className="font-semibold">{weatherData.main.humidity}%</p>
            </div>
            <div className="bg-gray-50 p-3 rounded-md">
              <p className="text-gray-500 text-sm">Vent</p>
              <p className="font-semibold">{weatherData.wind.speed} m/s</p>
            </div>
            <div className="bg-gray-50 p-3 rounded-md">
              <p className="text-gray-500 text-sm">Pression</p>
              <p className="font-semibold">{weatherData.main.pressure} hPa</p>
            </div>
          </div>
        </div>
      )}

      {/* Lien vers l'historique */}
      <div className="mt-8 text-center">
        <a href="/history" className="text-blue-500 hover:underline">
          Voir l&apos;historique des recherches
        </a>
      </div>
    </div>
  );
}
