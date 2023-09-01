import React, { useState,useEffect } from 'react'
import Landing from './Landing'
import clientrequests from '../clientrequests';
import CourseCard from './Cards/CourseCard';
import { Menu, Transition } from '@headlessui/react';
import { SearchIcon } from '@heroicons/react/outline';
import { courses,maths,scienceCourses,stemCourses,olympiadCourses } from '../../Dummy';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


function Courses() {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
      const [cours,setcourses] = useState({});
      useEffect(()=>{
        (async()=>{
          try{
            const resp = await clientrequests.get("http://127.0.0.1:5000/course_list");
            setcourses(resp.data);
            console.log(resp.data)
          }
          catch(e){
            console.log(e);
          }
        })();
      },[]);
      var c = Object.entries(cours);
      const mathematicsCourses = c.filter((course) => course[1].Category === "Mathematics");
      const ScieneCourses = c.filter((course)=>course[1].Category==="Science");
      const StemCourses = c.filter((course)=>course[1].Category==="STEM");
      const OlympiadCourses = c.filter((course)=>course[1].Category==="Olympiads");
      console.log(c);
    return (
        <div className="flex">
            <Landing />
            <div className="w-full">
                <div className="flex flex-col h-screen">
                    <div className="flex justify-between py-3 px-6 bg-gray-50 border-b space-x-6">
                        <form action="" className="w-full max-w-md">
                            <div className="relative flex items-center text-gray-400 focus-within:text-gray-600">
                                <SearchIcon className="w-5 h-5 absolute ml-3 pointer-events-none" />
                                <input
                                    type="text"
                                    name="search"
                                    placeholder="Search Courses"
                                    autoComplete="off"
                                    aria-label="Search talk"
                                    className="w-full pr-3 pl-10 py-2 font-semibold placeholder-gray-500 text-black rounded-2xl border-none ring-2 ring-gray-300 focus:ring-gray-500 focus:ring-2"
                                />
                            </div>
                        </form>
                        <Menu as="div" className="relative flex-shrink-0">
                            <Menu.Button className="rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black">
                                <img
                                    className="inline w-10 h-10 rounded-full"
                                    src="https://pbs.twimg.com/profile_images/1333896976602193922/MtWztkxt_400x400.jpg"
                                    alt=""
                                />
                            </Menu.Button>

                            <Transition
                                enter="transition duration-100 ease-out transform"
                                enterFrom="opacity-0 scale-90"
                                enterTo="opacity-100 scale-100"
                                leave="transition duration-100 ease-in transform"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-90"
                            >
                                <Menu.Items className=" overflow-hidden absolute right-0 mt-2 w-48 bg-white rounded-md border shadow-lg origin-top-right focus:outline-none">
                                    <Menu.Item>
                                        {({ active }) => (
                                            <a
                                                href="/Settings"
                                                className={`block py-2 px-4 text-sm ${active ? 'bg-gray-100' : ''
                                                    } text-gray-700`}
                                            >
                                                My Profile
                                            </a>

                                        )}
                                    </Menu.Item>
                                    <Menu.Item>
                                        {({ active }) => (
                                            <a
                                                href="#"
                                                className={`block py-2 px-4 text-sm ${active ? 'bg-gray-100' : ''
                                                    } text-gray-700`}
                                            >
                                                Help
                                            </a>

                                        )}
                                    </Menu.Item>
                                    <Menu.Item>
                                        {({ active }) => (
                                            <a
                                                href="/"
                                                className={`block py-2 px-4 text-sm ${active ? 'bg-gray-100' : ''
                                                    } text-gray-700`}
                                            >
                                                Sign out
                                            </a>

                                        )}
                                    </Menu.Item>
                                    {/* Other menu items */}
                                </Menu.Items>
                            </Transition>
                        </Menu>

                    </div>
                    <main className="bg-gray-100 ">
                        <div class="justify-between">
                            <h2 class="my-2 mx-2 text-2xl font-bold">New Releases</h2>
                            
                            
                            <div className="space-x-px p-4">
                            <Carousel responsive={responsive}>
                            {c.map((course, index) => (
                                
                                    <CourseCard
                                        key={index}
                                        title={course[1].title}
                                        instructor={course[1].Instructor}
                                        image={"https://cdn.create.vista.com/downloads/9871a40c-e770-46dd-8d85-9cd49b8df6ec_1024.jpeg"}
                                        price={course[1].price}
                                    />
                                ))}
                                </Carousel>
                            </div>
                            

                            <h2 class="my-2 mx-2 text-2xl font-bold">Mathematics</h2>
                            <div className="space-x-px p-4">
                                <Carousel responsive={responsive}>
                                {mathematicsCourses.map((course, index) => (
                                    <CourseCard
                                        key={index}
                                        title={course[1].title}
                                        instructor={course[1].Instructor}
                                        image={"https://cdn.create.vista.com/downloads/9871a40c-e770-46dd-8d85-9cd49b8df6ec_1024.jpeg"}
                                        price={course[1].price}
                                    />
                                ))}
                                </Carousel>
                            </div>
                        
                            
                            <h2 class="my-2 mx-2 text-2xl font-bold">Science</h2>
                            <div className="space-x-px p-4">
                                <Carousel responsive={responsive}>
                                {ScieneCourses.map((course, index) => (
                                    <CourseCard
                                        key={index}
                                        title={course[1].title}
                                        instructor={course[1].Instructor}
                                        image={"https://cdn.create.vista.com/downloads/9871a40c-e770-46dd-8d85-9cd49b8df6ec_1024.jpeg"}
                                        price={course[1].price}
                                    />
                                ))}
                                </Carousel>
                            </div>
                            <h2 class="my-2 mx-2 text-2xl font-bold">STEM</h2>
                            <div className="space-x-px p-4">
                                <Carousel responsive={responsive}>
                                {StemCourses.map((course, index) => (
                                    <CourseCard
                                        key={index}
                                        title={course[1].title}
                                        instructor={course[1].Instructor}
                                        image={"https://cdn.create.vista.com/downloads/9871a40c-e770-46dd-8d85-9cd49b8df6ec_1024.jpeg"}
                                        price={course[1].price}
                                    />
                                ))}
                                </Carousel>
                            </div>
                            <h2 class="my-2 mx-2 text-2xl font-bold">Olympiads</h2>
                            <div className="space-x-1 p-4">
                                <Carousel responsive={responsive}>
                                {OlympiadCourses.map((course, index) => (
                                    <CourseCard
                                        key={index}
                                        title={course[1].title}
                                        instructor={course[1].Instructor}
                                        image={"https://cdn.create.vista.com/downloads/9871a40c-e770-46dd-8d85-9cd49b8df6ec_1024.jpeg"}
                                        price={course[1].price}
                                    />
                                ))}
                                </Carousel>
                            </div>

                        </div>
                    </main>

                </div>
            </div>

        </div>
    )
}

export default Courses