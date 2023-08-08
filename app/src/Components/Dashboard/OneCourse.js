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
      <a><li className="module-item">Module 1: Introduction to React</li></a>
      <a><li className="module-item">Module 2: Components and Props</li></a>
      <a><li className="module-item">Module 3: State and Lifecycle</li></a>
     <a><li className="module-item">Module 4: Handling Events</li></a> 
    </ul>
    <a href="/enroll" className="enroll-button">Enroll Now</a>
    <Nav/>
  </div>
    </>
  )
}

export default OneCourse