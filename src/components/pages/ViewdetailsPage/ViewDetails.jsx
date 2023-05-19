import React from 'react';
import { Link, useLoaderData, useNavigate } from 'react-router-dom';

const ViewDetails = () => {
    const toy=useLoaderData()
    const navigate=useNavigate()
    const {picture,price,rating,sub_category,seller_name,seller_email,available_quantity,toy_name,_id,detail_description}=toy
    console.log(toy);
    return (
        <div className='bg-[#D2E9E9]'>
            <h3 style={{borderBottomRightRadius:'40px',borderTopLeftRadius:'40px'}} className='font-bold text-2xl md:text-5xl italic tracking-wider text-center mt-6 px-5 py-2 bg-[#C4DFDF] text-gray-600 w-1/2 mx-auto  '>Cars Details</h3>
        <div className='max-w-7xl px-5  mx-auto md:px-16 lg:px-0  md:py-20 py-10'>
            <div className="hero   py-2 px-2 rounded-2xl bg-[#C4DFDF]">
  <div className="hero-content  flex-col lg:flex-row">
    <img src={picture} className="w-full   h-96 md:h-[400px] lg:max-w-lg  rounded-2xl shadow-2xl" />
    <div className='text-start '>
      <h1 className="md:text-5xl text-4xl font-bold text-gray-600">{toy_name}</h1>
      <div className='my-3 flex justify-between'>
        <p className='text-lg font-semibold tracking-wide '>Price: <span className='text-slate-500 font-semibold '>${price}</span></p>
        <p className='text-lg font-semibold tracking-wide '>Rating: <span className='text-slate-500 font-semibold '>⭐{rating}</span></p>
      </div>
      <div className='my-3 flex  justify-between'>
        <p className='text-lg font-semibold tracking-wide '>Category: <span className='text-slate-500 font-semibold '>{sub_category}</span></p>
        <p className='text-lg font-semibold tracking-wide '>Quantity: <span className='text-slate-500 font-semibold '>{available_quantity}</span></p>
      </div>
      
      <p className='text-lg font-semibold tracking-wide '>Seller name: <span className='text-slate-500 font-semibold '>{seller_name}</span></p>
      <p className='text-lg font-semibold tracking-wide  my-3'>Seller email: <span className='text-slate-500 font-semibold '>{seller_email}</span></p>
      
      <p className="py-6 italic text-lg tracking-wide text-slate-500">Description: {detail_description}</p>
      <Link to="/"><button className="btn btn-ghost w-full">Go Back</button></Link>
    </div>
  </div>
</div>
        </div>
        </div>
    );
};

export default ViewDetails;