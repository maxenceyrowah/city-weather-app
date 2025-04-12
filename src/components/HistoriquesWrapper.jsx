const HistoriquesWrapper = ({ children }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        backgroundColor: "#e0f7fa",
      }}
    >
      {children}
    </div>
  );
};
export default HistoriquesWrapper;
