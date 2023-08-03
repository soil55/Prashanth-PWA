import React from 'react'
import "./Style.css"

function Academic() {
    return (
        <>
            <div className="login-container">
                <h2>Add Your Academic Details</h2>
                <form className="login-form">
                    <br />
                    <label for="University">School/University*</label>
                    <input class="login-input" type="text" id="University" placeholder="School/University" required />
                    <br />
                    <label for="Deg">Degree*</label>
                    <input class="login-input" type="text" id="Deg" placeholder="Degree" required />
                    <br />
                    <label for="spec">Specialization*</label>
                    <input class="login-input" type="text" id="spec" placeholder="Enter Specialization" required />
                    <br />
                    <span className="sp-container">
                        <div className="dropdown-container">
                            
                            <select id="gender" className="gender-dropdown">
                                <option value="male">Start Date</option>
                            </select>
                        </div>
                        <div className="dropdown-container">
                         
                            <select id="gender" className="gender-dropdown">
                                <option value="male">End Date</option>
                            </select>
                        </div>
                    </span>
                    <button class="login-button" type="submit">Submit</button>
                    <br />
                </form>
            </div>
        </>
    )
}

export default Academic