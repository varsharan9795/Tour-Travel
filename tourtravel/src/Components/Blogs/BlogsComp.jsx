import React from 'react'
import BlogsCard from './BlogsCard.jsx';
import Img1 from '../../assets/images/boat.jpeg';
import Img2 from '../../assets/images/banglore.jpeg';
import Img3 from '../../assets/images/maldiv.jpeg';
const BlogsData = [
    {
      id: 1,
      image: Img1, // You might want to replace 'Img1' with the actual image URL or path
      title: 'The 10 Best Places to Visit in India',
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum at magni eos voluptatum similique, ad, suscipit quibusdam ea esse sit eum in consequuntur possimus error. Culpa maxime harum quae officiis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum at magni eos voluptatum similique, ad, suscipit quibusdam ea esse sit eum in consequuntur possimus error. Culpa maxime harum quae officiis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum at magni eos voluptatum similique, ad, suscipit quibusdam ea esse sit eum in consequuntur possimus error. Culpa maxime harum quae officiis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum at magni eos voluptatum similique, ad, suscipit quibusdam ea esse sit eum in consequuntur possimus error. Culpa maxime harum quae officiis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum at magni eos voluptatum similique, ad, suscipit quibusdam ea esse sit eum in consequuntur possimus error. Culpa maxime harum quae officiis ",
      author: "Varsha Rani",
      date: "February 2024"
    },
    {
        id: 2,
        image: Img2, // You might want to replace 'Img1' with the actual image URL or path
        title: 'The 10 Best Places to Visit in India',
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum at magni eos voluptatum similique, ad, suscipit quibusdam ea esse sit eum in consequuntur possimus error. Culpa maxime harum quae officiis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum at magni eos voluptatum similique, ad, suscipit quibusdam ea esse sit eum in consequuntur possimus error. Culpa maxime harum quae officiis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum at magni eos voluptatum similique, ad, suscipit quibusdam ea esse sit eum in consequuntur possimus error. Culpa maxime harum quae officiis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum at magni eos voluptatum similique, ad, suscipit quibusdam ea esse sit eum in consequuntur possimus error. Culpa maxime harum quae officiis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum at magni eos voluptatum similique, ad, suscipit quibusdam ea esse sit eum in consequuntur possimus error. Culpa maxime harum quae officiis ",
        author: "Varsha Rani",
        date: "February 2024"
      },
      {
        id: 3,
        image: Img3, // You might want to replace 'Img1' with the actual image URL or path
        title: 'The 10 Best Places to Visit in India',
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum at magni eos voluptatum similique, ad, suscipit quibusdam ea esse sit eum in consequuntur possimus error. Culpa maxime harum quae officiis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum at magni eos voluptatum similique, ad, suscipit quibusdam ea esse sit eum in consequuntur possimus error. Culpa maxime harum quae officiis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum at magni eos voluptatum similique, ad, suscipit quibusdam ea esse sit eum in consequuntur possimus error. Culpa maxime harum quae officiis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum at magni eos voluptatum similique, ad, suscipit quibusdam ea esse sit eum in consequuntur possimus error. Culpa maxime harum quae officiis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum at magni eos voluptatum similique, ad, suscipit quibusdam ea esse sit eum in consequuntur possimus error. Culpa maxime harum quae officiis ",
        author: "Varsha Rani",
        date: "February 2024"
      },
    // Add more blog entries here if needed
  ];
  
export const BlogsComp = () => {
    return (
        <div>
            <div className='container ' data-aos='fade-up'>
                <h1 className='my-8 border-l-8 border-primary/50 
             py-2 pl-2 text-3xl font-bold'>Our Latest Blogs</h1>
                <div className='grid grid-cols-1 gap-4 sm:grid-cols-1 md:grid-cols-3'>
                    {
                        BlogsData.map((item, index) => (
                            <BlogsCard  key={index} {...item}/>
                        ))
                    }
                </div>
            </div>

        </div>
    )
}
