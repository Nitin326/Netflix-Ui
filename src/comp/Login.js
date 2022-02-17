import React from 'react';
import Navs from '../comp/Navs';
import '../Assats/Style/login.css'
import { NavLink } from "react-router-dom";


const Login = () => {
  return (
    <>
      <div className='landing'>
        <Navs />
        <div className='form'>
          <h2 className='form-heading'>Sign In</h2>
          <form>
            <div className='form-field'>
              <input type="text" className='input-fields' name="name" placeholder='Email or Phone Number' required />
            </div>
            <div className='form-field'>
              <input type="password" className='input-fields' name="name" placeholder='Password' required />
            </div>
            <button type="submit" className='submit-btn'>Sign In</button>
          </form>
          <p className='form-text' >New to Netflix? <NavLink to='/' className='link-text'> Sign up now.</NavLink></p>
        </div>
      </div>
    </>
  )
}

export default Login