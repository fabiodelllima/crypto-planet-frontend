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
    <header className="bg-background text-white border-b-2 border-grey-secondary">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <div className="w-9 h-1 bg-blue-primary rounded-full ml-2"></div>
            <h1 className="text-xl font-bold ml-4">Crypto Planet</h1>
          </div>

          <nav className="hidden lg:flex items-center gap-8 pt-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`${
                  location.pathname === item.href
                    ? "text-blue-primary"
                    : "text-white hover:text-blue-primary"
                }`}
              >
                <div className="py-10 border-b-2 border-transparent hover:border-blue-primary">
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
                <Button buttonType="primary">Wallet</Button>
                <Button buttonType="secondary">Wallet</Button>
                <UserMenu user={user} />
              </>
            ) : (
              <>
                <Button
                  buttonType="secondary"
                  onClick={() => navigate("/login")}
                >
                  Sign in
                </Button>
                <Button
                  buttonType="primary"
                  onClick={() => navigate("/register")}
                >
                  Register
                </Button>
              </>
            )}
          </div>

          <Button
            buttonType="tertiary"
            onClick={toggleMenu}
            className="lg:hidden mx-2 my-4 px-6 py-2 border border-transparent bg-grey-secondary hover:border-grey-primary rounded-lg"
          >
            {isMenuOpen ? "✕" : "☰"}
          </Button>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden mt-6 mb-4">
            {user && (
              <div className="flex flex-col justify-center items-center gap-1 mb-6">
                <div className="flex w-14 h-14 rounded-full bg-blue-primary items-center justify-center text-white">
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
                      className="text-white hover:text-blue-primary"
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
                  <Button buttonType="primary" className="w-full">
                    Wallet
                  </Button>
                  <Button
                    buttonType="secondary"
                    className="w-full border border-blue-primary! hover:bg-blue-primary hover:text-white"
                  >
                    Wallet
                  </Button>
                  <Button
                    buttonType="logout"
                    onClick={() => {
                      logout();
                      setIsMenuOpen(false);
                    }}
                    className="w-full pt-4 rounded-lg bg-grey-secondary border border-transparent hover:opacity-80"
                  >
                    <span className="flex justify-center">Logout</span>
                  </Button>
                </>
              ) : (
                <>
                  <Button
                    buttonType="secondary"
                    className="w-full"
                    onClick={() => {
                      navigate("/login");
                      setIsMenuOpen(false);
                    }}
                  >
                    Sign in
                  </Button>
                  <Button
                    buttonType="primary"
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
