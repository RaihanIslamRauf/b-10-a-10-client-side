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

        navigate("/");
      })
      .catch((error) => {
        console.error("Login error:", error);
        alert("Failed to log in. Please check your credentials.");
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

        // Show success SweetAlert
        Swal.fire({
          icon: "success",
          title: "Login Successful",
          text: "You are logged in with Google.",
        });

        navigate("/");
      })
      .catch((error) => {
        console.error("Google sign-in error:", error);
        // Show error SweetAlert
        Swal.fire({
          icon: "error",
          title: "Google Login Failed",
          text: "Please try again.",
        });
      });
  };

  return (
    <div className="min-h-screen bg-base-200 flex justify-center items-center">
      <div className="card bg-base-100 w-full max-w-lg shrink-0 rounded-md p-10">
        <h2 className="text-2xl font-semibold text-center">Login your account</h2>
        <form onSubmit={handleSignIn} className="card-body">
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
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              name="password"
              type="password"
              placeholder="password"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control mt-6">
            <button className="btn bg-[#FF5103] rounded-md text-white">
              Login
            </button>
          </div>
        </form>
        <p className="ml-8 mb-4">
          <button
            onClick={handleGoogleSignIn}
            className="w-1/2 btn bg-red-600 rounded-md text-white"
          >
            <FaGoogle /> Login with Google
          </button>
        </p>
        <p className="text-center font-semibold">
          Don’t have an account?{" "}
          <Link to="/register" className="text-[#FF5103]">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
