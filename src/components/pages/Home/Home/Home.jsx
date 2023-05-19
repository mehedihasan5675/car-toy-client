import React, { useEffect, useState } from 'react';
import Banner from '../banner/Banner';
import Gallery from '../gallery/Gallery';
import ShopCategory from '../shopByCategory/ShopCategory';
import Testimonial from '../testimonial/Testimonial';
import ShopNow from './ShopNow/ShopNow';

const Home = () => {
    const [imgUrl,setImgUrl]=useState([])
    const [showall,setShowall]=useState(false)
    const handleShowAll=()=>{
        setShowall(!showall)
        console.log('hu',showall);
        
    }
    useEffect(()=>{
        fetch(`./data/gallery.json`)
        .then(res=>res.json())
        .then(data=>{
            const sliceData=data.slice(0,5)
            if(showall){
                setImgUrl(data)
            }else{
                setImgUrl(sliceData)
            }
            
        })
    },[showall])
    return (
        <div>
            <Banner></Banner>
            <div  className='py-10 md:py-16'>
            <h3 style={{borderBottomRightRadius:'40px',borderTopLeftRadius:'40px'}} className='font-bold text-2xl md:text-4xl italic tracking-wider text-center mt-16 px-5 py-2 bg-[#C4DFDF] text-gray-600 w-1/2 mx-auto  '>Our Cars Gallery</h3>

                <Gallery imgUrl={imgUrl} columnCount="3" gap="5"></Gallery>

                <div className='text-center '>
                {
                    showall ? <button onClick={handleShowAll} className='btn btn-outline btn-accent font-bold '>Show less</button>:<button onClick={handleShowAll} className='btn btn-outline btn-accent  font-bold '>Show more</button>
                }
                </div>
            </div>

                <ShopCategory></ShopCategory>
                <Testimonial></Testimonial>
                <ShopNow></ShopNow>
            
        </div>
    );
};

export default Home;