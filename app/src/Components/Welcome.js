import React from 'react'
import "./Style.css"

function Welcome() {
    return (
        <>
            <div className="login-container">
                <h2>Welcome,UserName</h2>
                <p>Lets get Started.Start now and get job ready</p>
                <div className="dropdown-container">
                        <label for="gender" className="dropdown-label">Location*</label>
                        <select id="gender" className="gender-dropdown">
                            <option value="male">North Carolina</option>
                            <option value="female">Boston</option>
                            <option value="other">Other</option>
                        </select>
                </div>
                <br/>
                <button class="login-button" type="submit">Agree and Join</button>
            </div>
        </>
    )
}

export default Welcome