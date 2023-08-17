import React, { useState } from "react"
import { Link } from "react-router-dom"
import { Switch} from "antd"
import { useNotification } from "../../Notification/NotificationContext"
import Head from "./Head"
import "./header.css"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Header = () => {
  const [click, setClick] = useState(false)

  const { notificationEnabled, toggleNotification } = useNotification();
  const toggle = ()=>{
    toggleNotification();

    Notification.requestPermission().then(perm=>{
      if(perm==="granted"){
          if(!notificationEnabled){
        
              toast.success('Notification: Toggle is turned on!', {
                position: toast.POSITION.BOTTOM_RIGHT,
              });
                setTimeout(()=>{
                  toast.success('Notification: 1st Notification', {
                    position: toast.POSITION.BOTTOM_RIGHT,
                  })
                },3*60*60*1000)
                setTimeout(()=>{
                  toast.success('Notification: 2nd Notification', {
                    position: toast.POSITION.BOTTOM_RIGHT,
                  })
                },6*60*60*1000)
                setTimeout(()=>{
                  toast.success('Notification: 3rd Notification', {
                    position: toast.POSITION.BOTTOM_RIGHT
                  })
                },9*60*60*1000)
          }else{
            toast.success('Notification: Toggle is turned off!', {
              position: toast.POSITION.BOTTOM_RIGHT,
            })
                
                clearTimeout();
                clearTimeout();
                clearTimeout();
          }
      }
    })
  }
  return (
    <>
      <Head />
      
      <header>
        <nav className='flexSB'>
          <ul className={click ? "mobile-nav" : "flexSB "} onClick={() => setClick(false)}>
            <li>
              <Link to='/Landing/Home'>Home</Link>
            </li>
            <li>
              <Link to='/courses'>All Courses</Link>
            </li>
            <li>
              <Link to='/about'>About</Link>
            </li>
            <li>
              <Link to='/pricing'>Pricing</Link>
            </li>
            <Switch 
            checked={notificationEnabled}
            onChange={toggle}/>
            </ul>

          <div className='start'>
            <div className='button'><Link to='/contact'>Profile</Link></div>
          </div>
          <button className='toggle' onClick={() => setClick(!click)}>
            {click ? <i className='fa fa-times'> </i> : <i className='fa fa-bars'></i>}
          </button>
        </nav>
      </header>
      <ToastContainer/>
    </>
  )
}

export default Header
