import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import Companylogo from "../img/companylogo.png";
import earth from "../img/earth.gif";
const Login = () => {
  const [err, setErr] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (err) {
      setErr(true);
    }
  };
  return (
    <div className="formContainer">
      <div className="formContainer1">
        <div className="formWrapper">
          <div className="companylogo">
            <img src={Companylogo} />
            <span className="logo">
              <h2>Chat_</h2>
              <img src={earth} alt="img not found" />
              <h2>n...</h2>
            </span>
          </div>

          <span className="title">Login</span>
          <form onSubmit={handleSubmit}>
            <div className="inputbox">
              <input type="email" required />
              <label htmlFor="">Email</label>
            </div>
            <div className="inputbox">
              <input type="password" required />
              <label htmlFor="">Password</label>
            </div>
            <button>
              <span>Sign in</span>
            </button>
            {err && <span>you did't have account. Please sign in</span>}
          </form>
          <p>
            You don't have an account?{" "}
            <Link to="/register" style={{ color: "#e32d2d" }}>
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
