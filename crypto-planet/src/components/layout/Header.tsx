import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(true);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const navigation = [
    { name: "Market", href: "/market" },
    { name: "Watchlist", href: "/error" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Learn", href: "/error" },
  ];

  const navigate = useNavigate();

  return (
    <header className="flex flex-col gap-6 p-8 border-b-2 border-black">
      <div className="flex justify-between items-center">
        <h1>Crypto Planet</h1>
        <button onClick={toggleMenu}>{isMenuOpen ? "X" : "≡"}</button>
      </div>

      {isMenuOpen && (
        <nav>
          <ul className="flex flex-col gap-0.5">
            {navigation.map((item) => (
              <li key={item.name}>
                <Link to={item.href}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </nav>
      )}

      {isMenuOpen && (
        <div className="flex flex-col gap-6">
          <select defaultValue="english-usd" className="px-4 py-2 rounded-lg">
            <option value="english-usd">English | USD</option>
          </select>
          <div className="flex flex-col gap-2">
            <button
              onClick={() => navigate("/login")}
              className="py-2 border-2 border-black bg-black text-white rounded-lg hover:bg-white hover:text-black"
            >
              Sign in
            </button>
            <button
              onClick={() => navigate("/register")}
              className="py-2 border-2 border-black bg-white text-black rounded-lg hover:bg-black hover:text-white"
            >
              Register
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
