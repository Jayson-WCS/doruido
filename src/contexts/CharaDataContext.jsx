import { useState, useEffect, createContext } from "react";
import PropTypes from "prop-types";
import { fetchTopCharas } from "../services/Api";

const CharaDataContext = createContext();

export function CharaDataProvider({ children }) {
  const [topCharasData, setTopCharasData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const topCharasData = await fetchTopCharas();
      setTopCharasData(topCharasData);
    } catch (error) {
      console.error("Error fetching character data:", error);
    }
  };

  CharaDataProvider.propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node,
    ]).isRequired,
  };

  return (
    <CharaDataContext.Provider value={{ topCharasData }}>
      {children}
    </CharaDataContext.Provider>
  );
}

export default CharaDataContext;
