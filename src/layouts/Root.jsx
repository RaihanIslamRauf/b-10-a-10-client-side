import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Root = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <nav className='w-11/12 mx-auto py-2'>
            <Navbar></Navbar>
            </nav>
            <main className='flex-grow lg:w-11/12 px-12 py-12 mx-auto bg-base-200'>
            <Outlet></Outlet>
            </main>
            <Footer></Footer>
        </div>
    );
};

export default Root;