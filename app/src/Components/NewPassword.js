import React from 'react'
import "./Style.css";

function NewPassword() {
  return (
    <>
    <div className="login-container">
        <h2>Choose a New Password</h2>
        <form className="login-form">
        <p>Choose a Strong password for the Account</p>
        
        <label for="password">New Password*</label>
        <input class="login-input" type="password" id="password"  required/>
        <br/>
        <label for="pass">Re Enter New Password*</label>
        <input class="login-input" type="password" id="pass" required/>
        <br/>
        <button class="login-button" type="submit">Continue</button>
        <div className="paragraph-container">
        </div>
    </form>
    </div>
    </>
  )
}

export default NewPassword