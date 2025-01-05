import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { FaGoogle } from "react-icons/fa";

const Login = () => {
  const { userLogin, setUser, signInWithGoogle } = useContext(AuthContext);
  const [error, setError] = useState({});
  const location = useLocation();
  const navigate = useNavigate();


  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    userLogin(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
        navigate(location?.state ? location.state : "/");
      })
      .catch((err) => {
        setError({ ...error, login: err.code })
      });
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        navigate("/");
      })
      .catch((err) => {
        setError({ ...error, login: err.code })
      });
     ;
  };

  return (
    <div className="min-h-screen bg-base-200 flex justify-center items-center">
      <div className="card bg-base-100 w-full max-w-lg shrink-0 rounded-md p-10">
        <h2 className="text-2xl font-semibold text-center">
          Login your account
        </h2>
        <form onSubmit={handleSubmit} className="card-body">
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
            {error.login && (
              <label className="label text-sm text-red-600">
                {error.login}
              </label>
            )}
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn bg-[#0284C7] rounded-md text-white">
              Login
            </button>
          </div>
        </form>
        <p className="ml-8 mb-4">
            <button onClick={handleGoogleSignIn} className="w-1/2 btn bg-red-600 rounded-md text-white">
            <FaGoogle></FaGoogle> Login with Google
            </button>
          </p>
        <p className="text-center font-semibold">
          Dont`t have An Account?{" "}
          <Link to="/register" className="text-sky-600">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
