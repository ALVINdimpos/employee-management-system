import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer';
import './Landing.css'
import {useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate()
  const getHandler=(e)=>{
    e.preventDefault();
    navigate('/Employee');
  }
  const empHandler=(e)=>{
    e.preventDefault();
    navigate('/EmpDashboard');
  }
  return (
    <div>

    <NavBar></NavBar> 
    
    <div className="container right-panel-active">
  {/* Sign Up */}
  <div className="container__form container--signin">
    <form action="#" className="form" id="form2">
      <h2 className="form__title">Sign In</h2>
      <input type="email" placeholder="Email" className="input" />
      <input type="password" placeholder="Password" className="input" />
      <a href="#" className="link">Forgot your password?</a>
      <button className="btn" onClick={empHandler}>Sign In</button>
      
    </form>
  </div>
  {/* Sign In */}
  
  {/* Overlay */}
  <div className="container__overlay">
    <div className="overlay">
    <h1>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      Welcome!</h1>
      <div className="overlay__panel overlay--left">
      
          <button className="btn" onClick={getHandler}>Get started</button>
      </div>
  
    </div>
  </div>
</div>
    <div className='mainf'></div>
     <Footer></Footer>
   
    </div>
  )
}

export default Home