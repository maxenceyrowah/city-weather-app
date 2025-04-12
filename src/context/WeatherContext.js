import { createContext, useContext } from "react";

const WeatherContext = createContext(null);

export const useWeatherContext = () => {
  const context = useContext(WeatherContext);
  if (!context) {
    throw new Error(
      "useWeatherContext doit être utilisé à l'intérieur d'un WeatherProvider"
    );
  }
  return context;
};

export default WeatherContext;
