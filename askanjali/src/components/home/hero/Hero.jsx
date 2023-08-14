import React from "react"
import Heading from "../../common/heading/Heading"
import "./Hero.css"

const Hero = () => {
  return (
    <>
      <section className='hero'>
        <div className='container'>
          <div className='row'>
            <Heading subtitle='WELCOME TO ASKANJALI' title='A Learning Platform' />
            <p>Let us resume our Learning related to the Courses we have taken or buy new courses to continue learning.</p>
            <div className='button'>
              <button className='primary-btn'>
                GET STARTED NOW
              </button>
              <button>
                VIEW COURSE
              </button>
            </div>
          </div>
        </div>
      </section>
      <div className='margin'></div>
    </>
  )
}

export default Hero
