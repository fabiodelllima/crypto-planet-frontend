import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import Button from "../../components/common/Button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const navigation = [
    { name: "Market", href: "/market", disabled: false },
    { name: "Watchlist", href: null, disabled: true },
    { name: "Portfolio", href: "/portfolio", disabled: false },
    { name: "Learn", href: null, disabled: true },
  ];

  return (
    <header className="bg-[#131313] text-white border-b-2 border-borderGray">
      <div className="max-w-7xl mx-auto px-4 lg:px-6 py-4">
        {/* Top bar */}
        <div className="flex justify-between items-center">
          {/* Logo */}
          <h1 className="text-xl font-bold">Crypto Planet</h1>

          {/* Mobile Menu Toggle */}
          <Button
            variant="secondary"
            onClick={toggleMenu}
            className="lg:hidden bg-transparent border-none px-2"
          >
            {isMenuOpen ? "✕" : "☰"}
          </Button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href || "#"}
                className={`${
                  item.disabled
                    ? "text-gray-600 pointer-events-none"
                    : "hover:text-blueAccent"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Actions (Desktop) */}
          <div className="hidden lg:flex items-center gap-4">
            {/* Language Selector */}
            <select
              defaultValue="english-usd"
              className="px-3 py-1 bg-transparent border border-gray-700 rounded text-white"
            >
              <option value="english-usd">English | USD</option>
            </select>

            {/* Buttons */}
            <Button
              variant="secondary"
              onClick={() => navigate("/login")}
              className="hover:bg-white hover:text-black"
            >
              Sign in
            </Button>
            <Button
              variant="primary"
              onClick={() => navigate("/register")}
              className="bg-blueAccent text-black"
            >
              Register
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="mt-6 lg:hidden">
            {/* Navigation */}
            <nav>
              <ul className="flex flex-col gap-4">
                {navigation.map((item) => (
                  <li key={item.name}>
                    {!item.disabled && item.href ? (
                      <Link
                        to={item.href}
                        className="text-white hover:text-blueAccent"
                      >
                        {item.name}
                      </Link>
                    ) : (
                      <span className="text-gray-600">{item.name}</span>
                    )}
                  </li>
                ))}
              </ul>
            </nav>

            {/* Actions */}
            <div className="mt-6 flex flex-col gap-4">
              <select
                defaultValue="english-usd"
                className="px-4 py-2 bg-black border border-gray-700 rounded text-white"
              >
                <option value="english-usd">English | USD</option>
              </select>

              <Button
                variant="secondary"
                onClick={() => navigate("/login")}
                className="w-full bg-black hover:bg-white hover:text-black"
              >
                Sign in
              </Button>

              <Button
                variant="primary"
                onClick={() => navigate("/register")}
                className="w-full bg-blueAccent text-black"
              >
                Register
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
