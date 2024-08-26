import React from "react";
import { Link } from "react-router-dom";
import { GoogleLogin } from "react-google-login";
import "./index.css";

const LoginPage = () => {
  const responseGoogle = (response) => {
    console.log(response);
  };

  return (
    <div className="card">
      <h2>Create a new account</h2>

      <GoogleLogin
        clientId="442888129617-vlv786stuk4nkilt6faspo2ma9g68kqk.apps.googleusercontent.com"
        buttonText="Login with Google"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={"single_host_origin"}
      />
      <br />
      <button style={{ marginTop: "10px" }}>Create an account</button>
      <p>
        Already have an account? <Link className="link">SignIn</Link>
      </p>
    </div>
  );
};

export default LoginPage;
