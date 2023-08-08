import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineUser, AiOutlinePieChart, AiOutlinePlayCircle, AiOutlineDollarCircle } from 'react-icons/ai';

const Navigation = () => {
  return (
    <nav>
      <ul className="navbar-container">
        <li className="navibar">
          <Link to="/Profile">
            <AiOutlineUser />
            <br/>
            Profile
          </Link>
        </li>
        <li className="navibar">
          <Link to="/Landing">
            <AiOutlinePieChart />
            <br/>
            Analytics
          </Link>
        </li>
        <li className="navibar">
          <Link to="/FreeCourses">
            <AiOutlinePlayCircle />
            <br/>
            Free Courses
          </Link>
        </li>
        <li className="navibar">
          <Link to="/FreeCourses">
            <AiOutlineDollarCircle />
            <br/>
            Paid Courses
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;