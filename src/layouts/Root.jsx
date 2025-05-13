import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Root = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Sticky navbar directly included here */}
      <Navbar />

      {/* Page content with similar left and right spacing like Navbar */}
      <main className="flex-grow w-full mx-auto bg-base-200 px-4 md:px-8">
        <Outlet />
      </main>

      {/* Footer with similar left and right spacing */}
      <Footer />
    </div>
  );
};

export default Root;
