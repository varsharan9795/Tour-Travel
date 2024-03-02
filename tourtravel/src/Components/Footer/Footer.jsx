import React from 'react';

import { FaFacebook, FaInstagram, FaLinkedin, FaLocationArrow, FaMobileAlt } from 'react-icons/fa';
import Naturevid from '../../assets/images/naturevid.mp4';
import boat from '../../assets/images/boat.jpeg';
import { Link } from "react-router-dom";

const FooterLinks = [
  {
    name: "Home",
    link: "/",

  },
  {
    name: "About",
    link: "/about",

  },
  {
    name: "Best Places",
    link: "/best-places",

  },
  {
    name: "Blogs",
    link: "/blogs",

  },
];

const Footer = () => {
  return (
    <div className='relative py-10 h-[600px] overflow-hidden'>
      <video
        autoPlay
        loop
        muted
        className='absolute right-0 top-0 h-[700px] w-full object-cover z-[-1]'
      >
        <source src={Naturevid} type='video/mp4' />
      </video>
      <div className='container sm:h-full'>
        <div className=' grid md:grid-cols-3 gap-3 py-5 bg-white/80 backdrop-blur-sm

rounded-t-xl'>
          <div className='py-8 px-4'>
            <h1 className='flex items-center gap-3 text-xl sm:text-3xl font-bold text-justify sm:text-left'></h1>
            <img src={boat} className='max-h-[60px] h-16 w-16 rounded-full' alt="" />
            <p className='text-sm'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus facilis sapiente corporis nihil voluptate soluta reprehenderit, eius minus officia,
              consequuntur ducimus, rem illum ex dolor iste quasi inventore aspernatur? Labore!
            </p>
            <br />

            <div className='flex gap-2 items-center mt-3'>
              < FaLocationArrow />
              <p>Lucknow utter pradesh</p>
            </div>
            <div className='flex gap-2 items-center mt-3'>
              < FaMobileAlt />
              <p>+91 6307223045</p>
            </div>
            {/* social icon */}
            <div className='flex items-center gap-3 mt-6'>
              <a href="#">
                <FaInstagram className='text-3xl' />
              </a>
              <a href="#">
                <FaFacebook className='text-3xl' />
              </a>
              <a href="#">
                <FaLinkedin className='text-3xl' />
              </a>
            </div>

          </div>
          {/* footer links */}
          <div className='grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-50'>
            <div>
              <div className='py-8 px-4'>
                <h1>Important Links </h1>
                <ul className='p-2'>
                  {FooterLinks.map(({ name, link }) => (
                    <li className='m-5 cursor-pointer hover:translate-x-1 duration-300 hover:text-primary space-x-1 text-gray-700' key={link}>
                      <Link to={link} onClick={() => { window.scrollTo(0, 0) }}>
                        <span>&#11162;</span>
                        <span>{name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>

              </div>
            </div>


            <div>
              <div className='py-8 px-4'>
                <h1>Important Links </h1>
                <ul className='p-2'>
                  {FooterLinks.map(({ name, link }) => (
                    <li className='m-5 cursor-pointer hover:translate-x-1 duration-300 hover:text-primary space-x-1 text-gray-700' key={link}>
                      <Link to={link} onClick={() => { window.scrollTo(0, 0) }}>
                        <span>&#11162;</span>
                        <span>{name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>

              </div>
            </div>
            <div>
              <div className='py-8 px-4'>
                <h1>Important Links </h1>
                <ul className='p-2'>
                  {FooterLinks.map(({ name, link }) => (
                    <li className='m-5 cursor-pointer hover:translate-x-1 duration-300 hover:text-primary space-x-1 text-gray-700' key={link}>
                      <Link to={link} onClick={() => { window.scrollTo(0, 0) }}>
                        <span>&#11162;</span>
                        <span>{name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>

              </div>
            </div>



          </div>





        </div>

        <div>
          <div className='text-center py-5 border-t-2 border-gray-300/90 bg-primary text-white'>
            Copyright 2024 all rights reserved
          </div>
        </div>



      </div>
    </div>
  )
}

export default Footer;
