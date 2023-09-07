import './App.css';
import Login from './Components/Registration/Login';
import {Routes,Route} from 'react-router-dom';
import Registration from './Components/Registration/Registration';
import Home from './Components/DashBoard/Home'
import Courses from './Components/DashBoard/Courses'
import Mycourses from './Components/DashBoard/Mycourses'
import Paths from './Components/DashBoard/Paths'
import Settings from './Components/DashBoard/Settings'
import Certification from './Components/DashBoard/Certification';
import CourseDetails from './Components/DashBoard/CourseDetails';
import Leaderboard from './Components/DashBoard/Leaderboard';
import Analytics from './Components/DashBoard/Analytics';


function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Login/>}/>
        <Route exact path="/Registration" element={<Registration/>}/>
        <Route exact path="/Home" element={<Home/>}/>
        <Route exact path="/courses" element={<Courses/>}/>
        <Route exact path="/Mycourses" element={<Mycourses/>}/>
        <Route exact path="/Paths" element={<Paths/>}/>
        <Route exact path="/Settings" element={<Settings/>}/>
        <Route exact path="/certifications" element={<Certification/>}/>
        <Route exact path="/coursedetail/:id" element={<CourseDetails/>}/>
        <Route exact path="/Leaderboard" element={<Leaderboard/>}/>
        <Route exact path="/analytics" element={<Analytics/>}/>
      </Routes>
    </>
  );
}

export default App;
