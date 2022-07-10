import React,{useState,} from 'react'
import axios from 'axios';
import './Login.css';
function SignUp() {
  const [userName,setUserName]= useState('');
  const [Postion,setPostion]= useState('');
  const [Tasks,setTask]= useState('');
  const [Email,setEmail]= useState('');
  const [Password,setPassword]= useState('');

  function useNameHandler(e){
  setUserName(e.target.value);
  }
  function postionHandler (e){
    setPostion(e.target.value);
    
    }
    function taskHandler(e){
      setTask(e.target.value);
      
    }
    function emailHandler(e){
      setEmail(e.target.value);
     
    }
   function passwordHandler(e){
     setPassword(e.target.value)
   }
 async function submitHandler(e){
  e.preventDefault();
  
   const data={
     userName,
     Postion,
     Tasks,
     Email,
      Password
   }
  const response=await axios.post("http://localhost:4000/user",data).then(res=>console.log(res)) 
 }


  return (
    <div className="Auth-form-container">
    <form className="Auth-form">
      <div className="Auth-form-content">
        <h3 className="Auth-form-title">Register</h3>
        <div className="text-center">
          Already registered?{" "}
          <span className="link-primary" >
            Sign In
          </span>
        </div>
        <div className="form-group mt-3">
          <label>Full Name</label>
          <input
          value={userName}
            type="text"
            className="form-control mt-1"
            placeholder="e.g Alvin Fiston"
            onChange={useNameHandler}
          />
        </div>
        <div className="form-group mt-3">
          <label>Position</label>
          <input
          value={Postion}
            type="text"
            className="form-control mt-1"
            placeholder="e.g CEO"
            onChange={postionHandler}
          />
        </div>
        <div className="form-group mt-3">
          <label>Tasks</label>
          <input
          value={Tasks}
            type="text"
            className="form-control mt-1"
            placeholder="e.g study"
            onChange={taskHandler}
          />
        </div>
        <div className="form-group mt-3">
          <label>Email address</label>
          <input
          value={Email}
            type="email"
            className="form-control mt-1"
            placeholder="Email Address"
            onChange={emailHandler}
          />
        </div>
        <div className="form-group mt-3">
          <label>Password</label>
          <input
          value={Password}
            type="password"
            className="form-control mt-1"
            placeholder="Password"
            onChange={passwordHandler}
          />
        </div>
        <div className="d-grid gap-2 mt-3">
          <button type="submit" className="btn btn-primary"  onClick={submitHandler}>
            Submit
          </button>
        </div>
       
      </div>
    </form>
  </div>
  )
}

export default SignUp