import React from 'react'
import Courses from './Dashboard/Courses';
import Profile from './Dashboard/Profile';
import OneCourse from './Dashboard/OneCourse';
import Resume from './Dashboard/Resume';
import "./Style.css"
import Nav from './Navigation'


function Landing() {
  return (
    <>
      <div className="dash-container">
        <div className="dash">
          <div>
            <p className="p-style" style={{ color: "white" }}>Hello again, Marvin!!</p>
            <img style={{ width: "60px", height: "60px", display: "inline-block", marginLeft: "100px" }} src="https://pixlok.com/wp-content/uploads/2022/02/Profile-Icon-SVG-09856789.png" />
            <h3>Resume Learning?</h3>
          </div>



        </div>
        <div className="search">

        </div>
        <br /><br />
        <div className="slider-container">
          <div className="slider">
            <div className="card" style={{ display: "inline-block", marginRight: "250px" }}><h3>My Courses</h3></div>
            <div className="card" style={{ display: "inline-block" }}><a href="#">Know more</a></div>
          </div>
        </div>
        <br/>
        <div style={{alignItems:"center"}}>

        <div class="course-card">
          <h2 class="course-heading">Introduction to React</h2>
          <p class="course-description">Learn the basics of React and build interactive user interfaces.</p>
          <a href="#" class="click">Enroll Now</a>
        </div>
        <br/>
        <div class="course-card">
          <h2 class="course-heading">Introduction to Python</h2>
          <p class="course-description">Learn the basics of Python and build ML models.</p>
          <a href="#" class="click">Enroll Now</a>
        </div>

        </div>



        <div className="description">
          <div className="des-container">

          </div>
        </div>
        <Nav />

      </div>
    </>



  )
}

export default Landing