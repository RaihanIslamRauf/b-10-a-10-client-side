import React from 'react';
import { NavLink } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className="flex flex-col items-center justify-center mt-10">
           <h2 className="text-5xl mb-2">Page not found !</h2>
           <p>Status: 404</p> 
           <NavLink><button className="mt-2 btn bg-orange-600 text-white p-2">Back to Home</button></NavLink>
        </div>
    );
};

export default ErrorPage;