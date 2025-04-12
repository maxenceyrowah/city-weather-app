const AcceuilWrapper = ({ children, backgroundColor }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        backgroundColor: backgroundColor || "#e0f7fa",
        padding: "40px",
        fontFamily: "'Arial', sans-serif",
        overflow: "hidden",
      }}
    >
      {children}
    </div>
  );
};

export default AcceuilWrapper;
