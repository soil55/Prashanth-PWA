import React from 'react'
import "./Style.css";
import { useNavigate } from 'react-router-dom';

function VerifyEmail() {
  const navigate = useNavigate();
  const navigatetoNewpass = (event)=>{
    event.preventDefault();
    navigate('/NewPassword');
  }
  return (
    <>
     <div className="login-container">
                <h2>Verify your Email</h2>
                <p>We have sent a Verification code to the email account.</p>
                <br/>
                <form className="login-form" onSubmit={navigatetoNewpass}>
                <label for="num" style={{textAlign:"left"}}>5-Digit Verification Code*</label>
                    <input class="login-input" type="text" id="num" required />
                <br/>
                <br/>
                <p>Resend Code</p>
                <button class="login-button" type="submit">Verify</button>
                </form>
    </div>
    </>
  )
}

export default VerifyEmail