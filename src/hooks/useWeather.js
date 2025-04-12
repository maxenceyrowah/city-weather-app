import { useState } from "react";

const API_KEY = "c7e54b6d6f7a7744d20ed6aa7a7d7db1";
const API_WEATHER_URL = (city) =>
  `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;

const useWeather = () => {
  const [loading, setLoading] = useState(false);
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState({});

  const getWeatherByCity = async () => {
    if (!city) {
      alert("Veuillez saisir une ville");
      return;
    }

    setLoading(true);
    try {
      const response = await fetch(API_WEATHER_URL(city));
      if (!response.ok) {
        throw new Error("La réponse du réseau n'était pas correcte");
      }
      const data = await response.json();
      setWeather(data);
      setCitySelectedInLocalStorage(city);
    } catch (error) {
      console.error("Erreur lors de la récupération de la météo:", error);
      setWeather({});
    } finally {
      setLoading(false);
    }
  };

  const setCitySelectedInLocalStorage = (city) => {
    const history = JSON.parse(localStorage.getItem("__history")) || [];
    if (!history.includes(city)) {
      history.push(city);
      localStorage.setItem("__history", JSON.stringify(history));
    }
  };

  const sharedContext = { setCity, city, getWeatherByCity, loading, weather };

  return { city, setCity, weather, getWeatherByCity, loading, sharedContext };
};

export default useWeather;
