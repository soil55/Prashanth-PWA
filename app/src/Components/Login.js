import React from 'react'
import './Style.css';
import {Routes, Route, useNavigate} from 'react-router-dom';
import Email from './Email';

function Login() {
  const navigate  = useNavigate();
  const navigatetoEmail = (event)=>{
    event.preventDefault();
    navigate('/Email')
  }
  return (
   <>
   <div className="login-container">
        <h2>Join aaa now - It's free!</h2>
        <form className="login-form" onSubmit={navigatetoEmail}>
            <br/>
        <label htmlFor="email">Email</label>
        <input class="login-input" type="email" id="email" placeholder="Enter your email" required/>
        <br/>
        <label htmlFor="password">Password</label>
        <input class="login-input" type="password" id="password" placeholder="Enter your password" required/>
        <br/>
        <label htmlFor="confirm-password">Confirm Password</label>
        <input class="login-input" type="password" id="confirm-password" placeholder="Confirm your password" required/>
        <br/>
        <button class="login-button" type="submit" >Continue</button>
        <br/>
        <p>Already a member of aaa?<a href="/Signup" style={{color:"blue"}}>Sign up</a></p>
        </form>
    </div>

   </>
  )
}

export default Login