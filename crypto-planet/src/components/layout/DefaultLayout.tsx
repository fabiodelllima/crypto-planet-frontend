import { Outlet } from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";

const DefaultLayout = () => {
  return (
    <div>
      <Header />
      <main className="p-8">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default DefaultLayout;
