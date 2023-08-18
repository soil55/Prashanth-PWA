import React from 'react'
import "./courses.css"
import { freecoursesCard } from "../../dummydata"
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Heading from "../common/heading/Heading"
import { useNavigate } from 'react-router-dom';

function FreeCoursecard() {
    const navigate = useNavigate();
    const navtopage = ()=>{
      navigate('/coursepage')
    }
    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 1
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
  return (
    <>
    <section className='coursesCard'>
    <Heading subtitle='COURSES' title='Browse Our Free Online Courses' />
      <div className='container grid2'>
      <Carousel responsive={responsive}>
        {freecoursesCard.map((val) => (
          <div className='items'>
            <div className='content flex'>
              <div className='left'>
                <div className='img'>
                  <img src={val.cover} alt='' />
                </div>
              </div>
              <div className='text'>
                <h1>{val.coursesName}</h1>
                <div className='rate'>
                  <i className='fa fa-star'></i>
                  <i className='fa fa-star'></i>
                  <i className='fa fa-star'></i>
                  <i className='fa fa-star'></i>
                  <i className='fa fa-star'></i>
                  <label htmlFor=''>(5.0)</label>
                </div>
                <div className='details'>
                  {val.courTeacher.map((details) => (
                    <>
                      <div className='box'>
                        <div className='dimg'>
                          <img src={details.dcover} alt='' />
                        </div>
                        <div className='para'>
                          <h4>{details.name}</h4>
                        </div>
                      </div>
                      <span>{details.totalTime}</span>
                    </>
                  ))}
                </div>
              </div>
            </div>
            <div className='price'>
              <h3>
                {val.priceAll} / {val.pricePer}
              </h3>
            </div>
            <button className='outline-btn' disabled={val.pricePer.includes('Not Available')} onClick={navtopage}>ENROLL NOW !</button>
          </div>
        ))}
        </Carousel>
      </div>
      
    </section>
    </>
  )
}

export default FreeCoursecard