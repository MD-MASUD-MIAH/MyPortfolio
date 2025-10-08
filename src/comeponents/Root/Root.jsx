import { Outlet } from "react-router";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

const Root = () => {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Navbar />

        <main className="flex-grow bg-gray-900">
          <Outlet />
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Root;
