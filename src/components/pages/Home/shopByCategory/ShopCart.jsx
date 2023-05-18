import React from 'react';
const ShopCart = ({toy}) => {
    console.log(toy)
    const {picture,price,rating,toy_name}=toy
    return (
        <div className='mx-auto '>
            <div className="card w-96 lg:w-80 xl:w-96 bg-base-100 shadow-xl">
              <figure className="px-5 h-64   pt-5">
                <img
                  src={picture}
                  alt="Car Toys"
                  className="rounded-xl w-full  h-full"
                />
              </figure>
              <div className="card-body items-left text-left">
                <h2 className="card-title"> {toy_name}</h2>
                <p>Price: <span className='text-[#73A9AD] font-semibold'>${price}</span></p>
                <div className="card-actions w-full">
                  <button className="btn w-full bg-[#C4DFDF] hover:bg-[#D2E9E9] duration-500 border-none text-black tracking-wider ">View Details</button>
                </div>
              </div>
            </div>
        </div>
    );
};

export default ShopCart;