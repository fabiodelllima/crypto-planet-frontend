import { IUser } from "../../interfaces/auth.interface";

interface UserInfoProps {
  user: IUser;
  className?: string;
}

const UserInfo = ({ user, className = "" }: UserInfoProps) => {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div
        className="w-10 h-10 border border-bluePrimary bg-transparent text-bluePrimary font-bold flex items-center justify-center rounded-full"
        title={user?.name}
      >
        {user?.name.charAt(0).toUpperCase()}
      </div>
      <span>{user?.name}</span>
      <button className="text-gray-400 hover:text-white">▼</button>
    </div>
  );
};

export default UserInfo;
