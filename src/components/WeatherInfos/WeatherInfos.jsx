import { useContext } from "react";
import ImgLoader from "../../assets/loader.gif";
import WeatherContext from "../../context/WeatherContext";
import WrapperWeatherInfos from "../WrapperWeatherInfos";
import WrapperWeatherItem from "../WrapperWeatherItem";

const WeatherInfos = () => {
  const { weather, loading } = useContext(WeatherContext);

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
