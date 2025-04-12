import { Link } from "react-router";

const Navlink = () => {
  return (
    <div style={{ marginBottom: "20px" }}>
      <Link
        to="/"
        style={{
          marginRight: "10px",
          color: "#00796b",
          textDecoration: "none",
        }}
      >
        Accueil
      </Link>
      <Link to="/history" style={{ color: "#00796b", textDecoration: "none" }}>
        Historique
      </Link>
    </div>
  );
};

export default Navlink;
