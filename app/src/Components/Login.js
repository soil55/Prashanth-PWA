import React from 'react'
import './Style.css';

function Login() {
  return (
   <>
   <div className="login-container">
        <h2>Join a2i now - It's free!</h2>
        <form className="login-form">
            <br/>
        <label for="email">Email</label>
        <input class="login-input" type="email" id="email" placeholder="Enter your email" required/>
        <br/>
        <label for="password">Password</label>
        <input class="login-input" type="password" id="password" placeholder="Enter your password" required/>
        <br/>
        <label for="confirm-password">Confirm Password</label>
        <input class="login-input" type="password" id="confirm-password" placeholder="Confirm your password" required/>
        <br/>
        <button class="login-button" type="submit">Continue</button>
        <br/>
        <p>Already a member of a2i?<a href="#" style={{color:"blue"}}>Sign up</a></p>
        </form>
    </div>

   </>
  )
}

export default Login