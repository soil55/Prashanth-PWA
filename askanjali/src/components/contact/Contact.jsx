import React from "react"
import Back from "../common/back/Back"
import "./contact.css"
import Header from "../common/header/Header"
import "../../App.css"
import { useNavigate } from "react-router-dom"
import { NotificationProvider } from "../Notification/NotificationContext"

const Contact = () => {
  const navigate = useNavigate();

  const logout = () => {
    navigate("/")
  }

  return (
    <>
      <NotificationProvider>
      <Header />
      </NotificationProvider>
      <Back title='Profile Detail' />
      <section className='contacts padding'>
        <div className='container shadow flexSB'>
          {/* <div className='left row'>
            <iframe src={map}></iframe>
          </div> */}
          <div className='right row'>

            <div className='items grid2'>

              <h3>Personal Details</h3>
            </div>

            <form action=''>
              <div className='flexSB'>
                <input type='text' placeholder='Name' />
                <input type='email' placeholder='Email' />
              </div>
              <input type='text' placeholder='Phone Number' />
              <input type='text' placeholder='Linkdin profile' />
              <h3>Academic Info</h3>
              <input type='text' placeholder='College' />
              <input type='text' placeholder='Degree/Specialization' />
              <input type='text' placeholder='Year of Passing' />
              <input type='text' placeholder='CGPA' />
              <h3>Projects</h3>
              <input type='text' placeholder='Name ' />
              <input type='text' placeholder='Description' />
              <input type='text' placeholder='Add link' />
              <button className='primary-btn'>Add project</button>
              <br />
              <h3>Experience</h3>
              <input type='text' placeholder='Position' />
              <input type='text' placeholder='Work Experience' />
              <button className='primary-btn'>Add work Experience</button>
              <br /><br />
              <span>

              </span>
              <div className='items grid2'>

                <div className='box'>
                  <button className='primary-btn'>Update Details</button>
                </div>
                <div className='box'>
                  <button className='primary-btn' onClick={logout}>Logout</button>
                </div>

              </div>
            </form>

          </div>
        </div>
      </section>
  
    </>
  )
}

export default Contact
