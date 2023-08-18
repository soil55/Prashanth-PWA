import React,{useState} from 'react'
import Back from "../common/back/Back"
import "./coursepage.css";
import Header from "../common/header/Header"
import Heading from "../common/heading/Heading"
import "../../App.css"
import { Modules ,faq_course} from "../../dummydata"
import { NotificationProvider } from "../Notification/NotificationContext"


function CoursePage() {
    const [click, setClick] = useState(false)

  const toggle = (index) => {
    if (click === index) {
      return setClick(null)
    }
    setClick(index)
  }
  return (
    <>
     <NotificationProvider>
        <Header/>
      </NotificationProvider>
      <Back title='Lets Resume the Course' />
      <section className='price padding'>
        <div className='container grid'>
        {Modules.map((val) => (
        <div className='items shadow'>
          <h4>{val.name}</h4>
          <h1>
          </h1>
          <p>{val.desc}</p>
          <button className='outline-btn'>GET STARTED</button>
        </div>
      ))}
        </div>
        <Heading subtitle='FAQS' title='Frequently Asked Questions related to course' />
      <section className='faq'>
        <div className='container'>
          {faq_course.map((val, index) => (
            <div className='box'>
              <button className='accordion' onClick={() => toggle(index)} key={index}>
                <h2>{val.title}</h2>
                <span>{click === index ? <i className='fa fa-chevron-down'></i> : <i className='fa fa-chevron-right'></i>}</span>
              </button>
              {click === index ? (
                <div className='text'>
                  <p>{val.desc}</p>
                </div>
              ) : null}
            </div>
          ))}
        </div>
      </section>
      </section>

    </>
  )
}

export default CoursePage