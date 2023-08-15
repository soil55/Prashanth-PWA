import {Routes,Route} from 'react-router-dom';
import Academic from './components/Academic';
import Email from './components/Email';
import Final from './components/Final';
import Forgotpass from './components/Forgotpass';
import Login from './components/Login';
import NewPassword from './components/NewPassword';
import Signup from './components/Signup';
import UserDetails from './components/UserDetails';
import Welcome from './components/Welcome';
import App from './App';
import Home from './components/home/Home'
import VerifyEmail from './components/VerifyEmail';
import About from "./components/about/About"
import CourseHome from "./components/allcourses/CourseHome"
import Pricing from "./components/pricing/Pricing"
import Contact from "./components/contact/Contact"



function Main() {
  return (
    <>
    <Routes>
      <Route exact path="/" element={<Login/>}/>
      <Route exact path="/Email" element={<Email/>}/>
      <Route exact path="/Signup" element={<Signup/>}/>
      <Route exact path="/UserDetails" element={<UserDetails/>}/>
      <Route exact path="/Welcome" element={<Welcome/>}/>
      <Route exact path="/Academic" element={<Academic/>}/>
      <Route exact path="/NewPassword" element={<NewPassword/>}/>
      <Route exact path="/Final" element={<Final/>}/>
      <Route exact path="/Forgotpass" element={<Forgotpass/>}/>
      <Route exact path="/VerifyEmail" element={<VerifyEmail/>}/>
      <Route exact path ="/Landing/Home" element={<App/>}/>
      <Route exact path='/about' element={<About/>} />
      <Route exact path='/courses' element={<CourseHome/>} />
      <Route exact path='/pricing' element={<Pricing/>} />
      <Route exact path='/contact' element={<Contact/>} />
  

    {/* <Route exact path="/FreeCourses" element={<Courses/>}/>
    <Route exact path="/Course" element={<OneCourse/>}/>
    <Route exact path="/Profile" element={<Profile/>}/>
    <Route exact path="/Resume" element={<Resume/>}/>
    <Route exact path="/Dash" element={<Dash/>}/> */}
    </Routes>
    </>
  );
}

export default Main;