const HistoriquesInfos = ({ history = [] }) => {
  return (
    <>
      {history?.length > 0 ? (
        <ul>
          {history.map((ville, index) => (
            <li key={index}>{ville}</li>
          ))}
        </ul>
      ) : (
        <p>Aucune ville recherchée pour le moment.</p>
      )}
    </>
  );
};

export default HistoriquesInfos;
