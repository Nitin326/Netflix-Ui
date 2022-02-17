import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'
import logo from '../Assats/Images/logo.png'
import { NavLink } from "react-router-dom";

const Navs = () => {
  return (
    <>
      <Navbar bg="transparent">
        <Container>
          <NavLink to="/">
            <img
              src={logo}
              width="130"
              height="45 "
              className="d-inline-block align-top mt-2 pt-2"
              alt="React Bootstrap logo"
              style={{cursor:'pointer'}}
            />
          </NavLink>
          <Nav className="ml-auto mr-5 mt-2 mb-1">
            <NavLink to="/login" 
            style={{
              backgroundColor:'#e7212be3', 
              padding:'7px 15px 7px 15px',
              color:'white',
              fontWeight:'500',
              borderRadius:'5px',
              textDecoration:'none'
            }}>Sign In</NavLink>
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}

export default Navs