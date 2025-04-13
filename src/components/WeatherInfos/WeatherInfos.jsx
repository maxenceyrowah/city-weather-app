import { useSelector } from "react-redux";

import ImgLoader from "../../assets/loader.gif";
import WrapperWeatherInfos from "../WrapperWeatherInfos";
import WrapperWeatherItem from "../WrapperWeatherItem";

const WeatherInfos = () => {
  const weather = useSelector((state) => state.weather.data);
  const loading = useSelector((state) => state.weather.loading);

  return (
    <WrapperWeatherInfos>
      {loading ? (
        <p>
          <img src={ImgLoader} alt="Loading..." style={{ width: "20rem" }} />
        </p>
      ) : (
        <>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              alignItems: "center",
              color: "#333",
            }}
          >
            <div>
              <div
                style={{
                  textAlign: "center",
                  textTransform: "uppercase",
                  marginBottom: "20px",
                }}
              >
                Météo
              </div>
            </div>

            <WrapperWeatherItem>
              <div>
                <p style={{ color: "#333", fontWeight: "bold" }}>Ville:</p>
              </div>
              <div style={{ textTransform: "uppercase" }}>
                {weather?.name || "N/A"}
              </div>
            </WrapperWeatherItem>

            <WrapperWeatherItem>
              <div>
                <p style={{ color: "#333", fontWeight: "bold" }}>
                  Température:
                </p>
              </div>
              <div>
                {weather?.main?.temp ? `${weather.main.temp} °C` : "N/A"}
              </div>
            </WrapperWeatherItem>

            <WrapperWeatherItem>
              <div>
                <p style={{ color: "#333", fontWeight: "bold" }}>Météo:</p>
              </div>
              <div>{weather?.weather?.[0]?.description || "N/A"}</div>
            </WrapperWeatherItem>
          </div>
        </>
      )}
    </WrapperWeatherInfos>
  );
};

export default WeatherInfos;
