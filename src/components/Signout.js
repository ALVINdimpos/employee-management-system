import React from 'react';
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand
} from 'mdb-react-ui-kit';
import Logo from './Logo.png'
import './NavBar.css';
import NavBar from 'react-bootstrap/Navbar';

export default function App() {
    const signoutHandler=()=>{
        localStorage.clear();
        window.location.replace("http://localhost:3000");

    }
  return (
    <>
    <NavBar  fixed="top" expand="lg" style={{color: 'red',padding:0}} >
      <MDBNavbar light bgColor='light'>
        <MDBContainer fluid>
          <MDBNavbarBrand href='#'>
            <img
              src={Logo}
              height='40'
              alt=''
              loading='lazy'
            />
            &nbsp;&nbsp;&nbsp;  <h3 className='header'>Employee Management System</h3>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <div className='nav_items'>
              <ul>
                <div>
                  <li><a href="Admin" onClick={signoutHandler}>Sign Out</a></li>
                  <li><a href="Employee">Register</a></li>
                  <li><a href="Home">Home</a></li>
                </div>


              </ul>
            </div>

          </MDBNavbarBrand>
        </MDBContainer>
      </MDBNavbar>
      </NavBar>
    </>
  );
}