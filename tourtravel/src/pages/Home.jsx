import React from 'react'
import Nature from './../assets/images/Nature.mp4';
import Hero from '../Components/Hero/Hero';
import { Places } from '../Components/Places/Places';
import { Bannerimg } from '../Components/Bannerimg/Bannerimg';
import Poster from '../assets/images/bgImage.jpeg';

import Blogs from './Blogs';
import { Banner } from '../Components/Banner/bANNER.JSX';
import Banglore from '../assets/images/banglore.jpeg';
import { Testimonial } from '../Components/Testimonial/Testimonial';
//import Poster2 from '../assets/images/shimla.jpeg';


const Home = (img) => {
  return (
    <>
     <div>
      <div className='relative h-[700px]'>
        <video
        autoPlay
        loop
        muted
        className='absolute right-0 top-0 h-[700px] w-full object-cover z-[-1]'
        >
          <source src={Nature} type='video/mp4'/>
        </video>
        <Hero/>
        
      </div>
      <Places/>
 
      
      <Bannerimg img={Poster}/>
     <Blogs/>
    <Banner/>
    <Bannerimg img={Banglore}/>
<Testimonial/>
      </div> 
    </>
  )
}

export default Home
