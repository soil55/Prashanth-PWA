import React from 'react'
import Nav from '../Navigation'

function Courses() {
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
        <div className="container">
          <div className="search-container">
            <input type="text" className="search-bar" placeholder="Search for a course" />
            <br />
            <select className="genre-select">
              
              <option value="">All Genres</option>
              <option value="programming">Programming</option>
              <option value="design">Design</option>
              <option value="business">Business</option>
            </select>
          </div>
          <h3>Select Your Course</h3>
          <ul className="course-list">
            <li className="course-item">

              <h2 className="course-title">Introduction to React</h2>
              <p className="course-description">Learn the basics of React and build interactive user interfaces.</p>
              <span class="course-badge free">Free</span>
              <br />
              <a href="/Course" style={{ color: "white" }}>Go to Course</a>
            </li>
            <li className="course-item">
              <h2 className="course-title">Web Development with HTML and CSS</h2>
              <p className="course-description">Create websites using HTML and CSS from scratch.</p>
              <span class="course-badge free">$40</span>
              <br />
              <a href="/Course" style={{ color: "white" }}>Go to Course</a>
            </li>
          </ul>
        </div>
        <Nav/>
      </div>
      
    </>
  )
}

export default Courses