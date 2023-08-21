import React from 'react';
import "../../../App.css"
import { useNavigate } from 'react-router-dom';
const CourseCard = ({ title, instructor, image, price }) => {
  const navigate = useNavigate()

  const navto = ()=>{
    navigate("/coursedetail")
  }
  return (
    <div className="flex-item w-max bg-white rounded-lg shadow-md overflow-hidden">
      <img src={image} alt={`Course: ${title}`} className="w-full h-44 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-2">Instructor: {instructor}</p>
        <div className="flex items-center justify-between">
          <p className="text-green-600 font-semibold">${price}</p>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition duration-300" onClick={navto}>
            Enroll
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
