import React from 'react';
import { Link } from 'react-router-dom';

const Campaign = ({ campaign }) => {
  const { _id, title, description, imageUrl, minimumDonation, deadline } = campaign;

  return (
    <div className="card bg-white dark:bg-gray-900 shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105">
      <figure className="relative">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-48 object-cover"
        />
      </figure>
      <div className="p-5 space-y-4">
        <h3 className="text-lg font-bold dark:text-white text-gray-800">{title}</h3>

        {/* Adjusted description with proper spacing */}
        <p className="text-sm dark:text-gray-300 text-gray-600">
          {description.length > 70 ? `${description.slice(0, 70)}...` : description}
        </p>

        <div className="flex justify-between items-center text-sm dark:text-gray-400 text-gray-500 mt-4">
          <p>Min Donation: <span className="text-gray-800 dark:text-gray-200 font-semibold">${minimumDonation}</span></p>
          <p>Deadline: <span className="font-semibold">{new Date(deadline).toLocaleDateString()}</span></p>
        </div>
      </div>

      {/* Full width button section */}
      <div className="p-5 pt-0">
        <Link to={`/dashboard/details/${_id}`}>
          <button className="w-full bg-[#FF5103] text-white hover:bg-[#e44902] dark:bg-[#FF5103] dark:hover:bg-[#e44902] shadow-md transition-all rounded-md px-4 py-2">
            See More
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Campaign;
