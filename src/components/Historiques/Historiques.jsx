import { Link } from "react-router";

import { useHistoriques } from "../../hooks";
import HistoriquesWrapper from "../HistoriquesWrapper";
import { HistoryDetails } from "../HistoriquesInfos";

const Historiques = () => {
  const { history } = useHistoriques();

  return (
    <HistoriquesWrapper>
      <h1 style={{ color: "#00796b" }}>Historique des recherches</h1>

      <div style={{ marginBottom: "20px" }}>
        <Link
          to="/"
          style={{
            color: "#00796b",
            textDecoration: "none",
            marginBottom: "20px",
          }}
        >
          Retour à l'Accueil
        </Link>
      </div>

      <HistoryDetails {...{ history }} />
    </HistoriquesWrapper>
  );
};

export default Historiques;
