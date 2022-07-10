import React, { useState, useRef, useEffect } from "react"
import { useNavigate } from "react-router-dom";
import './Login.css';
export default function (props) {
  const navigate = useNavigate()
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const Email = useRef();
  const Password = useRef();
  const getEmail = localStorage.getItem("EmailData")
  const getPassword = localStorage.getItem("PasswordData")
  
  function emailHandler(e) {
    setEmail(e.target.value);
  }
  function passwordHandler(e) {
    setPassword(e.target.value);
  }
  function submitHandler(e) {
    e.preventDefault();
    if (Email.current.value === "admin@gmail.com" && Password.current.value === "admin") {
      localStorage.setItem("EmailData", "admin@gmail.com")
      localStorage.setItem("PasswordData", "admin")
      navigate('/Dashboard');
    }
  }

  return (

    <div className="Auth-form-container">
        <form className="Auth-form">
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Sign In</h3>
            <div className="form-group mt-3">
              <label>Email address</label>
              <input
                value={email}
                type="email"
                className="form-control mt-1"
                placeholder="Enter email"
                onChange={emailHandler}
                ref={Email}
              />
            </div>
            <div className="form-group mt-3">
              <label>Password</label>
              <input
                value={password}
                type="password"
                className="form-control mt-1"
                placeholder="Enter password"
                onChange={passwordHandler}
                ref={Password}
              />
            </div>
            <div className="d-grid gap-2 mt-3">
              <button type="submit" className="btn btn-primary" onClick={submitHandler}>
                Login
              </button>
            </div>
            <p className="forgot-password text-right mt-2">
              Forgot <a href="#">password?</a>
            </p>
          </div>
        </form>
    
    </div>
  )
}