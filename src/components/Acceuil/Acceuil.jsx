import AcceuilWrapper from "../AccueilWrapper";
import { Title } from "../Title";
import { NavBar } from "../Navlink";
import { WeatherInfos } from "../WeatherInfos";
import { SearchWeather } from "../SearchWeather";

const Acceuil = () => {
  return (
    <AcceuilWrapper backgroundColor={{}}>
      <Title title={"Weather APP"} />
      <NavBar />

      <SearchWeather />
      <WeatherInfos />
    </AcceuilWrapper>
  );
};

export default Acceuil;
