import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

import Button from "../../components/common/Button";
import Select from "../../components/common/Select";
import UserMenu from "../common/UserMenu";

const Header = () => {
  const { user, logout } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const navigation = [
    { name: "Market", href: "/market" },
    { name: "Watchlist", href: "#" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Learn", href: "#" },
  ];

  const languageOptions = [
    { value: "english-usd", label: "English | USD" },
    { value: "pt-brl", label: "Português | BRL" },
  ];

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

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
                to={item.href}
                className={`${
                  location.pathname === item.href
                    ? "text-bluePrimary"
                    : "text-white hover:text-bluePrimary"
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

            {user ? (
              <>
                <Button styleType="primary">Wallet</Button>
                <Button styleType="secondary">Wallet</Button>
                <UserMenu user={user} />
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
          <div className="lg:hidden mt-6 mb-4">
            {user && (
              <div className="flex flex-col justify-center items-center gap-1 mb-6">
                <div className="flex w-14 h-14 rounded-full bg-bluePrimary items-center justify-center text-white">
                  <span className="text-2xl font-semibold">
                    {user.name.charAt(0).toUpperCase()}
                  </span>
                </div>
                <span className="text-white text-lg font-semibold">
                  {user.name}
                </span>
              </div>
            )}

            <nav>
              <ul className="flex flex-col gap-4 pb-4">
                {navigation.map((item) => (
                  <li key={item.name}>
                    <Link
                      to={item.href}
                      className="text-white hover:text-bluePrimary"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="mt-6 flex flex-col gap-4">
              <Select options={languageOptions} defaultValue="english-usd" />

              {user ? (
                <>
                  <Button styleType="primary" className="w-full">
                    Wallet
                  </Button>
                  <Button
                    styleType="secondary"
                    className="w-full border !border-bluePrimary hover:bg-bluePrimary hover:text-white"
                  >
                    Wallet
                  </Button>
                  <Button
                    styleType="logout"
                    onClick={() => {
                      logout();
                      setIsMenuOpen(false);
                    }}
                    className="w-full pt-4 rounded-lg bg-greySecondary border border-transparent hover:opacity-80"
                  >
                    <span className="flex justify-center">Logout</span>
                  </Button>
                </>
              ) : (
                <>
                  <Button
                    styleType="secondary"
                    className="w-full"
                    onClick={() => {
                      navigate("/login");
                      setIsMenuOpen(false);
                    }}
                  >
                    Sign in
                  </Button>
                  <Button
                    styleType="primary"
                    className="w-full"
                    onClick={() => {
                      navigate("/register");
                      setIsMenuOpen(false);
                    }}
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
