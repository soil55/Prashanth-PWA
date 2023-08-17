import "./App.css"
import Header from "./components/common/header/Header"
import { Routes, Route } from "react-router-dom"
import { NotificationProvider } from "./components/Notification/NotificationContext"
import About from "./components/about/About"
import CourseHome from "./components/allcourses/CourseHome"
import Team from "./components/team/Team"
import Pricing from "./components/pricing/Pricing"
import Blog from "./components/blog/Blog"
import Contact from "./components/contact/Contact"
import Home from "./components/home/Home"

import { useNotification } from "./components/Notification/NotificationContext"

function App() {

  
  return (
    <>
      
      <Home/>
      <Routes>
          
          <Route exact path='/about' element={<About/>} />
          <Route exact path='/courses' element={<CourseHome/>} />
          <Route exact path='/team' element={<Team/>} />
          <Route exact path='/pricing' element={<Pricing/>} />
          <Route exact path='/journal' element={<Blog/>} />
          <Route exact path='/contact' element={<Contact/>} />
          
      </Routes>
      
    </>
  )
}

export default App