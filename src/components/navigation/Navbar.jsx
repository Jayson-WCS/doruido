import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Accueil</Link>
          <Link to="/news">News</Link>
          <Link to="/catalogs">Catalogs</Link>
          <Link to="/profile">Profile</Link>
        </li>
      </ul>
    </nav>
  );
}