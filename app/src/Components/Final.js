import React from 'react'
import "./Style.css";
import { useNavigate } from 'react-router-dom';

function Final() {
  const navigate = useNavigate();
  const navigatetosignup = ()=>{
    navigate('/Signup');
  }
  return (
   <>
   <div className="login-container">
    <h2>Your Password has been successfully changed</h2>
    <img src="https://img.freepik.com/premium-vector/concept-hard-work-burden-obstacle-business-difficulty-struggle-challenge-success_675567-1225.jpg?w=2000"/>
    <br/><br/>
    <button class="login-button" type="submit" onClick={navigatetosignup}>Return to Sign in</button>
   </div>
   </>
  )
}

export default Final