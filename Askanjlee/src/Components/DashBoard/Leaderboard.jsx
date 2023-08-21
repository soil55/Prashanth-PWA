import React from 'react'
import Landing from './Landing'

import { Menu, Transition } from '@headlessui/react';
import { SearchIcon } from '@heroicons/react/outline';
const TdStyle = {
    ThStyle: `w-1/6 min-w-[160px] border-l border-transparent bg-gradient-to-br from-indigo-400 via-indigo-400 to-cyan-400 py-4 px-3 text-lg font-semibold text-Black lg:py-7 lg:px-4`,
    TdStyle: `border-b border-l border-[#E8E8E8] bg-[#F3F6FF] py-5 px-2 text-center text-base font-medium text-dark`
  }

function Leaderboard() {
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
          <h3 className="mb-4 flex items-center mx-6 py-3 space-x-2  text-left text-lg font-bold uppercase">Leaderboard Score</h3>
          <section className='py-3 bg-white'>
      <div className='container'>
        <div className='flex flex-wrap -mx-4'>
          <div className='w-full '>
            <div className='max-w-full'>
              <table className='w-full table-auto mx-9'>
                <thead className='text-center bg-primary'>
                  <tr>
                    <th className={TdStyle.ThStyle}> Rank </th>
                    <th className={TdStyle.ThStyle}> User </th>
                    <th className={TdStyle.ThStyle}> Member Since </th>
                    <th className={TdStyle.ThStyle}> Points </th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td className={TdStyle.TdStyle}>1</td>
                    <td className={TdStyle.TdStyle}>User 1</td>
                    <td className={TdStyle.TdStyle}>18th Aug</td>
                    <td className={TdStyle.TdStyle}>300</td>
                  </tr>
                  <tr>
                    <td className={TdStyle.TdStyle}>2</td>
                    <td className={TdStyle.TdStyle}>User 2</td>
                    <td className={TdStyle.TdStyle}>18th Aug</td>
                    <td className={TdStyle.TdStyle}>200</td>
                  </tr>
                  <tr>
                    <td className={TdStyle.TdStyle}>3</td>
                    <td className={TdStyle.TdStyle}>User 3</td>
                    <td className={TdStyle.TdStyle}>18th Aug</td>
                    <td className={TdStyle.TdStyle}>100</td>
                  </tr>
                  <tr>
                    <td className={TdStyle.TdStyle}>4</td>
                    <td className={TdStyle.TdStyle}>User 4</td>
                    <td className={TdStyle.TdStyle}>18th Aug</td>
                    <td className={TdStyle.TdStyle}>50</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>

        </div>
      </div>
    </div>
  )
}

export default Leaderboard