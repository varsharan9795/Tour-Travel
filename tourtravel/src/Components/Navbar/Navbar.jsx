import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import log from '../../assets/images/log.png';
import { MdArrowDropDown } from 'react-icons/md';
import { HiMenuAlt1, HiMenuAlt3 } from "react-icons/hi";
import ResponsiveMenu from './ResponsiveMenu.jsx';


const dropdownList = [
  {
    name: 'Our Services',
    link: '/#services',
  },
  {
    name: 'Top Brands',
    link: '/#mobile_brands',
  },
  {
    name: 'Location',
    link: '/#location',
  },
];

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  }

  return (
    <>
      <div className='fixed top-0 right-0 w-full bg-white text-black shadow-md z-[99999]'>
        <div className='bg-gradient-to-t from-primary to-secondary'>
          <div className='container  py-[2px] sm:block hidden'>
            <div className='flex justify-between'>
              <p>20% off on next booking</p>
              <p>Mobile No. +91123456724</p>
            </div>
          </div>
        </div>

        <div className='container py-3 sm:py-0'>
          <div className='container flex justify-between items-center'>
            {/* logo section */}
            <div>
              <Link to='/'>
                <img src={log} className='h-16' alt='Logo' />
              </Link>
            </div>
            <div className='hidden md:block'>
              <ul className='flex items-center gap-6'>
                <li className='py-1'>
                  <NavLink
                    to='/'
                    activeClassName='active'  // Corrected the prop name
                    onClick={() => window.scrollTo(0, 0)}
                  >
                    Home
                  </NavLink>
                </li>
                <li className='py-1'>
                  <NavLink
                    to='/About'
                    activeClassName='active'
                    onClick={() => window.scrollTo(0, 0)}
                  >
                    About
                  </NavLink>
                </li>
                <li className='py-1'>
                  <NavLink
                    to='/Blog'
                    activeClassName='active'
                    onClick={() => window.scrollTo(0, 0)}
                  >
                    Blogs
                  </NavLink>
                </li>
                <li className='py-1 relative group'>
                  <NavLink
                    to='/Places'
                    activeClassName='active'
                    onClick={() => window.scrollTo(0, 0)}
                  >
                    Best Places
                  </NavLink>
                </li>
                {/* dropdown section */}
                <li>
                  <div className='dropdown  flex items-center cursor-pointer'>
                    <span>Quick Links</span>
                    <MdArrowDropDown className='transition-all duration-200 group-hover:rotate-180' />
                  </div>
                  <div className='absolute -left-9 z-[9999] hidden group-hover:block shadow-md text-black w-[150px] bg-white'>
                    <ul>
                      {dropdownList.map((data) => {
                        return (
                          <li key={data.name}>
                            <a
                              href={data.link}
                              className='inline-block w-full rounded-md p-2 hover:bg-primary'
                            >
                              {data.name}
                            </a>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
            {/* book now button */}
            <div className='flex gap-4'>
              <button className='bg-gradient-to-t from-primary to-secondary hover:bg-bg-gradient-to-r hover:bg-primary 
                        transition-all duration-600 text-white px-3 py-1 rounded-full'>Book Now</button>
              {/* mobile  menu */}
              <div className='md:hidden block'>
                {showMenu ? (< HiMenuAlt1 onClick={toggleMenu} className="cursor-pointer transition-all" size={30} />
                ) : (
                  <HiMenuAlt3 onClick={toggleMenu} className="cursor-pointer transition-all" size={30} />
                )}
              </div>
            </div>

          </div>
        </div>

        < ResponsiveMenu setShowMenu={setShowMenu} showMenu={showMenu}/>
      </div>

    </>
  );
};

export default Navbar;
