import { useState, useEffect, createContext } from "react";
import PropTypes from "prop-types";
import { fetchMangas, fetchTopMangas, fetchRandomManga } from "../services/Api";

const MangaDataContext = createContext();

export function MangaDataProvider({ children }) {
  const [mangasData, setMangasData] = useState([]);
  const [topMangasData, setTopMangasData] = useState([]);
  const [randomMangaData, setRandomMangaData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const mangasData = await fetchMangas();
      setMangasData(mangasData);

      const topMangasData = await fetchTopMangas();
      setTopMangasData(topMangasData);

      const randomMangaData = await fetchRandomManga();
      setRandomMangaData(randomMangaData);
    } catch (error) {
      console.error("Error fetching manga data:", error);
    }
  };

  MangaDataProvider.propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node,
    ]).isRequired,
  };

  return (
    <MangaDataContext.Provider
      value={{ mangasData, topMangasData, randomMangaData }}
    >
      {children}
    </MangaDataContext.Provider>
  );
}

export default MangaDataContext;
