import React from 'react'
import "./Style.css";
import { useNavigate } from 'react-router-dom';


function Signup() {
  const navigate  = useNavigate();
  const navigatetoLand = (event)=>{
    event.preventDefault();
    navigate('/Landing');
  }
  return (
    <>
    <div className="login-container">
        <h2>Sign in</h2>
        <form className="login-form" onSubmit={navigatetoLand}>
            <br/>
        <label for="email">Email</label>
        <input class="login-input" type="email" id="email" placeholder="Enter your email" required/>
        <br/>
        <label for="password">Password</label>
        <input class="login-input" type="password" id="password" placeholder="Enter your password" required/>
        <br/>
        <button class="login-button" type="submit">Continue</button>
        <div className="paragraph-container">
        <p><a href="/Forgotpass">Forgot Password?</a></p>
        <p>New Member?<a href="/" style={{color:"blue"}}>Register Now</a></p>
        </div>
      
        </form>
    </div>
    </>
  )
}

export default Signup