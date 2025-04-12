import { useContext } from "react";
import { styledInput } from "../../utils/inputStyles";
import SearchWeatherWrapper from "../SearchWeatherWrapper";
import SharedButton from "../SharedButton";
import WeatherContext from "../../context/WeatherContext";

const SearchWeather = () => {
  const { city, setCity, getWeatherByCity } = useContext(WeatherContext);

  return (
    <SearchWeatherWrapper>
      <input
        type="text"
        placeholder="Rechercher une ville..."
        value={city}
        onChange={(e) => setCity(e.target.value)}
        style={styledInput}
        onFocus={(e) => (e.target.style.borderColor = "#00796b")}
        onBlur={(e) => (e.target.style.borderColor = "#b2dfdb")}
      />

      <SharedButton handleClick={() => getWeatherByCity()} />
    </SearchWeatherWrapper>
  );
};

export default SearchWeather;
