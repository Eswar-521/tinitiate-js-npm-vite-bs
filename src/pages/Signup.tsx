import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-end">
        <Link to="/" className="btn btn-outline-primary">🏠 Return to Home</Link>
      </div>
      
      <div className="row justify-content-center">
        <div className="col-md-6 col-lg-5">
          <div className="card p-4 shadow">
            <h2 className="text-center">Signup</h2>
      <form className="w-50 mx-auto">
        <input type="text" className="form-control my-2" placeholder="Username" />
        <input type="email" className="form-control my-2" placeholder="Email" />
        <input type="password" className="form-control my-2" placeholder="Password" />
        <button className="btn btn-primary w-100">Register</button>
      </form>
      <p className="mt-3">
        Already have an account? <Link to="/login">Login</Link>
        </p>
    </div>
    </div>
    </div>
    </div>
  );
};

export default Signup;
