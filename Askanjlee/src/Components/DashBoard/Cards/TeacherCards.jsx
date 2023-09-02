import React from 'react'
import "../../../App.css"
function TeacherCards({image,name,description,field}) {
  return (
    <div className="flex-item w-80 bg-white rounded-lg shadow-md overflow-hidden">
    <img src={image} alt='' className="w-80 h-44 object-fill" />
    <div className="p-4">
      <h3 className="text-xl font-semibold mb-2">{name}</h3>
      <p className="text-gray-600 mb-2">Domain: {field}</p>
      <div className="flex items-center justify-between">
        <p className="text-green-600 font-semibold">{description}</p>
      </div>
    </div>
  </div>
  )
}

export default TeacherCards