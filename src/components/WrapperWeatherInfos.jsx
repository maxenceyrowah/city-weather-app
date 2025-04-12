const WrapperWeatherInfos = ({ children }) => {
  return (
    <div
      style={{
        padding: "30px",
        boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
        borderRadius: "16px",
        backgroundColor: "#ffffff",
        textAlign: "center",
        width: "22rem",
        transition: "transform 0.2s",
      }}
    >
      {children}
    </div>
  );
};

export default WrapperWeatherInfos;
