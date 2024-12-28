import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div className="min-h-screen w-full bg-container">
      <div className="w-full bg-[#131313] pb-44 pt-16 md:pt-20">
        <div className="flex items-center justify-center gap-2">
          <div className="w-9 h-1 bg-bluePrimary rounded-full"></div>
          <h1 className="text-2xl font-bold text-white">Crypto Planet</h1>
        </div>
      </div>
      <div className="px-4 -mt-36">
        <div className="w-full max-w-md mx-auto relative">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
