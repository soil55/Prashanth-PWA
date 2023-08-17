import React from "react"
import Back from "../common/back/Back"
import CoursesCard from "./CoursesCard"
import OnlineCourses from "./OnlineCourses"
import Header from "../common/header/Header"
import "../../App.css"
import { NotificationProvider } from "../Notification/NotificationContext"


const CourseHome = () => {
  
  return (
    <>
      <NotificationProvider>
      <Header/>
      </NotificationProvider>
      <Back title='Explore Courses' />
      <CoursesCard />
      <OnlineCourses />
      
    </>
  )
}

export default CourseHome
