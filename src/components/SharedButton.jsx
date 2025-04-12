const SharedButton = ({ name = "Rechercher", handleClick }) => {
  return (
    <button
      onClick={handleClick}
      style={{
        padding: "12px",
        backgroundColor: "#00796b",
        color: "#ffffff",
        border: "none",
        borderRadius: "8px",
        cursor: "pointer",
        transition: "background-color 0.3s, transform 0.2s",
      }}
      onMouseOver={(e) => {
        e.currentTarget.style.backgroundColor = "#004d40";
        e.currentTarget.style.transform = "scale(1.05)";
      }}
      onMouseOut={(e) => {
        e.currentTarget.style.backgroundColor = "#00796b";
        e.currentTarget.style.transform = "scale(1)";
      }}
    >
      {name}
    </button>
  );
};

export default SharedButton;
