import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { FaGoogle } from "react-icons/fa";
import Swal from "sweetalert2";

const Login = () => {
  const { signIn, signInWithGoogle } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSignIn = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    signIn(email, password)
      .then((result) => {
        const lastSignInTime = result?.user?.metadata?.lastSignInTime;
        const loginInfo = { email, lastSignInTime };

        fetch(`https://b-10-a-10-server-side.vercel.app/users`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(loginInfo),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log("Sign-in info updated in DB", data);
          });

        // Show success alert for normal login
        Swal.fire({
          icon: "success",
          title: "Login Successful",
          text: "You have successfully logged in.",
        });

        navigate("/");
      })
      .catch((error) => {
        console.error("Login error:", error);
        Swal.fire({
          icon: "error",
          title: "Login Failed",
          text: "Failed to log in. Please check your credentials.",
        });
      });
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        const lastSignInTime = result?.user?.metadata?.lastSignInTime;
        const loginInfo = { email: result.user.email, lastSignInTime };

        fetch(`https://b-10-a-10-server-side.vercel.app/users`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(loginInfo),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log("Sign-in info updated in DB", data);
          });

        Swal.fire({
          icon: "success",
          title: "Login Successful",
          text: "You are logged in with Google.",
        });

        navigate("/");
      })
      .catch((error) => {
        console.error("Google sign-in error:", error);
        Swal.fire({
          icon: "error",
          title: "Google Login Failed",
          text: "Please try again.",
        });
      });
  };

  return (
    <div className="min-h-screen bg-[#E2DFD2] dark:bg-gray-800 flex justify-center items-center px-4">
      <div className="card w-full max-w-lg bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-white rounded-md p-10 shadow-md">
        <h2 className="text-2xl font-semibold text-center mb-4">
          Login to your account
        </h2>
        <form onSubmit={handleSignIn} className="card-body p-0 space-y-4">
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
          <div className="form-control">
            <label className="label">
              <span className="label-text text-gray-700 dark:text-gray-300">Password</span>
            </label>
            <input
              name="password"
              type="password"
              placeholder="password"
              className="input input-bordered bg-gray-100 dark:bg-gray-800 dark:border-gray-700 text-gray-800 dark:text-white"
              required
            />
          </div>
          <div className="form-control">
            <button className="btn bg-[#FF5103] hover:bg-[#e44902] text-white rounded-md">
              Login
            </button>
          </div>
        </form>

        <div className="flex justify-center mt-4">
          <button
            onClick={handleGoogleSignIn}
            className="btn bg-red-600 hover:bg-red-700 text-white rounded-md w-full md:w-1/2"
          >
            <FaGoogle className="mr-2" /> Login with Google
          </button>
        </div>

        <p className="text-center font-semibold mt-4 text-gray-700 dark:text-gray-300">
          Don’t have an account?{" "}
          <Link to="/register" className="text-[#FF5103] hover:underline">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
