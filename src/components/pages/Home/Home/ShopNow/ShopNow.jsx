import React from 'react';
import shopNowImg from '../../../../../../public/shop.png';
const ShopNow = () => {
    return (
        <div className='max-w-7xl mx-auto py-16'>
            <h3 style={{borderBottomRightRadius:'40px',borderTopLeftRadius:'40px'}} className='font-bold text-2xl md:text-4xl italic tracking-wider text-center mt-16 px-5 py-2 bg-[#C4DFDF] text-gray-600 w-1/2 mx-auto  '>Shop  Your Dream Now</h3>
            <div className="hero h-[450px] md:h-[550px]" style={{ backgroundImage: `url(${shopNowImg})` }}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="w-full text-center">
      <h1 className="mb-5 mx-auto w-full md:w-8/12 text-3xl md:text-5xl font-bold tracking-wider italic">THE QUALITY TOYS OF YOUR
CHILD’S DREAMS</h1>
      <p className="mb-5 my-7 mx-auto w-full md:w-8/12 italic tracking-widest">If you’re looking for a toy shop then look no further.
Go on, trat the kids with out huge selection of online toys shops.With an extensive range of top-tier toy cars, they have the power to transform playtime into an immersive experience that sparks their imagination and fosters endless hours of excitement.</p>
      <button className="btn bg-[#C4DFDF] border-none duration-500 hover:bg-[#c4dfdfe3] text-black font-bold">Shop Now</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default ShopNow;