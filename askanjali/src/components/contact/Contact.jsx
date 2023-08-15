import React from "react"
import Back from "../common/back/Back"
import "./contact.css"
import Header from "../common/header/Header"
import "../../App.css"

const Contact = () => {

  // const map = 'https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d904726.6131739549!2d85.24565535!3d27.65273865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2snp!4v1652535615693!5m2!1sen!2snp" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" '
  return (
    <>
      <Header/>
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
              <br/>
              <h3>Experience</h3>
              <input type='text' placeholder='Position' />
              <input type='text' placeholder='Work Experience' />
              <button className='primary-btn'>Add work Experience</button>
              <br/><br/>
              <button className='primary-btn'>Update Details</button>
            </form>

          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
