import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Details = () => {
    const campaign = useLoaderData();
    const { _id, title, description, imageUrl, minimumDonation, deadline, type } = campaign;

    return (
        <div className="details-container max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
            <div className="details-image mb-6">
                <img
                    src={imageUrl}
                    alt={title}
                    className="w-full h-64 object-cover rounded-md"
                />
            </div>
            <div className="details-content">
                <h1 className="text-2xl font-bold text-gray-800 mb-4">{title}</h1>
                <p className="text-gray-600 mb-6">{description}</p>
                <div className="details-info grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="info-item">
                        <h2 className="text-lg font-semibold text-gray-700">
                            Type
                        </h2>
                        <p className="text-gray-500 capitalize">{type}</p>
                    </div>
                    <div className="info-item">
                        <h2 className="text-lg font-semibold text-gray-700">
                            Minimum Donation
                        </h2>
                        <p className="text-gray-500">${minimumDonation}</p>
                    </div>
                    <div className="info-item">
                        <h2 className="text-lg font-semibold text-gray-700">
                            Deadline
                        </h2>
                        <p className="text-gray-500">{new Date(deadline).toLocaleDateString()}</p>
                    </div>
                </div>
                <div className="details-actions mt-6">
                    <button className="px-6 py-2 btn bg-[#FF5103] text-white font-semibold rounded-md">
                        Donate
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Details;
