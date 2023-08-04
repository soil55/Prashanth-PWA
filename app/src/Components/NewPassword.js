import React from 'react'
import "./Style.css";
import { useNavigate } from 'react-router-dom';

function NewPassword() {
  const navigate = useNavigate();
  const navigateFinal = (event)=>{
      event.preventDefault();
      navigate('/Final');
  }
  return (
    <>
    <div className="login-container">
        <h2>Choose a New Password</h2>
        <form className="login-form" onSubmit={navigateFinal}>
        <p>Choose a Strong password for the Account</p>
        
        <label for="password">New Password*</label>
        <input class="login-input" type="password" id="password"  required/>
        <br/>
        <label for="pass">Re Enter New Password*</label>
        <input class="login-input" type="password" id="pass" required/>
        <br/>
        <button class="login-button" type="submit">Submit</button>
        <div className="paragraph-container">
        </div>
    </form>
    </div>
    </>
  )
}

export default NewPassword