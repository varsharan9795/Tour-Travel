import React from 'react'
import travling from '../../assets/images/trolly.png'
import { MdFlight, MdOutlineLocalHotel } from "react-icons/md";
//import{IoIosWifi} from "react-icons/md";
export const Banner = () => {
    return (
        <div className='min-h-[550px] bg-gray-100 '>
            <div className='min-h-[550px] flex justify-center
         items-center backdrop-blur-xl sm:py-0'>
                <div className='container flex'>
                    <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 items-center'>
                        {/* image section */}

                        <img src={travling} alt="" className='max-w-[600px] w-full mx-auto drop-shadow-[]' />
                    </div>
                    <div >
                   
                      
                        {/* text section */}
                        <h1 data-aos="fade-up" className='text-4xl ml-40  font-bold sm:text-3xl'>Explore all corners the world with us
                        
                        </h1>
                       
                        <p className='text-sm text-gray-500 ml-40 '>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Maxime dolorem necessitatibus facere recusandae quia mollitia! Quas quod saepe ducimus ipsam neque vitae maiores. Voluptate voluptates
                            veniam repellat quidem? Quas, quos?
                            Maxime dolorem necessitatibus facere recusandae quia mollitia! Quas quod saepe ducimus ipsam neque vitae maiores. Voluptate voluptates
                            veniam repellat quidem? Quas, quos?
                           
                        </p>
                      <div className='md:ml-60'>
                        <div className='space-y-6 flex items-center gap-40'>
                            <div className='flex items-center gap-4'>
                            <MdFlight className='text-4xl h-12 w-12 shadow-sm 
                                p-4 rounded-full  bg-violet-100 dark:bg-violet-400'/>
                                <p>Flight</p>
                            </div>
                            <div className='flex items-center gap-4'>
                            <MdOutlineLocalHotel className='text-4xl h-12 w-12 shadow-sm 
                                p-4 rounded-full  bg-violet-100 dark:bg-violet-400'/>
                                <p>Hotel</p>
                            </div>
                        </div>

                        <div className='space-y-6 flex items-center gap-40'>
                            <div className='flex items-center gap-4'>
                            <MdOutlineLocalHotel className='text-4xl h-12 w-12 shadow-sm 
                                p-4 rounded-full  bg-violet-100 dark:bg-violet-400'/>
                                <p>WiFi</p>
                            </div>
                            <div className='flex items-center gap-4'>
                            <MdOutlineLocalHotel className=' text-4xl h-12 w-12 shadow-sm 
                                p-4 rounded-full  bg-violet-100 dark:bg-violet-400 '/>
                                <p>Foods</p>
                            </div>
                        </div>

                      </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
