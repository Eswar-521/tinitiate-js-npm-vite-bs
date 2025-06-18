import { Link } from "react-router-dom";

const Login = () => {
  return (

    <div className="container mt-4">
       <div className="d-flex justify-content-end">
       <Link to="/" className="btn btn-outline-primary">🏠 Return to Home</Link>
       </div>
      <div className="row justify-content-center">
      <div className="col-md-6 col-lg-5">
      <div className="card p-4 shadow">
      <form className="w-50 mx-auto">
      <h2>Login</h2>
        <input type="email" className="form-control my-2" placeholder="Email" />
        <input type="password" className="form-control my-2" placeholder="Password" />
        <button className="btn btn-primary w-100">Login</button>
      </form>
      <p className="mt-3 text-center">
        Don't have an account? <Link to="/signup">Signup</Link>
      </p>
      </div>
      </div>
    </div>
    </div>
  );
};

export default Login;

