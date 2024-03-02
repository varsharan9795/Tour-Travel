import React from 'react'
import Slider from './Slider.jsx'

export const Testimonial = () => {
  return (
    <div className='px-24'>
        <div className='container'>
         {/* Header section */}
        <div className='text-center mb-20 max-w-[400px] mx-auto '>
            <p className='text-sm bg-clip-text text-transparent bg-gradient-to-tr from-primary to-secondary'>
                Testimonial
            </p>
            <h1 className='text-3xl font-bold '>Testimonial</h1>
            <p className='text-xs text-gray-400'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio at totam aspernatur, voluptas 
                similique delectus 
                qui et possimus vitae velit! Vero tenetur, magni alias odit facilis eum quod aperiam tempore!
            </p>
        </div>


         {/* testiomonial section */}

    <Slider/>
         
        </div>
    </div>
  )
}
export default Testimonial
