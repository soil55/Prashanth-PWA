import React, { useState } from 'react'
import './Style.css';
import {Routes, Route, useNavigate} from 'react-router-dom';
import Email from './Email';

function Login() {
  const [pass1,setpass1] = useState('');
  const [pass2,setpass2] = useState('');

  const [error,seterror] = useState(null);

  const navigate  = useNavigate();
  const handlechange1 = event =>{
    const value = event.target.value;
    setpass1(value);

    if(pass1.length<8){
      seterror("password must be of 8 characters");
    }else seterror(null);
  }
  const handlechange2 = event =>{
    const value = event.target.value;
    setpass2(value);

    if(pass1.length<8){
      seterror("password must be of 8 characters");
    }else seterror(null);
  }
  const navigatetoEmail = (event)=>{
    event.preventDefault();
    if(pass1.length<8 || pass2.length<8){
      seterror("password must be of 8 characters in length");
    }
    else if(pass1.length!=pass2.length){
      seterror("passwords must be same");
    }
    else navigate('/Email')
  }
  return (
   <>
   <div className="login-container">
        <h2>Join aaa now - It's free!</h2>
        <form className="login-form" onSubmit={navigatetoEmail}>
            <br/>
        <label htmlFor="email">Email</label>
        <input class="login-input" type="email" id="email" placeholder="Enter your email" required/>
        <br/>
        <label htmlFor="password">Password</label>
        <input class="login-input" type="password" id="password" placeholder="Enter your password" value={pass1} onChange={handlechange1}required/>
        <br/>
        <label htmlFor="confirm-password">Confirm Password</label>
        <input class="login-input" type="password" id="confirm-password" placeholder="Confirm your password" value={pass2} onChange={handlechange2} required/>
        <br/>
        {error && <div style={{color:'red'}}>{error}</div>}
        <button class="login-button" type="submit" >Continue</button>
        <br/>
        <p>Already a member of aaa?<a href="/Signup" style={{color:"blue"}}>Sign up</a></p>
        </form>
    </div>

   </>
  )
}

export default Login