import React from 'react';
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand
} from 'mdb-react-ui-kit';
import Navbar from 'react-bootstrap/Navbar';
import Logo from './Logo.png'
import './NavBar.css';

export default function App() {

  
  return (
  
    <Navbar fixed="top" expand="lg" style={{color: 'red',padding:0}}>
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
                  <li><a href="Admin">Admin</a></li>
                  <li><a href="Employee">Register</a></li>
                  <li><a href="Home">Home</a></li>
                </div>


              </ul>
            </div>

          </MDBNavbarBrand>
        </MDBContainer>
      </MDBNavbar>
      </Navbar>
    
  );
}