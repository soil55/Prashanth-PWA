import React from "react";
import Landing from "./Landing";


import { Menu, Transition } from '@headlessui/react';
import { SearchIcon } from '@heroicons/react/outline';

function Home() {
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
              <h2 class="my-2 mx-5 text-2xl font-bold">Dashboard</h2>
              <div class="relative flex max-w-4xl mx-5 flex-col gap-4 rounded-2xl border border-gray-100 bg-white-50 p-8 dark:border-gray-200 dark:bg-white-800 sm:flex-row sm:items-center sm:gap-8">
                <div class="flex w-fit flex-col items-center justify-center">
                  <div class="h-24 w-24">
                    <div id="level-progress-wrapper" class="relative "><svg class="h-full w-full rotate-[120deg] -scale-x-100" fill="none" stroke-width="1.25" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" stroke-linecap="round">
                      <path fill="none" class="stroke-gray-300 dark:stroke-gray-600" d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" style={{
                        transition: 'stroke-dashoffset 1s ease-in-out 0s',
                        stroke: 'rgb(56, 189, 248)',
                        strokeDasharray: 60.8074,
                        strokeDashoffset: 0,
                      }}></path>
                    </svg>
                      <div class="absolute inset-0 flex h-full w-full flex-col items-center justify-center"><span class="text-4xl font-semibold">2</span></div>
                    </div>
                  </div>
                </div>
                <div class="flex w-full flex-1 flex-col gap-3"><span class="text-2xl font-bold">Welcome, User 👋</span>
                  <div class="flex flex-1 flex-col gap-2">
                    <div class="flex"><span class="font-bold tracking-wide" style={{
                      color: 'rgb(56, 189, 248)',
                      filter: 'brightness(80%)',
                    }}>Novice</span>&nbsp;&nbsp;•&nbsp;&nbsp;<div class="inline-flex items-baseline gap-0.5"><span class="font-bold">210<small>XP</small></span></div>
                    </div>
                    <div class="relative h-2.5 w-full overflow-hidden rounded-md bg-gray-200 dark:bg-gray-700">
                      <div class="absolute inset-0 rounded-r-md" style={{ backgroundColor: "rgb(56,189,248)", width: "55%" }}></div>
                    </div>
                    <div class="flex items-center justify-between text-sm"><span class="font-semibold">Level 1&nbsp;&nbsp;</span><span class="font-semibold">Level 2&nbsp;&nbsp;<span class="text-xs text-gray-500">(300<small>XP</small>)</span></span></div>
                  </div>
                </div><a target="_blank" rel="noopener noreferrer" class="absolute right-4 top-4" href="/xp-system"><svg stroke="currentColor" fill="currentColor" stroke-width="0.25" viewBox="0 0 16 16" class="h-5 w-5 text-gray-400 hover:text-gray-500" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"></path>
                  <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"></path>
                </svg></a>
              </div>
            </main>

          </div>

        </div>

        
      </div>
    </>
  );
}

export default Home;
