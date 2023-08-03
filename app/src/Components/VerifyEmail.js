import React from 'react'
import "./Style.css";

function VerifyEmail() {
  return (
    <>
     <div className="login-container">
                <h2>Verify your Email</h2>
                <p>We have sent a Verification code to the email account.</p>
                <br/>
                <label for="num" style={{textAlign:"left"}}>5-Digit Verification Code*</label>
                    <input class="login-input" type="Number" id="num" required />
                <br/>
                <br/>
                <p>Resend Code</p>
                <button class="login-button" type="submit">Submit</button>
    </div>
    </>
  )
}

export default VerifyEmail