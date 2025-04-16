import { useDispatch } from "react-redux";

import { styledInput } from "../../utils/inputStyles";
import SearchWeatherWrapper from "../SearchWeatherWrapper";
import SharedButton from "../SharedButton";
import { useWeather } from "../../hooks";
import { fetchWeather } from "../../redux/old-redux/actions";

const SearchWeather = () => {
  const { city, setCity } = useWeather();
  const dispatch = useDispatch();

  const handleFetchWeather = () => {
    dispatch(fetchWeather(city));
  };

  return (
    <SearchWeatherWrapper>
      <input
        type="text"
        placeholder="Rechercher une ville..."
        value={city}
        onChange={(event) => setCity(event?.target?.value)}
        style={styledInput}
        onFocus={(e) => (e.target.style.borderColor = "#00796b")}
        onBlur={(e) => (e.target.style.borderColor = "#b2dfdb")}
      />

      <SharedButton handleClick={() => handleFetchWeather()} />
    </SearchWeatherWrapper>
  );
};

export default SearchWeather;
