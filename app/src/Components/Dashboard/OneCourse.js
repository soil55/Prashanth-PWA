import React from 'react'
import Nav from '../Navigation'

function OneCourse() {
  return (
    <>
     <header>
    <h1>Course Details</h1>
  </header>
  <div className="container">
    <h2 className="course-title">Introduction to React</h2>
    <p className="course-description">Learn the basics of React and build interactive user interfaces.</p>
    <h3>Modules:</h3>
    <ul className="module-list">
      <li className="module-item"><a href="#">Module 1: Introduction to React</a></li>
      <li className="module-item"><a href="#">Module 2: Components and Props</a></li>
      <li className="module-item"><a href="#">Module 3: State and Lifecycle</a></li>
     <li className="module-item"><a href="#">Module 4: Handling Events</a></li>
    </ul>
    <a href="/enroll" className="enroll-button">Enroll Now</a>
    <Nav/>
  </div>
    </>
  )
}

export default OneCourse