import React from "react"
import AboutCard from "../about/AboutCard"
// import Hblog from "./Hblog"
import HAbout from "./HAbout"
import Hero from "./hero/Hero"
import Header from "../common/header/Header"
// import Testimonal from "./testimonal/Testimonal"

const Home = () => {
  return (
    <>
      <Header/>
      <Hero />
      <AboutCard />
      <HAbout />
      {/* <Testimonal /> */}
      {/* <Hblog /> */}
      {/* <Hprice /> */}
    </>
  )
}

export default Home
