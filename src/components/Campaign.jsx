import React from 'react';
import { Link } from 'react-router-dom';

const Campaign = ({ campaign }) => {
  const { _id, title, description, imageUrl, minimumDonation, deadline } = campaign;

  return (
    <div className="card bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105">
      <figure className="relative">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-2 right-2 bg-[#FF5103] text-white px-2 py-1 rounded-md text-xs font-semibold shadow-md">
          Active
        </div>
      </figure>
      <div className="p-5 space-y-3">
        <h3 className="text-lg font-bold text-gray-800">{title}</h3>
        <p className="text-sm text-gray-600">
          {description.length > 70 ? `${description.slice(0, 70)}...` : description}
        </p>
        <div className="flex justify-between items-center text-sm text-gray-500">
          <p>Min Donation: <span className="text-gray-800 font-semibold">${minimumDonation}</span></p>
          <p>Deadline: <span className="font-semibold">{new Date(deadline).toLocaleDateString()}</span></p>
        </div>
        <Link to={`/details/${_id}`}>
          <button className="w-full bg-[#FF5103] text-white py-2 rounded-md font-semibold hover:bg-[#e44902] transition">
            See More
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Campaign;
