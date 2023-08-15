import React, { useState } from 'react'
import "./Style.css";
import { useNavigate } from 'react-router-dom';

function Email() {
  const [code,setcode] = useState('');
  const [error,seterror] = useState(null);
  const handlecode = event =>{
    const value = event.target.value;
    setcode(value);

    if(code.length==4){
      seterror(null);      
    }else seterror("Wrong code entered");
  }
  const navigate = useNavigate();
  const navigatetouserDetails = (event)=>{
    event.preventDefault();
    navigate('/UserDetails');
  }
  return (
    <div className="login-container">
    <h2>We have Sent a 5 digit Verification Code</h2>
    <form className="login-form" onSubmit={navigatetouserDetails}>
    <p>virat*******@gmail.com.<a href="#">Change Email</a></p> 
    <br/>   
    <label for="num">5-Digit Verification Code*</label>
        <input class="login-input" type="text" id="num" value={code} onChange={handlecode}required />
    <br/>
    <br/>
    {error && <div style={{color:'red'}}>{error}</div>}
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