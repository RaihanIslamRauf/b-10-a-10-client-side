import { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
import Swal from 'sweetalert2';

const UpdateCampaign = () => {
    const { user } = useContext(AuthContext);
    const campaign = useLoaderData();
    const {_id, imageUrl, title, description, minimumDonation, deadline, type} = campaign;
    
    const handleUpdateCampaign = (e) => {
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
      
        // Send data to the server and database
        fetch(`https://b-10-a-10-server-side.vercel.app/campaign/${_id}`, {
          method: 'PUT',
          headers: {
            'content-type': 'application/json',
          },
          body: JSON.stringify(newCampaign),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.modifiedCount) {
              // Show success message
              Swal.fire({
                title: 'Success!',
                text: 'Campaign updated successfully.',
                icon: 'success',
                confirmButtonText: 'Ok',
              });
              // Reset the form
              e.target.reset();
            }
          });
      };
      
      
      return (
        <div className="lg:w-3/4 mx-auto">
          <div className="text-center p-10">
            <h1 className="text-5xl font-bold">Update Campaign</h1>
            <p className="py-6">
              Share your ideas and gather support! Fill out the form below to update a campaign.
            </p>
          </div>
          <div className="card bg-base-100 w-full shrink-0 shadow-2xl">
            <form onSubmit={handleUpdateCampaign} className="card-body">
              {/* Form first row */}
              <div className="flex flex-col lg:flex-row gap-5">
                <div className="form-control flex-1">
                  <label className="label">
                    <span className="label-text">Image URL</span>
                  </label>
                  <input
                    type="text"
                    name="imageUrl"
                    placeholder="Image URL"
                    defaultValue={imageUrl}
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control flex-1">
                  <label className="label">
                    <span className="label-text">Campaign Title</span>
                  </label>
                  <input
                    type="text"
                    name="title"
                    placeholder="Campaign Title"
                    defaultValue={title}
                    className="input input-bordered"
                    required
                  />
                </div>
              </div>
    
              {/* Form second row */}
              <div className="flex flex-col lg:flex-row gap-5">
                <div className="form-control flex-1">
                  <label className="label">
                    <span className="label-text">Campaign Type</span>
                  </label>
                  <select name="type" defaultValue={type} className="select select-bordered" required>
                    <option value="">Select Type</option>
                    <option value="personal issue">Personal Issue</option>
                    <option value="startup">Startup</option>
                    <option value="business">Business</option>
                    <option value="creative ideas">Creative Ideas</option>
                  </select>
                </div>
                <div className="form-control flex-1">
                  <label className="label">
                    <span className="label-text">Minimum Donation Amount</span>
                  </label>
                  <input
                    type="number"
                    name="minimumDonation"
                    placeholder="Minimum Donation"
                    defaultValue={minimumDonation}
                    className="input input-bordered"
                    required
                  />
                </div>
              </div>
    
              {/* Form third row */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Description</span>
                </label>
                <textarea
                  name="description"
                  placeholder="Campaign Description"
                  defaultValue={description}
                  className="textarea textarea-bordered"
                  rows="4"
                  required
                ></textarea>
              </div>
    
              {/* Form fourth row */}
              <div className="flex flex-col lg:flex-row gap-5">
                <div className="form-control flex-1">
                  <label className="label">
                    <span className="label-text">Deadline</span>
                  </label>
                  <input
                    type="date"
                    name="deadline"
                    className="input input-bordered"
                    defaultValue={deadline}
                    required
                  />
                </div>
                <div className="form-control flex-1">
                  <label className="label">
                    <span className="label-text">User Email</span>
                  </label>
                  <input
                    type="text"
                    value={user?.email || ''}
                    className="input input-bordered bg-gray-200 cursor-not-allowed"
                    readOnly
                  />
                </div>
              </div>
    
              <div className="form-control">
                <label className="label">
                  <span className="label-text">User Name</span>
                </label>
                <input
                  type="text"
                  value={user?.displayName || 'user'}
                  className="input input-bordered bg-gray-200 cursor-not-allowed"
                  readOnly
                />
              </div>
    
              <div className="form-control mt-6">
                <button className="btn bg-[#FF5103] text-white">Update</button>
              </div>
            </form>
          </div>
        </div>
      );
    };

export default UpdateCampaign;