import { useEffect, useState } from "react";

const useHistoriques = () => {
  const [history, sethistory] = useState([]);

  useEffect(() => {
    const storedCities = JSON.parse(localStorage.getItem("__history")) || [];
    sethistory(storedCities);
  }, []);

  return {
    history,
  };
};

export default useHistoriques;
