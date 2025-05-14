import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../provider/AuthProvider';
import UseTitle from '../hooks/UseTitle';

const Details = () => {
  const campaign = useLoaderData();
  const { _id, title, description, imageUrl, minimumDonation, deadline, type } = campaign;
  const { user } = useContext(AuthContext);
  UseTitle();

  const isExpired = new Date(deadline) < new Date();

  const handleDonate = () => {
    if (isExpired) {
      Swal.fire({
        icon: 'error',
        title: 'Campaign Expired',
        text: 'You cannot donate to an expired campaign.',
      });
      return;
    }

    if (!user) {
      Swal.fire({
        icon: 'warning',
        title: 'Please login to donate',
        showConfirmButton: true,
      });
      return;
    }

    const donationData = {
      campaignId: _id,
      title,
      imageUrl,
      type,
      minimumDonation,
      deadline,
      userEmail: user.email,
      donatedAt: new Date(),
    };

    fetch('https://b-10-a-10-server-side.vercel.app/donations', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(donationData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId || data.acknowledged) {
          Swal.fire({
            icon: 'success',
            title: 'Donation Successful',
            text: 'Thank you for your support!',
            showConfirmButton: false,
            timer: 2000,
          });
        } else {
          Swal.fire({
            icon: 'error',
            title: 'Something went wrong!',
            text: 'Please try again later.',
          });
        }
      })
      .catch((error) => {
        console.error('Donation error:', error);
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'An error occurred. Please try again.',
        });
      });
  };

  return (
    <div className="details-container mx-auto p-6 bg-white dark:bg-gray-900 shadow-lg rounded-lg transition-colors">
      <div className="details-image mb-6">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-64 object-cover rounded-md"
        />
      </div>
      <div className="details-content">
        <h1 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">{title}</h1>
        <p className="text-gray-700 dark:text-gray-300 mb-6">{description}</p>

        <div className="details-info grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="info-item">
            <h2 className="text-lg font-semibold text-gray-700 dark:text-gray-200">Type</h2>
            <p className="text-gray-600 dark:text-gray-400 capitalize">{type}</p>
          </div>
          <div className="info-item">
            <h2 className="text-lg font-semibold text-gray-700 dark:text-gray-200">Minimum Donation</h2>
            <p className="text-gray-600 dark:text-gray-400">${minimumDonation}</p>
          </div>
          <div className="info-item">
            <h2 className="text-lg font-semibold text-gray-700 dark:text-gray-200">Deadline</h2>
            <p className="text-gray-600 dark:text-gray-400">
              {new Date(deadline).toLocaleDateString()}
            </p>
          </div>
        </div>

        <div className="details-actions mt-6">
          {isExpired ? (
            <p className="text-red-500 font-semibold">This campaign has expired. Donations are closed.</p>
          ) : (
            <button
              onClick={handleDonate}
              className="px-6 py-2 bg-[#FF5103] hover:bg-[#e24901] text-white font-semibold rounded-md transition-colors duration-200"
            >
              Donate
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Details;
