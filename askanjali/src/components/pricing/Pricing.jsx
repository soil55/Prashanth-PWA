import React from "react"
import Back from "../common/back/Back"
import PriceCard from "./PriceCard"
import "./price.css"
import Faq from "./Faq"
import Header from "../common/header/Header"
import "../../App.css"
import { NotificationProvider } from "../Notification/NotificationContext"



const Pricing = () => {
  return (
    <>
      <NotificationProvider>
        <Header/>
      </NotificationProvider>
      
      
      <Back title='Choose The Right Plan' />
      <section className='price padding'>
        <div className='container grid'>
          <PriceCard />
        </div>
      </section>
      <Faq />
      
    </>
  )
}

export default Pricing
