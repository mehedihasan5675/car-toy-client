import AOS from 'aos';
import 'aos/dist/aos.css';

import React from 'react';
import { Link } from 'react-router-dom';

const ShopCart = ({toy}) => {
  AOS.init()
    // console.log(toy)
    const {picture,price,rating,toy_name,_id}=toy
    return (
        <div  className='mx-auto '>
            <div data-aos="fade-right" data-aos-duration="1000" className="card w-96 lg:w-80 xl:w-96 bg-base-100 shadow-xl">
              <figure className="px-5 h-64   pt-5">
                <img
                  src={picture}
                  alt="Car Toys"
                  className="rounded-xl w-full  h-full"
                />
              </figure>
              <div className="card-body items-left text-left">
                <h2 className="card-title"> {toy_name}</h2>
                <div className='flex justify-between'>
                <p>Price: <span className='text-[#73A9AD] font-semibold'>${price}</span></p>
                <p className='text-center'>Rating: <span className='text-[#73A9AD] font-semibold'>⭐{rating} </span></p>
                </div>
                <div className="card-actions w-full">
                <Link to={`/view-details/${_id}`}><button className="btn w-full bg-[#C4DFDF] hover:bg-[#D2E9E9] duration-500 border-none text-black tracking-wider ">View Details</button></Link>
                </div>
              </div>
            </div>
        </div>
    );
};

export default ShopCart;