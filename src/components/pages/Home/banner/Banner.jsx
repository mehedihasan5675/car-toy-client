import React from "react";
import Marquee from "react-fast-marquee";
import banner1 from "../../../../../public/banner-1.jpg";
import banner3 from "../../../../../public/banner-2.jpg";
import banner2 from "../../../../../public/banner-7.jpg";
import banner4 from "../../../../../public/banner-8.jpg";
const Banner = () => {


  return (
    <div>
      <div className="carousel w-full ">
        <div id="slide1" className="carousel-item    relative w-full">
          <img src={banner1} className="w-full max-h-screen" />
          <div className="absolute   top-0 left-0 w-full h-full bg-black bg-opacity-40  ">
            <div className="max-w-7xl mx-auto ">
              <h4 className="text-white w-4/6 md:w-3/6 tracking-wider leading-8 capitalize md:text-4xl italic  text-2xl  ml-24 mt-[35%]">"Rev Up the Fun: Explore our Fantastic Cars Toy Collection!"</h4>
            </div>
          </div>

          

          <div className="absolute max-w-7xl mx-auto  flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a
              href="#slide4"
              className="btn  text-black bg-[#C4DFDF] border-none shadow-2xl hover:bg-[#D2E9E9] duration-500 btn-circle"
            >
              ❮
            </a>
            <a
              href="#slide2"
              className="btn  text-black bg-[#C4DFDF] border-none shadow-2xl hover:bg-[#D2E9E9] duration-500 btn-circle"
            >
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item - relative w-full">
          <img src={banner2} className="w-full max-h-screen" />
          <div className="absolute  top-0 left-0 w-full h-full bg-black bg-opacity-40  ">
            <div className="max-w-7xl mx-auto ">
              <h4 className="text-white w-4/6 md:w-3/6 tracking-wider leading-8 capitalize md:text-4xl italic  text-2xl  ml-24 mt-[35%]">"Cruising into Adventure: Discover the Best Cars Toys Online!"</h4>
            </div>
          </div>
          <div className="absolute max-w-7xl mx-auto  flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a
              href="#slide1"
              className="btn  text-black bg-[#C4DFDF] border-none shadow-2xl hover:bg-[#D2E9E9] duration-500 btn-circle"
            >
              ❮
            </a>
            <a
              href="#slide3"
              className="btn  text-black bg-[#C4DFDF] border-none shadow-2xl hover:bg-[#D2E9E9] duration-500 btn-circle"
            >
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item - relative w-full">
          <img src={banner3} className="w-full max-h-screen" />
          <div className="absolute  top-0 left-0 w-full h-full bg-black bg-opacity-40  ">
            <div className="max-w-7xl mx-auto ">
              <h4 className="text-white w-4/6 md:w-3/6 tracking-wider leading-8 capitalize md:text-4xl italic  text-2xl  ml-24 mt-[35%]">"Race to Playtime: Unleash Your Imagination with our Cars Toy Universe!"</h4>
            </div>
          </div>
          <div className="absolute max-w-7xl mx-auto  flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a
              href="#slide2"
              className="btn  text-black bg-[#C4DFDF] border-none shadow-2xl hover:bg-[#D2E9E9] duration-500 btn-circle"
            >
              ❮
            </a>
            <a
              href="#slide4"
              className="btn  text-black bg-[#C4DFDF] border-none shadow-2xl hover:bg-[#D2E9E9] duration-500 btn-circle"
            >
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item - relative w-full">
          <img src={banner4} className="w-full max-h-screen" />
          <div className="absolute  top-0 left-0 w-full h-full bg-black bg-opacity-40  ">
            <div className="max-w-7xl mx-auto ">
              <h4 className="text-white w-4/6 md:w-3/6 tracking-wider leading-8 capitalize md:text-4xl italic  text-2xl  ml-24 mt-[35%]">"The Joy of Motion: Embrace the Magic of Cars Toys on our Website!"</h4>
            </div>
          </div>
          <div className="absolute max-w-7xl mx-auto  flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a
              href="#slide3"
              className="btn  text-black bg-[#C4DFDF] border-none shadow-2xl hover:bg-[#D2E9E9] duration-500 btn-circle"
            >
              ❮
            </a>
            <a
              href="#slide1"
              className="btn  text-black bg-[#C4DFDF] border-none shadow-2xl hover:bg-[#D2E9E9] duration-500 btn-circle"
            >
              ❯
            </a>
          </div>
        </div>
      </div>



      <div className="max-w-7xl overflow-hidden mx-auto md:-mt-20 -mt-12  relative rounded-full py-2  md:py-6 bg-[#D2E9E9]">
        <p className="italic  text-xl left-1/2 -translate-x-1/2  absolute top-2 text-slate-400 text-center font-semibold md:text-2xl">Sponsored By</p>
            <div className="mt-8  pb-2 ">
                <Marquee className="">
                <img className="md:w-28 mr-16 w-16 h-16  md:h-28 rounded-full" src="https://img.freepik.com/free-vector/branding-identity-corporate-logo-vector-design-template_460848-13994.jpg?w=740&t=st=1684402039~exp=1684402639~hmac=ea7d9ab5d2508bc94e4ad3e13db84e1b9604b9336b7bde3800441a38d97456eb" alt="" />

<img className="md:w-28 mr-16 w-16 h-16  md:h-28 rounded-full" src="https://img.freepik.com/free-vector/human-money-logo-design_474888-2094.jpg?size=626&ext=jpg&uid=R35423308&ga=GA1.2.1730661534.1680229426&semt=ais" alt="" />

<img className="md:w-28 mr-16 w-16 h-16  md:h-28 rounded-full" src="https://img.freepik.com/premium-vector/togetherness-logo-design_303861-77.jpg?size=626&ext=jpg&uid=R35423308&ga=GA1.2.1730661534.1680229426&semt=ais" alt="" />

<img className="md:w-28 mr-16 w-16 h-16  md:h-28 rounded-full" src="https://img.freepik.com/free-vector/abstract-hifive-logo-with-tagline_1043-87.jpg?size=626&ext=jpg&uid=R35423308&ga=GA1.2.1730661534.1680229426&semt=ais" alt="" />

<img className="md:w-28 mr-16 w-16 h-16  md:h-28 rounded-full" src="https://img.freepik.com/free-vector/abstract-logo-template_1156-729.jpg?size=626&ext=jpg&uid=R35423308&ga=GA1.2.1730661534.1680229426&semt=ais" alt="" />

<img className="md:w-28 mr-16 w-16 h-16  md:h-28 rounded-full" src="https://img.freepik.com/free-vector/friends-logo-template_23-2149505594.jpg?size=626&ext=jpg&uid=R35423308&ga=GA1.2.1730661534.1680229426&semt=ais" alt="" />

<img className="md:w-28 mr-16 w-16 h-16  md:h-28 rounded-full" src="https://img.freepik.com/free-vector/group-logo-template_1071-34.jpg?size=626&ext=jpg&uid=R35423308&ga=GA1.2.1730661534.1680229426&semt=ais" alt="" />
<img className="md:w-28 mr-16 w-16 h-16  md:h-28 rounded-full" src="https://img.freepik.com/free-vector/gradient-culture-logo-template_23-2149820257.jpg?size=626&ext=jpg&uid=R35423308&ga=GA1.2.1730661534.1680229426&semt=ais" alt="" />
                </Marquee>
            </div>
      </div>
    </div>
  );
};

export default Banner;
