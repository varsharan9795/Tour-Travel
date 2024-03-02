import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";

export default function SimpleSlider() {
    var settings = {



        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
    };
    return (
        <Slider {...settings}>
            <div>
                <div className='pr-4 '>
                    <img src="https://images.pexels.com/photos/1234035/pexels-photo-1234035.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" className='rounded-xl' />

                </div>
            </div>
            <div className='pr-4 '>
                <img src="https://images.pexels.com/photos/1008155/pexels-photo-1008155.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" className='rounded-xl' />
            </div>
            <div className='pr-4 '>
                <img src="https://images.pexels.com/photos/5951880/pexels-photo-5951880.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className='rounded-xl' />
            </div>
            <div className='pr-4 '>
                <img src="https://images.pexels.com/photos/241558/pexels-photo-241558.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" className='rounded-xl' />
            </div>
            <div className='pr-4 '>
                <img src="https://images.pexels.com/photos/895254/pexels-photo-895254.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" className='rounded-xl' />
            </div>
            <div className='pr-4 '>
                <img src="https://images.pexels.com/photos/1008155/pexels-photo-1008155.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" className='rounded-xl' />
            </div>

        </Slider>
    );
}