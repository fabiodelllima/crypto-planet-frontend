import { useState, useRef, useEffect } from "react";
import { useAuth } from "../../hooks/useAuth";
import { IUser } from "../../interfaces/auth.interface";
import Button from "./Button";

interface UserMenuProps {
  user: IUser;
}

const UserMenu = ({ user }: UserMenuProps) => {
  const { logout } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = () => {
    logout();
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={menuRef}>
      <div
        className="flex items-center gap-2 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-white">{user.name}</span>
        <span
          className={`transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          ▼
        </span>
      </div>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-background border border-greySecondary">
          <div className="py-1">
            <Button styleType="logout" onClick={handleLogout}>
              Logout
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
