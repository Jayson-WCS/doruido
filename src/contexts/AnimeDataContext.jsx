import { useState, useEffect, createContext } from "react";
import PropTypes from "prop-types";
import { fetchAnimes, fetchTopAnimes, fetchRandomAnime } from "../services/Api";

const AnimeDataContext = createContext();

export function AnimeDataProvider({ children }) {
  const [animesData, setAnimesData] = useState([]);
  const [topAnimesData, setTopAnimesData] = useState([]);
  const [randomAnimeData, setRandomAnimeData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const animesData = await fetchAnimes();
      setAnimesData(animesData);

      const topAnimesData = await fetchTopAnimes();
      setTopAnimesData(topAnimesData);

      const randomAnimeData = await fetchRandomAnime();
      setRandomAnimeData(randomAnimeData);
    } catch (error) {
      console.error("Error fetching anime data:", error);
    }
  };

  AnimeDataProvider.propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node,
    ]).isRequired,
  };

  return (
    <AnimeDataContext.Provider
      value={{ animesData, topAnimesData, randomAnimeData }}
    >
      {children}
    </AnimeDataContext.Provider>
  );
}

export default AnimeDataContext;
