import React from 'react'
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Landing from './Landing'
import { Menu, Transition } from '@headlessui/react';
import { SearchIcon } from '@heroicons/react/outline';
import { useState } from 'react'
import { StarIcon } from '@heroicons/react/solid'
import clientrequests from '../clientrequests';

const product = {
    name: 'Course Title',
    price: '$29.99',
    href: '#',
    images: [
        {
            src: 'https://cdn.create.vista.com/downloads/9871a40c-e770-46dd-8d85-9cd49b8df6ec_1024.jpeg',
            alt: 'Two each of gray, white, and black shirts laying flat.',
        }
    ],
    colors: [
        { name: 'White', class: 'bg-white', selectedClass: 'ring-gray-400' },
        { name: 'Gray', class: 'bg-gray-200', selectedClass: 'ring-gray-400' },
        { name: 'Black', class: 'bg-gray-900', selectedClass: 'ring-gray-900' },
    ],
    sizes: [
        { name: 'XXS', inStock: false },
        { name: 'XS', inStock: true },
        { name: 'S', inStock: true },
        { name: 'M', inStock: true },
        { name: 'L', inStock: true },
        { name: 'XL', inStock: true },
        { name: '2XL', inStock: true },
        { name: '3XL', inStock: true },
    ],
    description:
        'The Comprehensive Mathematics Course is a comprehensive and in-depth exploration of fundamental mathematical concepts and problem-solving strategies. Designed to cater to learners of all levels, from beginners to those seeking to refresh their mathematical knowledge, this course covers a wide range of topics across various mathematical disciplines. Whether you are looking to build a strong mathematical foundation or enhance your existing skills, this course is tailored to meet your learning needs.',
    highlights: [
        `Self-paced learning: Study at your own pace, allowing for a flexible and customized learning experience.`,
        `Practical examples: Apply mathematical concepts to real-world scenarios, enhancing your problem-solving skills.`
    ],
    details:
        `No prior mathematical knowledge is required. The course is designed to accommodate learners with varying levels of familiarity with mathematics.`,
}
const reviews = { href: '#', average: 4, totalCount: 117 }

function classNames(...classes) {

    return classes.filter(Boolean).join(' ')
}

function CourseDetails() {
    const [selectedColor, setSelectedColor] = useState(product.colors[0])
    const [selectedSize, setSelectedSize] = useState(product.sizes[2])
    const {id} = useParams();
    const [cours,setcourses] = useState({});
    useEffect(()=>{
        (async()=>{
          try{
            const resp = await clientrequests.get(`http://127.0.0.1:5000/course_details/${id}`);
            setcourses(resp.data);
            console.log(resp.data)
          }
          catch(e){
            console.log(e);
          }
        })();
      },[]);

    return (
        <>
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
                                    <Menu.Items className="overflow-hidden absolute right-0 mt-2 w-48 bg-white rounded-md border shadow-lg origin-top-right focus:outline-none">
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
                        <main className="flex-grow bg-gray-100">
                            <div className="bg-white">
                                <div className="pt-6">


                                    {/* Image gallery */}
                                    <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
                                        <div className="aspect-h-5 aspect-w-5 hidden overflow-hidden rounded-lg lg:block">
                                            <img
                                                src={product.images[0].src}
                                                alt={product.images[0].alt}
                                                className="h-full w-full object-cover object-center"
                                            />
                                        </div>

                                    </div>

                                    {/* Product info */}
                                    <div className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
                                        <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
                                            <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{cours.title}</h1>
                                        </div>

                                        {/* Options */}
                                        <div className="mt-4 lg:row-span-3 lg:mt-0">
                                            <h2 className="sr-only">Product information</h2>
                                            <p className="text-3xl tracking-tight text-gray-900">${cours.price}</p>

                                            {/* Reviews */}
                                            <div className="mt-6">
                                                <h3 className="sr-only">Reviews</h3>
                                                <div className="flex items-center">
                                                    <div className="flex items-center">
                                                        {[0, 1, 2, 3, 4].map((rating) => (
                                                            <StarIcon
                                                                key={rating}
                                                                className={classNames(
                                                                    reviews.average > rating ? 'text-gray-900' : 'text-gray-200',
                                                                    'h-5 w-5 flex-shrink-0'
                                                                )}
                                                                aria-hidden="true"
                                                            />
                                                        ))}
                                                    </div>
                                                    <p className="sr-only">{reviews.average} out of 5 stars</p>
                                                    <a href={reviews.href} className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500">
                                                        {reviews.totalCount} reviews
                                                    </a>
                                                </div>
                                            </div>

                                            <form className="mt-10">


                                                <button
                                                    type="submit"
                                                    className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                                >
                                                    Enroll
                                                </button>
                                            </form>
                                        </div>

                                        <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
                                            {/* Description and details */}
                                            <div>
                                                <h3 className="sr-only">Description</h3>

                                                <div className="space-y-6">
                                                    <p className="text-base text-gray-900">{cours.description}</p>
                                                </div>
                                            </div>

                                            <div className="mt-10">
                                                <h3 className="text-sm font-medium text-gray-900">Highlights</h3>

                                                <div className="mt-4">
                                                    <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
                                                        {product.highlights.map((highlight) => (
                                                            <li key={highlight} className="text-gray-400">
                                                                <span className="text-gray-600">{highlight}</span>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            </div>

                                            <div className="mt-10">
                                                <h2 className="text-sm font-medium text-gray-900">Details</h2>

                                                <div className="mt-4 space-y-6">
                                                    <p className="text-sm text-gray-600">{product.details}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </main>

                    </div>
                </div>
            </div>
        </>
    )
}

export default CourseDetails