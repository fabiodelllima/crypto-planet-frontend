import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

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
    <header className="bg-background text-white border-b-2 border-greySecondary">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <div className="w-9 h-1 bg-bluePrimary rounded-full ml-2"></div>
            <h1 className="text-xl font-bold ml-4">Crypto Planet</h1>
          </div>
          <nav className="hidden lg:flex items-center gap-8 pt-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href || "#"}
                className={`${
                  location.pathname === item.href
                    ? "text-bluePrimary"
                    : item.disabled
                    ? "text-gray-600 pointer-events-none"
                    : "text-white  hover:text-bluePrimary"
                }`}
              >
                <div className="py-10 border-b-2 border-transparent hover:border-bluePrimary">
                  {item.name}
                </div>
              </Link>
            ))}
          </nav>
          <div className="hidden lg:flex items-center gap-6">
            <Select
              options={languageOptions}
              defaultValue="english-usd"
              className="bg-[#111] text-gray-400 border border-transparent hover:border-gray-700 rounded px-4 py-6"
            />

            {isPortfolio ? (
              <>
                <Button styleType="primary">Wallet</Button>
                <Button styleType="secondary">Wallet</Button>
                <div className="flex items-center gap-2">
                  <div
                    className="w-10 h-10 border border-bluePrimary bg-transparent text-bluePrimary font-bold flex items-center justify-center rounded-full"
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
                  styleType="secondary"
                  onClick={() => navigate("/login")}
                >
                  Sign in
                </Button>
                <Button
                  styleType="primary"
                  onClick={() => navigate("/register")}
                  className="bg-bluePrimary text-black"
                >
                  Register
                </Button>
              </>
            )}
          </div>
          <Button
            styleType="tertiary"
            onClick={toggleMenu}
            className="lg:hidden mx-2 my-4 px-6 py-2 border border-transparent bg-greySecondary hover:border-greyPrimary rounded-lg"
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
                        className="text-white hover:text-bluePrimary"
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
                  <Button styleType="primary" className="w-full">
                    Wallet
                  </Button>
                  <Button styleType="secondary" className="w-full">
                    Wallet
                  </Button>
                </>
              ) : (
                <>
                  <Button
                    styleType="secondary"
                    onClick={() => navigate("/login")}
                    className="w-full bg-black hover:bg-white hover:text-black"
                  >
                    Sign in
                  </Button>
                  <Button
                    styleType="primary"
                    onClick={() => navigate("/register")}
                    className="w-full bg-bluePrimary text-black"
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
