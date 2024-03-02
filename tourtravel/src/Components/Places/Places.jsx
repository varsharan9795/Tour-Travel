import React from 'react';
import { PlacesCard } from './PlacesCard';
import Img1 from '../../assets/images/boat.jpeg';
import Img2 from '../../assets/images/banglore.jpeg';
import Img3 from '../../assets/images/maldiv.jpeg';
import Img4 from '../../assets/images/shimla.jpeg';
import Img5 from '../../assets/images/singapur.jpg';
import Img6 from '../../assets/images/tajmahal.jpg';

const PlacesData = [
    {
        img: Img1,
        title: "Boat tour",
        location: "USA",
        description: "Checking your network cables, modem, and routers Reconnecting to your wireless network Running Windows Network Diagnostics",
        price: "$100",
        type: "cultural Relax"
    },
    {
        img: Img2,
        title: "Boat tour",
        location: "USA",
        description: "Checking your network cables, modem, and routers Reconnecting to your wireless network Running Windows Network Diagnostics",
        price: "$100",
        type: "cultural Relax"
    },
    {
        img: Img3,
        title: "Boat tour",
        location: "USA",
        description: "Checking your network cables, modem, and routers Reconnecting to your wireless network Running Windows Network Diagnostics",
        price: "$100",
        type: "cultural Relax"
    },
    {
        img: Img4,
        title: "Boat tour",
        location: "USA",
        description: "Checking your network cables, modem, and routers Reconnecting to your wireless network Running Windows Network Diagnostics",
        price: "$100",
        type: "cultural Relax"
    },
    {
        img: Img5,
        title: "Boat tour",
        location: "USA",
        description: "Checking your network cables, modem, and routers Reconnecting to your wireless network Running Windows Network Diagnostics",
        price: "$100",
        type: "cultural Relax"
    },
    {
        img: Img6,
        title: "Boat tour",
        location: "USA",
        description: "Checking your network cables, modem, and routers Reconnecting to your wireless network Running Windows Network Diagnostics",
        price: "$100",
        type: "cultural Relax"
    },
];

export const Places = () => {
    return ( 
        <>
        <div className='bg-gray-50 py-10'>
            <div className='container'>
                <h1 className='my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold'>Best places to visit</h1>
                <div className='grid  sm:grid-cols-2 md:grid-cols-3 gap-8'>
                    {PlacesData.map((item, index) => (
                        <PlacesCard key={index} {...item} />
                    ))}
                </div>
            </div>
        </div>
        </>
    );
};
