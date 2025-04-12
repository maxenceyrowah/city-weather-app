import AcceuilWrapper from "../AccueilWrapper";
import { Title } from "../Title";
import { NavBar } from "../Navlink";
import { WeatherInfos } from "../WeatherInfos";
import { SearchWeather } from "../SearchWeather";
import { useWeather } from "../../hooks";
import WeatherContext from "../../context/WeatherContext";

const Acceuil = () => {
  const { sharedContext } = useWeather();

  return (
    <AcceuilWrapper backgroundColor={{}}>
      <Title title={"Weather APP"} />
      <NavBar />

      <WeatherContext.Provider value={sharedContext}>
        <SearchWeather />
        <WeatherInfos />
      </WeatherContext.Provider>
    </AcceuilWrapper>
  );
};

export default Acceuil;
