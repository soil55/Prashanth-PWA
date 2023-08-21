import React from 'react'
import Landing from './Landing'

import { Menu, Transition } from '@headlessui/react';
import { SearchIcon } from '@heroicons/react/outline';

function Paths() {
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
            <div className="h-full p-6">Paths</div>
          </main>

        </div>
      </div>
    </div>
  )
}

export default Paths