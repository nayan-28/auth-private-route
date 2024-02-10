import { NavLink } from "react-router-dom";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import auth from "../../firebase/firebase.config";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
const Register = () => {
  const authInfo = useContext(AuthContext);
  const { createUser } = authInfo;

  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    createUser(email, password)
      .then((result) => {
        console.log("Successfully Register", result.user);
      })
      .catch((error) => {
        console.error(error.message);
      });
  };
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="text-center lg:text-left">
            <h1 className="text-3xl text-center">Register Here</h1>
          </div>
          <form onSubmit={handleRegister} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Name"
                className="input input-bordered"
                required
                name="name"
              />
            </div>
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
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Register Now</button>
            </div>
          </form>
          <p>
            Already have an account?
            <button>
              <NavLink to="/login">Login Now</NavLink>
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
