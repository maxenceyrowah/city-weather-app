const SearchWeatherWrapper = ({ children }) => {
  return (
    <div
      style={{
        padding: "30px",
        boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
        borderRadius: "16px",
        backgroundColor: "#ffffff",
        width: "350px",
        textAlign: "center",
        transition: "transform 0.2s",
        marginBottom: "20px",
      }}
    >
      {children}
    </div>
  );
};

export default SearchWeatherWrapper;
