// Bannerimg.js

import React from 'react';

export const Bannerimg = ({ img }) => {
  const bgImage = {
    backgroundImage: `url(${img})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '600px',
  };

  return (
    <div data-aos="zoom-in" className=' m-8 rounded-2xl ' style={bgImage}></div>
  );
};
