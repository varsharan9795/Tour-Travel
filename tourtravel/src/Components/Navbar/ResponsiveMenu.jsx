import { data } from 'autoprefixer';
import React from 'react'

import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

const navbarLinks = [
    {
        name: "Home",
        link: "/",

    },
    {
        name: "About",
        link: "/About",

    },
    {
        name: "Blog",
        link: "/Blog",

    },
    {
        name: "Best Places",
        link: "/Places",

    },
];

const ResponsiveMenu = ({ showMenu, setShowMenu }) => {
    return (
        <div className={`${showMenu ? "left-0" : " -left-[100%]"} fixed bottom-0 top-0 z-20 flex h-screen w-[75%] flex-col 
     justify-between    bg-gradient-to-r from-cyan-100 from-10% via-sky-200 via-30% to-cyan-700 to-90%     dark:bg-gray-900 dark:text-white px-8 pb-6 pt-16 text-black transition-all 
      duration-200 md:hidden rounded-r-xl shadow-md`}>
            <div className='Navbar-card'>
                {/* NavLink section */}

                <div >
                    <div className='flex items-center justify-start gap-4'>
                        <FaUserCircle size={50} className='text-gray-500' />
                        <div className='text-gray-500'>
                            <h1>Hello User</h1>
                            <h1 className='text-sm text-slate-500'>Premium User</h1>
                        </div>
                    </div>

                </div>
                {/* NavLink section */}
                <div className='text-black mt-12'>
                    <ul className='space-y-4 text-3xl'>
                        {
                            navbarLinks.map(({ name, link }, index) => (
                                <li key={index}>
                                    <Link to={link} onClick={() => setShowMenu(false)} className='mb-5 inline-block'>{name}</Link>
                                </li>
                            ))
                        }

                    </ul>
                </div>

            </div>
        </div>
    )
}

export default ResponsiveMenu
