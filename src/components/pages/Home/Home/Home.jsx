import React, { useEffect, useState } from 'react';
import Banner from '../banner/Banner';
import Gallery from '../gallery/Gallery';

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
            <div  >
                <Gallery imgUrl={imgUrl} columnCount="3" gap="5"></Gallery>

                <div className='text-center'>
                {
                    showall ? <button onClick={handleShowAll} className='btn btn-accent font-bold '>Show less</button>:<button onClick={handleShowAll} className='btn btn-accent font-bold '>Show more</button>
                }
                </div>
            </div>
        </div>
    );
};

export default Home;