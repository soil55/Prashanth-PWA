import React from 'react'
import "./Style.css";

function Forgotpass() {
  return (
    <>
     <div className="login-container">
        <h2>Forgot Password?</h2>
        <p>Reset your password by email.</p>
        <form className="login-form">
        <br/>
        <label for="email">Email</label>
        <input class="login-input" type="email" id="email" placeholder="Enter your email" required/>
        <br/><br/>
        <button class="login-button" type="submit">Reset Password</button>
        <div className="passage-container">
        <p><a href="#">Back</a></p>
        </div>
        
      
        </form>
    </div>
    </>
  )
}

export default Forgotpass