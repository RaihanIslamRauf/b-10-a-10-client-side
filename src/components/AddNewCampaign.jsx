import React, { useContext } from 'react';
import Swal from 'sweetalert2';
import { AuthContext } from '../provider/AuthProvider';

const AddNewCampaign = () => {
  const { user } = useContext(AuthContext);

  const handleAddCampaign = (e) => {
    e.preventDefault();

    const imageUrl = e.target.imageUrl.value;
    const title = e.target.title.value;
    const type = e.target.type.value;
    const description = e.target.description.value;
    const minimumDonation = e.target.minimumDonation.value;
    const deadline = e.target.deadline.value;

    const newCampaign = {
      imageUrl,
      title,
      type,
      description,
      minimumDonation,
      deadline,
      userEmail: user?.email,
      userName: user?.displayName,
    };

    fetch('https://b-10-a-10-server-side.vercel.app/campaigns', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newCampaign),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: 'Success!',
            text: 'Campaign added successfully',
            icon: 'success',
            confirmButtonText: 'Ok',
          });
          e.target.reset();
        }
      })
      .catch((error) => console.error('Error adding campaign:', error));
  };

  return (
    <div className="mx-auto px-4 md:px-8 lg:px-16 mt-12 mb-12">
      <div className="text-center p-10">
        <h1 className="text-5xl font-bold text-black dark:text-white">Add Campaign</h1>
        <p className="py-6 text-gray-700 dark:text-gray-300">
          Share your ideas and gather support! Fill out the form below to add a new campaign.
        </p>
      </div>
      <div className="card bg-white dark:bg-gray-900 w-full shrink-0 shadow-2xl">
        <form onSubmit={handleAddCampaign} className="card-body">
          {/* Form first row */}
          <div className="flex flex-col lg:flex-row gap-5">
            <div className="form-control flex-1">
              <label className="label">
                <span className="label-text text-black dark:text-gray-300">Image URL</span>
              </label>
              <input
                type="text"
                name="imageUrl"
                placeholder="Image URL"
                className="input input-bordered bg-white dark:bg-gray-900 text-black dark:text-white placeholder-gray-400"
                required
              />
            </div>
            <div className="form-control flex-1">
              <label className="label">
                <span className="label-text text-black dark:text-gray-300">Campaign Title</span>
              </label>
              <input
                type="text"
                name="title"
                placeholder="Campaign Title"
                className="input input-bordered bg-white dark:bg-gray-900 text-black dark:text-white placeholder-gray-400"
                required
              />
            </div>
          </div>

          {/* Form second row */}
          <div className="flex flex-col lg:flex-row gap-5">
            <div className="form-control flex-1">
              <label className="label">
                <span className="label-text text-black dark:text-gray-300">Campaign Type</span>
              </label>
              <select
                name="type"
                className="select select-bordered text-black bg-white dark:bg-gray-900 dark:text-white"
                required
              >
                <option value="">Select Type</option>
                <option value="personal issue">Personal Issue</option>
                <option value="startup">Startup</option>
                <option value="business">Business</option>
                <option value="creative ideas">Creative Ideas</option>
              </select>
            </div>
            <div className="form-control flex-1">
              <label className="label">
                <span className="label-text text-black dark:text-gray-300">Minimum Donation Amount</span>
              </label>
              <input
                type="number"
                name="minimumDonation"
                placeholder="Minimum Donation"
                className="input input-bordered bg-white dark:bg-gray-900 text-black dark:text-white placeholder-gray-400"
                required
              />
            </div>
          </div>

          {/* Description */}
          <div className="form-control">
            <label className="label">
              <span className="label-text text-black dark:text-gray-300">Description</span>
            </label>
            <textarea
              name="description"
              placeholder="Campaign Description"
              className="textarea textarea-bordered bg-white dark:bg-gray-900 text-black dark:text-white placeholder-gray-400"
              rows="4"
              required
            ></textarea>
          </div>

          {/* Deadline and email */}
          <div className="flex flex-col lg:flex-row gap-5">
            <div className="form-control flex-1">
              <label className="label">
                <span className="label-text text-black dark:text-gray-300">Deadline</span>
              </label>
              <input
                type="date"
                name="deadline"
                className="input input-bordered bg-white dark:bg-gray-900 text-black dark:text-white placeholder-gray-400 [&::-webkit-calendar-picker-indicator]:invert dark:[&::-webkit-calendar-picker-indicator]:invert-0"
                required
              />
            </div>
            <div className="form-control flex-1">
              <label className="label">
                <span className="label-text text-black dark:text-gray-300">User Email</span>
              </label>
              <input
                type="text"
                value={user?.email || ''}
                className="input input-bordered bg-white dark:bg-gray-700 text-black dark:text-white cursor-not-allowed"
                readOnly
              />
            </div>
          </div>

          {/* Username */}
          <div className="form-control">
            <label className="label">
              <span className="label-text text-black dark:text-gray-300">User Name</span>
            </label>
            <input
              type="text"
              value={user?.displayName || 'user'}
              className="input input-bordered bg-white dark:bg-gray-700 text-black dark:text-white cursor-not-allowed"
              readOnly
            />
          </div>

          <div className="form-control mt-6">
            <button className="btn bg-[#FF5103] text-white hover:bg-[#e44902]">Add</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddNewCampaign;
