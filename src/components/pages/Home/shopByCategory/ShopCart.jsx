import AOS from 'aos';
import 'aos/dist/aos.css';

import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../../../../AuthProvider/AuthProvider';

const ShopCart = ({toy}) => {
  AOS.init()
    const {picture,price,rating,toy_name,_id}=toy
    const {user}=useContext(AuthContext)
    const navigate=useNavigate()
    const handleViewDetails=()=>{
      if(!user){
        Swal.fire({
          icon: 'info',
          title: 'Please Login First...',
          text: 'You have to login first to view this item details!'
          
        })

      }
     navigate(`/view-details/${_id}`)
    }
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
                <button onClick={handleViewDetails} className="btn w-full bg-[#C4DFDF] hover:bg-[#D2E9E9] duration-500 border-none text-black tracking-wider ">View Details</button>
                </div>
              </div>
            </div>
        </div>
    );
};

export default ShopCart;