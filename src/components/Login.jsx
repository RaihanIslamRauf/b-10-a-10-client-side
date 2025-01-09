import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { FaGoogle } from "react-icons/fa";

const Login = () => {
  const { userLogin, signInWithGoogle } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSignIn = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    // console.log(email, password);
    userLogin(email, password)
      .then((result) => {
        // console.log(result.user);

        // Update last login time
        const lastSignInTime = result?.user?.metadata?.lastSignInTime;
        const loginInfo = { email, lastSignInTime };

        fetch(`https://b-10-a-10-server-side.vercel.app/users`, {
          method: "PATCH",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(loginInfo),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log("sign in info updated in db", data);
          });

        // Redirect to home page after login
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        // console.log(result.user);

        const lastSignInTime = result?.user?.metadata?.lastSignInTime;
        const loginInfo = { email: result.user.email, lastSignInTime };

        fetch(`https://b-10-a-10-server-side.vercel.app/users`, {
          method: "PATCH",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(loginInfo),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log("sign in info updated in db", data);
          });

        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="min-h-screen bg-base-200 flex justify-center items-center">
      <div className="card bg-base-100 w-full max-w-lg shrink-0 rounded-md p-10">
        <h2 className="text-2xl font-semibold text-center">
          Login your account
        </h2>
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
            <FaGoogle></FaGoogle> Login with Google
          </button>
        </p>
        <p className="text-center font-semibold">
          Dont`t have An Account?{" "}
          <Link to="/register" className="text-[#FF5103]">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
