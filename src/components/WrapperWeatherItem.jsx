const WrapperWeatherItem = ({ children }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyItems: "center",
        flexDirection: "row",
        alignItems: "baseline",
        gap: "20px",
        justifyContent: "space-between",
        width: "100%",
      }}
    >
      {children}
    </div>
  );
};

export default WrapperWeatherItem;
