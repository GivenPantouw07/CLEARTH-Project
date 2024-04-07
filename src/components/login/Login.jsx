import React from "react";
import App from "../../App";

const Login = () => {
  return (
    <div className="card">
      <h1>WELCOME BACK!</h1>
      <h2>Please log in to continue</h2>
      <form>
        <div className="form-group">
          <label htmlFor="username">Username or Email</label>
          <input type="text" id="username" name="username" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" />
        </div>
        <p>
          Don't have an account? <a href="/signup">Sign up</a>
        </p>
        <button type="submit">LOG IN</button>
      </form>
    </div>
  );
};

export default Login;
