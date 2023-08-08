import './App.css';
import {Routes,Route} from 'react-router-dom';
import Academic from './Components/Academic';
import Email from './Components/Email';
import Final from './Components/Final';
import Forgotpass from './Components/Forgotpass';
import Login from './Components/Login';
import NewPassword from './Components/NewPassword';
import Signup from './Components/Signup';
import UserDetails from './Components/UserDetails';
import Welcome from './Components/Welcome';
import Landing from './Components/Landing';
import VerifyEmail from './Components/VerifyEmail';
import Courses from './Components/Dashboard/Courses';
import Profile from './Components/Dashboard/Profile';
import OneCourse from './Components/Dashboard/OneCourse';
import Resume from './Components/Dashboard/Resume';



function App() {
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
      <Route exact path="/Landing" element={<Landing/>}/>
      <Route exact path="/Forgotpass" element={<Forgotpass/>}/>
      <Route exact path="/VerifyEmail" element={<VerifyEmail/>}/>
  

    <Route exact path="/FreeCourses" element={<Courses/>}/>
    <Route exact path="/Course" element={<OneCourse/>}/>
    <Route exact path="/Profile" element={<Profile/>}/>
    <Route exact path="/Resume" element={<Resume/>}/>
    </Routes>
    </>
  );
}

export default App;
