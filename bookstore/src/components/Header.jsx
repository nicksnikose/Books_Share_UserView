import React from 'react'

import { BsCart3 } from 'react-icons/bs';

const Header = () => {
    return (
        <div>
            <nav className="sticky inset-0 z-10 block h-max w-full max-w-full rounded-none border border-white/80 bg-white bg-opacity-80 py-2 px-4 text-white shadow-md backdrop-blur-2xl backdrop-saturate-200 lg:px-8 lg:py-4">
                <div className="flex items-center text-gray-900">
                    <img src="logo.jpg" className='h-12' alt='' />
                    <ul className="ml-auto mr-8 hidden items-center gap-6 lg:flex">
                        <li className="block p-1 font-sans text-sm font-normal leading-normal text-inherit antialiased">
                            HOME
                        </li>
                        <li className="block p-1 font-sans text-sm font-normal leading-normal text-inherit antialiased">
                            ABOUT US
                        </li>
                        <li className="block p-1 font-sans text-sm font-normal leading-normal text-inherit antialiased">
                            DONORS
                        </li>
                        <li className="block p-1 font-sans text-sm font-normal leading-normal text-inherit antialiased">
                            BLOG
                        </li>
                        <li className="block p-1 font-sans text-sm font-normal leading-normal text-inherit antialiased">
                            BOOKS
                        </li>
                        <li className="block p-1 font-sans text-sm font-normal leading-normal text-inherit antialiased">
                            CONTACT US
                        </li>
                        <li className="block p-1 font-sans text-sm font-normal leading-normal text-inherit antialiased">
                            < BsCart3 />
                        </li>
                    </ul>

                    <button
                        class="middle none relative ml-auto h-6 max-h-[40px] w-6 max-w-[40px] rounded-lg text-center font-sans text-xs font-medium uppercase text-blue-gray-500 transition-all hover:bg-transparent focus:bg-transparent active:bg-transparent disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:hidden"
                        data-collapse-target="navbar"
                    >
                        <span class="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 transform">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="h-6 w-6"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M4 6h16M4 12h16M4 18h16"
                                ></path>
                            </svg>
                        </span>
                    </button>

                </div>

            </nav>
        </div>
    )
}

export default Header