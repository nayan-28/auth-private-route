import {
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
} from "firebase/auth";
import auth from "../../firebase/firebase.config";
import { NavLink } from "react-router-dom";
import { useRef, useState } from "react";

const Login = () => {
  const [loginSuccess, setLoginSuccess] = useState("");
  const [loginError, setLoginError] = useState("");
  const emailRef = useRef(null);
  const [resetEmail, setResetEmail] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    setLoginError("");
    setLoginSuccess("");
    setResetEmail("");

    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        if (result.user) {
          setLoginSuccess("Successfully logged in");
        }
      })
      .catch((error) => {
        setLoginError(error.message);
      });
  };

  const handleForgetPassword = () => {
    const email = emailRef.current.value;
    if (!email) {
      console.log("Please Write your email");
      return;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      console.log("Please write your email correctly");
      return;
    } else {
      sendPasswordResetEmail(auth, email)
        .then(() => {
          setResetEmail("Please Check your email");
        })
        .catch((error) => console.log(error));
    }
  };
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="text-center lg:text-left">
            <h1 className="text-3xl text-center">Login now</h1>
          </div>
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
                required
                name="email"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
                required
                name="password"
              />
              <label className="label">
                <NavLink
                  onClick={handleForgetPassword}
                  className="label-text-alt link link-hover"
                >
                  Forgot password?
                </NavLink>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
          {loginSuccess && <p className="text-green-600">{loginSuccess}</p>}
          {loginError && <p className="text-red-600">{loginError}</p>}
          {resetEmail && <p className="text-green-600">{resetEmail}</p>}
          <p>
            Don't have an account?
            <button>
              <NavLink to="/register">Register Now</NavLink>
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
