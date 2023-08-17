import React, { useState } from "react"
import { Link } from "react-router-dom"
import { Switch, notification } from "antd"
import Head from "./Head"
import "./header.css"

const Header = () => {
  const [click, setClick] = useState(false)
  const [toggle,setoggle] = useState(false)

  const toggler = ()=>{
    toggle?setoggle(false):setoggle(true);

    Notification.requestPermission().then(perm=>{
      if(perm==="granted"){
        if(!toggle){
          const notification = new Notification("Welcome",{
            body:"Nofitfications enabled",
            data:"Hello There!",
            // tag:"Welcome Message"
          })
          setInterval(()=>{
            const interval = new Notification("Welcome",{
              body:"Check out the Courses Available"
            })
          },3*60*60*1000)
        }else{
          const notification = new Notification("Disable",{
            body:"Nofitfications Disable",
            data:"Hello There!",
            // tag:"Welcome Message"
          })
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
            <Switch onClick={toggler}/>
          </ul>

          <div className='start'>
            <div className='button'><Link to='/contact'>Profile</Link></div>
          </div>
          <button className='toggle' onClick={() => setClick(!click)}>
            {click ? <i className='fa fa-times'> </i> : <i className='fa fa-bars'></i>}
          </button>
        </nav>
      </header>
    </>
  )
}

export default Header
