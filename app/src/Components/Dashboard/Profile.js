import React from 'react'
import Nav from '../Navigation'

function Profile() {
  return (
    <>
    <div className="Profile-container">   
      <div className="Logos" style={{marginBottom:"30px"}}>
      <img style={{width:"69px",height:"39px",display:"inline-block",marginRight:"150px"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNub64JFaffLdd-56WV29Y8bEdyFt8biJUzQ&usqp=CAU"/>
      <img style={{width:"50px",height:"50px",display:"inline-block"}} src="https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png"/>
      </div>
      <div className="Stats-container">
        <div className="stats">
          <p>Name:</p>
          <p>Age:</p>
        </div>
      </div>
      <div className="login-form" style={{width:"314px"}}>
        <h3>Profile Info</h3>
    
      <input class="login" type="text" id="University" placeholder="Name"/>
    
      <input class="login" type="text" id="University" placeholder="Email"/>
    
      <input class="login" type="text" id="University" placeholder="Phone Number"/>
      <input class="login" type="text" id="University" placeholder="LinkdIn URL"/>
    
      <h3>Academic Info</h3>
      <input class="login" type="text" id="University" placeholder="College"/>
    
      <input class="login" type="text" id="University" placeholder="Degree/Specialization"/>
    
      <input class="login" type="text" id="University" placeholder="Year of Passing"/>
      <input class="login" type="text" id="University" placeholder="CGPA"/>

      <h3>Projects</h3>
      <input class="login" type="text" id="University" placeholder="Name"/>
    
      <input class="login" type="text" id="University" placeholder="Description"/>
    
      <input class="login" type="text" id="University" placeholder="Github Link"/>
      <button className="addbutton">Add Projects</button>
      <h3>Experience</h3>
      <input class="login" type="text" id="University" placeholder="Position"/>
    
      <input class="login" type="text" id="University" placeholder="Work Description"/>
      <button className="addbutton">Add Experience</button>
      <h3>Skills</h3>
      <input class="login" type="text" id="University" placeholder="Skill name"/>
      <button className="addbutton">Add Skills</button>
      <br/>
      <button className='Resume-button'>Create Resume</button>
      </div>
      
    </div>
    <Nav/>
    </>
  )
}

export default Profile