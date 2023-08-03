import React from 'react'
import './Style.css';

function UserDetails() {
    return (
        <>
            <div className="login-container">
                <h2>Join a2i now - It's free!</h2>
                <form className="login-form">
                    <br />
                    <label for="first">First Name*</label>
                    <input class="login-input" type="text" id="first" required />
                    <br />
                    <label for="last">Last Name*</label>
                    <input class="login-input" type="text" id="last" required />
                    <br />
                    <label for="dob">DOB*</label>
                    <input class="login-input" type="text" id="dob" required />
                    
                    <div className="dropdown-container">
                        <label for="gender" className="dropdown-label">Gender</label>
                        <select id="gender" className="gender-dropdown">
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                        </select>
                    </div>
                    <div className="paragraph-container">
                        <p>By clicking Agree and Join,you agree to all</p> <p><a href="#" style={{ color: "blue" }}>User Agreement,Privacy policy</a>and <a href="#" style={{ color: "blue" }}>Cookie policy</a></p>
                    </div>
                    <br />

                    <button class="login-button" type="submit">Agree and Join</button>
                    <br />

                </form>
            </div>
        </>
    )
}

export default UserDetails