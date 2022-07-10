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
      <button className="btn">Sign In</button>
      
    </form>
  </div>
  {/* Sign In */}
  
  {/* Overlay */}
  <div className="container__overlay">
    <div className="overlay">
      <div className="overlay__panel overlay--left">
        
       <h3>Lorem ipsum dolor sit amet, consec tetur adipisicing
          elit, sed do eiusmod tempor incididuntut consec tetur 
          adipisicing elit,Lorem ipsum dolor sit amet.</h3>
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