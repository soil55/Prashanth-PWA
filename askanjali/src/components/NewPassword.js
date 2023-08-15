import React,{useState} from 'react'
import "./Style.css";
import { useNavigate } from 'react-router-dom';

function NewPassword() {
  const [pass1,setpass1] = useState('');
  const [pass2,setpass2] = useState('');

  const [error,seterror] = useState(null);
  const handlechange1 = event =>{
    const value = event.target.value;
    setpass1(value);

  }
  const handlechange2 = event =>{
    const value = event.target.value;
    setpass2(value);

  }

  const navigate = useNavigate();
  const navigateFinal = (event)=>{
      event.preventDefault();
      if(pass1.length!=pass2.length){
        seterror("Passwords must be same!!")
      }
      else navigate('/Final');
  }
  return (
    <>
    <div className="login-container">
        <h2>Choose a New Password</h2>
        <form className="login-form" onSubmit={navigateFinal}>
        <p>Choose a Strong password for the Account</p>
        
        <label for="password">New Password*</label>
        <input class="login-input" type="password" id="password" value={pass1} onChange={handlechange1}required/>
        <br/>
        <label for="pass">Re Enter New Password*</label>
        <input class="login-input" type="password" id="pass" value={pass2} onChange={handlechange2}required/>
        <br/>
        {error && <div style={{color:'red'}}>{error}</div>}
        <button class="login-button" type="submit">Submit</button>
        <div className="paragraph-container">
        </div>
    </form>
    </div>
    </>
  )
}

export default NewPassword