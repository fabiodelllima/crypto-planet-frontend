import { Link, useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import Button from "../../components/common/Button";
import Select from "../../components/common/Select";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const navigation = [
    { name: "Market", href: "/market", disabled: false },
    { name: "Watchlist", href: null, disabled: true },
    { name: "Portfolio", href: "/login", disabled: false },
    { name: "Learn", href: null, disabled: true },
  ];

  const languageOptions = [
    { value: "english-usd", label: "English | USD" },
    { value: "pt-brl", label: "Português | BRL" },
  ];

  const isPortfolio = location.pathname === "/portfolio";

  return (
    <header className="bg-[#131313] text-white border-b-2 border-borderGray">
      <div className="max-w-7xl mx-auto px-4 lg:px-6 py-4">
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-bold">Crypto Planet</h1>
          <nav className="hidden lg:flex items-center gap-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href || "#"}
                className={`relative pb-1 ${
                  location.pathname === item.href
                    ? "text-blueAccent"
                    : item.disabled
                    ? "text-gray-600 pointer-events-none"
                    : "text-white  hover:text-blueAccent"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>
          <div className="hidden lg:flex items-center gap-6">
            <Select
              options={languageOptions}
              defaultValue="english-usd"
              onChange={(e) => console.log(e.target.value)}
              className="bg-[#111] text-gray-400 border border-gray-700 rounded px-3 py-2"
            />

            {isPortfolio ? (
              <>
                <Button variant="primary" className="flex items-center gap-2">
                  Wallet
                </Button>
                <Button variant="secondary" className="flex items-center gap-2">
                  Wallet
                </Button>
                <div className="flex items-center gap-2">
                  <div
                    className="w-10 h-10 border border-blueAccent bg-transparent text-blueAccent font-bold flex items-center justify-center rounded-full"
                    title="User Initial"
                  >
                    A
                  </div>
                  <span>Allie Grater</span>
                  <button className="text-gray-400 hover:text-white">▼</button>
                </div>
              </>
            ) : (
              <>
                <Button
                  variant="secondary"
                  className="hover:bg-white hover:text-black"
                  onClick={() => navigate("/login")}
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
              </>
            )}
          </div>
          <Button
            variant="secondary"
            onClick={toggleMenu}
            className="lg:hidden"
          >
            {isMenuOpen ? "✕" : "☰"}
          </Button>
        </div>

        {isMenuOpen && (
          <div className="mt-6 lg:hidden">
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
            <div className="mt-6 flex flex-col gap-4">
              <Select options={languageOptions} defaultValue="english-usd" />
              {isPortfolio ? (
                <>
                  <Button variant="primary" className="w-full">
                    Wallet
                  </Button>
                  <Button variant="secondary" className="w-full">
                    Wallet
                  </Button>
                </>
              ) : (
                <>
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
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
