import React, { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
import Loader from '../components/Loader'; 

const MyDonations = () => {
  const { user, loading } = useContext(AuthContext);
  const [donations, setDonations] = useState([]);

  useEffect(() => {
    if (user?.email) {
      fetch(`https://b-10-a-10-server-side.vercel.app/donations?email=${user.email}`)
        .then((res) => res.json())
        .then((data) => setDonations(data))
        .catch((error) => console.error('Error fetching donations:', error));
    }
  }, [user?.email]);

  if (loading) {
    return <Loader />; 
  }

  return (
    <div className="max-w-7xl w-11/12 mx-auto py-10 px-4">
      <h1 className="text-4xl font-bold text-center mb-10">My Donations</h1>

      {donations.length === 0 ? (
        <p className="text-center text-gray-600">You haven't donated to any campaigns yet.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {donations.map((donation) => (
            <div
              key={donation._id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-transform transform hover:scale-105"
            >
              <img
                src={donation.imageUrl}
                alt={donation.title}
                className="w-full h-48 object-cover"
              />

              <div className="p-5 space-y-2">
                <h3 className="text-lg font-bold text-gray-800">{donation.title}</h3>
                <p className="text-sm text-gray-600">Type: {donation.type}</p>
                <p className="text-sm">Min Donation: ${donation.minimumDonation}</p>
                <p className="text-sm">Deadline: {new Date(donation.deadline).toLocaleDateString()}</p>
              </div>

              <div className="p-5 pt-0">
                <Link to={`/details/${donation._id}`}>
                  <button className="w-full bg-[#FF5103] text-white hover:bg-[#e44902] transition-all rounded-md px-4 py-2">
                    View Details
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyDonations;
