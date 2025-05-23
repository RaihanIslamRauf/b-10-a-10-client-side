import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Swal from "sweetalert2";
import UseTitle from "../hooks/UseTitle";
import Lottie from "lottie-react";
import registerAnimation from "../assets/lottie2.json"; 
const Register = () => {
  const { createUser } = useContext(AuthContext);
  const [error, setError] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  UseTitle();

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
    setError({});
    const form = new FormData(e.target);
    const name = form.get("name");
    const email = form.get("email");
    const photo = form.get("photo");
    const password = form.get("password");

    if (name.length < 5) {
      setError({ name: "Name must be more than 5 characters long." });
      return;
    }

    const passwordErrors = validatePassword(password);
    if (passwordErrors.length > 0) {
      setError({ password: passwordErrors.join(" ") });
      return;
    }

    createUser(email, password)
      .then((result) => {
        const createdAt = result?.user?.metadata?.creationTime;
        const newUser = { name, email, photo, createdAt };

        return fetch("https://b-10-a-10-server-side.vercel.app/users", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(newUser),
        });
      })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Your account has been created successfully!",
            icon: "success",
            confirmButtonText: "OK",
          }).then(() => {
            navigate("/login");
          });
        }
      })
      .catch((error) => {
        console.error("Error during registration:", error);
        Swal.fire({
          title: "Error!",
          text: "Registration failed. Please try again.",
          icon: "error",
          confirmButtonText: "OK",
        });
      });
  };

  return (
    <div className="min-h-screen bg-[#E2DFD2] dark:bg-gray-800 p-4 flex flex-col md:flex-row justify-center items-center gap-10">
      {/* Form Section */}
      <div className="card bg-white dark:bg-gray-900 w-full max-w-lg shrink-0 rounded-md p-10">
        <h2 className="text-2xl font-semibold text-center text-gray-800 dark:text-white">
          Register your account
        </h2>
        <form onSubmit={handleSubmit} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text text-gray-700 dark:text-gray-300">Name</span>
            </label>
            <input
              name="name"
              type="text"
              placeholder="name"
              className="input input-bordered bg-gray-100 dark:bg-gray-800 dark:border-gray-700 text-gray-800 dark:text-white"
              required
            />
          </div>
          {error.name && (
            <label className="label text-xs text-red-500">{error.name}</label>
          )}
          <div className="form-control">
            <label className="label">
              <span className="label-text text-gray-700 dark:text-gray-300">Photo URL</span>
            </label>
            <input
              name="photo"
              type="text"
              placeholder="photo-url"
              className="input input-bordered bg-gray-100 dark:bg-gray-800 dark:border-gray-700 text-gray-800 dark:text-white"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-gray-700 dark:text-gray-300">Email</span>
            </label>
            <input
              name="email"
              type="email"
              placeholder="email"
              className="input input-bordered bg-gray-100 dark:bg-gray-800 dark:border-gray-700 text-gray-800 dark:text-white"
              required
            />
          </div>
          <div className="form-control relative">
            <label className="label">
              <span className="label-text text-gray-700 dark:text-gray-300">Password</span>
            </label>
            <input
              name="password"
              type={showPassword ? "text" : "password"}
              placeholder="password"
              className="input input-bordered bg-gray-100 dark:bg-gray-800 dark:border-gray-700 text-gray-800 dark:text-white pr-10"
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
            <label className="label text-xs text-red-500">{error.password}</label>
          )}
          <div className="form-control mt-6">
            <button className="btn bg-[#FF5103] hover:bg-[#e44902] rounded-md text-white">
              Register
            </button>
          </div>
        </form>
        <p className="text-center font-semibold text-gray-700 dark:text-gray-300">
          Already have An Account?{" "}
          <Link to="/login" className="text-[#FF5103] hover:underline">
            Login
          </Link>
        </p>
      </div>

      {/* Lottie Animation Section */}
      <div className="w-full max-w-md">
        <Lottie animationData={registerAnimation} loop={true} />
      </div>
    </div>
  );
};

export default Register;
