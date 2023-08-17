import React from "react"
import "./about.css"
import Back from "../common/back/Back"
import AboutCard from "./AboutCard"
import Header from "../common/header/Header"
import "../../App.css"
import { NotificationProvider } from "../Notification/NotificationContext"

const About = () => {
  return (
    <>
      <NotificationProvider>
      <Header/>
      
      <Back title='About Us' />
      <AboutCard />
      </NotificationProvider>
    </>
  )
}

export default About
