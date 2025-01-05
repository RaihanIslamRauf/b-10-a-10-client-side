import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Swal from "sweetalert2";

const Register = () => {
  const { createNewUser } = useContext(AuthContext);
  const [error, setError] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const validatePassword = (password) => {
    const errors = [];
    if (!/[A-Z]/.test(password)) {
      errors.push("Password must have an uppercase letter.");
    }
    if (!/[a-z]/.test(password)) {
      errors.push("Password must have a lowercase letter.");
    }
    if (password.length < 6) {
      errors.push("Password must be at least 6 characters long.");
    }
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const name = form.get("name");
    if (name.length < 5) {
      setError({ ...error, name: "Name must be more than 5 characters long." });
      return;
    }
    const email = form.get("email");
    const photo = form.get("photo");
    const password = form.get("password");

    const passwordErrors = validatePassword(password);
    if (passwordErrors.length > 0) {
      setError({ ...error, password: passwordErrors.join(" ") });
      return;
    }

    createNewUser(email, password)
      .then((result) => {
        const createdAt = result?.user?.metadata?.creationTime;
        const newUser = { name, email, photo, createdAt };

        // Save new user info to the database
        fetch(`http://localhost:5000/users`, {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(newUser),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.insertedId) {
              // Show success alert
              Swal.fire({
                title: "Success!",
                text: "Your account has been created successfully!",
                icon: "success",
                confirmButtonText: "OK",
              }).then(() => {
                navigate("/login"); // Navigate to the login page
              });
            }
          });
      })
      .catch((error) => {
        console.error("Error during registration:", error);
      });
  };

  return (
    <div className="min-h-screen bg-base-200 p-4 flex justify-center items-center">
      <div className="card bg-base-100 w-full max-w-lg shrink-0 rounded-md p-10">
        <h2 className="text-2xl font-semibold text-center">
          Register your account
        </h2>
        <form onSubmit={handleSubmit} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              name="name"
              type="text"
              placeholder="name"
              className="input input-bordered"
              required
            />
          </div>
          {error.name && (
            <label className="label text-xs text-red-500">{error.name}</label>
          )}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input
              name="photo"
              type="text"
              placeholder="photo-url"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              name="email"
              type="email"
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control relative">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              name="password"
              type={showPassword ? "text" : "password"}
              placeholder="password"
              className="input input-bordered pr-10"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-2/3 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
          {error.password && (
            <label className="label text-xs text-red-500">
              {error.password}
            </label>
          )}
          <div className="form-control mt-6">
            <button className="btn bg-[#FF5103] rounded-md text-white">
              Register
            </button>
          </div>
        </form>
        <p className="text-center font-semibold">
          Already have An Account?{" "}
          <Link to="/login" className="text-[#FF5103]">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
