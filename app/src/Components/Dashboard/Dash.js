import React from 'react'
import Avatar from './Avatar'
import Nav from '../Navigation'
import { useNavigate } from 'react-router-dom'

function Dash() {
    const nav = useNavigate();
    const navigate = ()=>{
        nav("/Profile");
    }
    return (
        <>

            <div className="setting-container">
                <h3>Account Settings</h3>
                <Avatar />
                <div className="options">
                <div className='setting-items'>
                <button  onClick={navigate}class="option">Change Details</button>
                <br/><br/>
                <button class="option">Help</button>           
                </div>
                </div>
                <Nav/>
            </div>
        </>
    )
}

export default Dash