import { Route, Routes } from "react-router-dom";
import { AnimeDataProvider } from "./contexts/AnimeDataContext";
import { MangaDataProvider } from "./contexts/MangaDataContext";
import { CharaDataProvider } from "./contexts/CharaDataContext";
import Navbar from "./components/navigation/Navbar";
import Hero from "./pages/Hero";
import News from "./pages/News";
import Catalogs from "./pages/Catalogs";
import Profile from "./pages/Profile";

function App() {
  return (
    <AnimeDataProvider>
      <MangaDataProvider>
        <CharaDataProvider>
          <Navbar />
          <Routes>
            <Route path="/" component={Hero} />
            <Route path="/news" component={News} />
            <Route path="/catalogs" component={Catalogs} />
            <Route path="/profile" component={Profile} />
          </Routes>
        </CharaDataProvider>
      </MangaDataProvider>
    </AnimeDataProvider>
  );
}

export default App;
