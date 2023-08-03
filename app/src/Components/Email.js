import React from 'react'
import "./Style.css";

function Email() {
  return (
    <div className="login-container">
    <h2>We have Sent a 5 digit Verification Code</h2>
    <form className="login-form">
    <p>virat*******@gmail.com.<a href="#">Change Email</a></p> 
    <br/>   
    <label for="num">5-Digit Verification Code*</label>
        <input class="login-input" type="Number" id="num" required />
    <br/>
    <br/>
    <p><a href="#">Resend Code</a></p>
    <button class="login-button" type="submit">Continue</button>
    <div>
        <p>Note:If you dont have the email in your inbox check spam.</p>
    </div>
        </form>    
    </div>
  )
}

export default Email