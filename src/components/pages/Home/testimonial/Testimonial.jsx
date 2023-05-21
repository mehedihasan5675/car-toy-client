import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
const Testimonial = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    arrows:true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
  };
  return (
    <div className="max-w-7xl mx-auto px-5">
        <h3 style={{borderBottomRightRadius:'40px',borderTopLeftRadius:'40px'}} className='font-bold text-2xl md:text-4xl italic tracking-wider text-center mt-16 px-5 py-2 bg-[#C4DFDF] text-gray-600 w-full md:w-1/2 mx-auto  '>Testimonial</h3>
      <Slider {...settings}>
        <div className="flex justify-center ">
          <div style={{borderRadius:'0px',padding:'20px 0px'}} className="card h-[450px] w-full mx-auto    bg-[#E3F4F4] ">
            <figure className="px-10 pt-10">
              <img
                src="https://images.unsplash.com/photo-1556157382-97eda2d62296?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
                alt="Shoes" 
                className="md:h-36 md:w-36 h-28 w-28 rounded-full"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title ">John Barl</h2>
              <p className="italic w-full md:w-10/12 tracking-wider">I recently had the pleasure of exploring TrusToy, and I must say it exceeded all my expectations. As a parent seeking high-quality toy cars for my little ones, I was thrilled to discover a treasure trove of automotive wonders that instantly sparked their imaginations and brought joy to our household.</p>
              <div className="card-actions">
                
              </div>
            </div>
          </div>
        </div>
        <div>
        <div className="flex justify-center ">
          <div style={{borderRadius:'0px',padding:'20px 0px'}} className="card h-[450px] w-full mx-auto  bg-[#E3F4F4] ">
            <figure className="px-10 pt-10">
              <img
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZmVzc2lvbmFsfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
                alt="Shoes" 
                className="md:h-36 md:w-36 h-28 w-28 rounded-full"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title ">Marsal lay</h2>
              <p className="italic w-full md:w-10/12 tracking-wider">First and foremost, the website's user-friendly interface made navigation a breeze. It was easy to browse through the extensive collection of toy cars, which featured a wide variety of makes, models, and designs. From sleek sports cars to rugged off-roaders, there was something to suit every taste and preference.</p>
              <div className="card-actions">
                
              </div>
            </div>
          </div>
        </div>
        </div>
        <div>
        <div className="flex justify-center ">
          <div style={{borderRadius:'0px',padding:'20px 0px'}} className="card h-[450px] w-full mx-auto  bg-[#E3F4F4] ">
            <figure className="px-10 pt-10">
              <img
                src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cHJvZmVzc2lvbmFsfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
                alt="Shoes" 
                className="md:h-36 md:w-36 h-28 w-28 rounded-full"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title ">Stiven lua</h2>
              <p className="italic w-full md:w-10/12 tracking-wider">What truly impressed me was the attention to detail in each toy car. The craftsmanship was exceptional, with intricate designs and realistic features that mirrored their real-life counterparts. It was evident that great care had been taken to ensure the toys were not only visually appealing but also durable and long-lasting.</p>
              <div className="card-actions">
                
              </div>
            </div>
          </div>
        </div>
        </div>
        <div>
        <div className="flex justify-center ">
          <div style={{borderRadius:'0px',padding:'20px 0px'}} className="card h-[450px] w-full mx-auto  bg-[#E3F4F4] ">
            <figure className="px-10 pt-10">
              <img
                src="https://images.unsplash.com/photo-1425421669292-0c3da3b8f529?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
                alt="Shoes" 
                className="md:h-36 md:w-36 h-28 w-28 rounded-full"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title ">Brain Barl</h2>
              <p className="italic w-full md:w-10/12 tracking-wider">I recently had the pleasure of exploring TrusToy, and I must say it exceeded all my expectations. As a parent seeking high-quality toy cars for my little ones, I was thrilled to discover a treasure trove of automotive wonders that instantly sparked their imaginations and brought joy to our household.</p>
              <div className="card-actions">
                
              </div>
            </div>
          </div>
        </div>
        
        </div>
        <div>
        <div className="flex justify-center ">
          <div style={{borderRadius:'0px',padding:'20px 0px'}} className="card h-[450px] w-full mx-auto  bg-[#E3F4F4] ">
            <figure className="px-10 pt-10">
              <img
                src="https://plus.unsplash.com/premium_photo-1666625102520-da34db933038?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
                alt="Shoes" 
                className="md:h-36 md:w-36 h-28 w-28 rounded-full"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title ">Jesson Rarl</h2>
              <p className="italic w-full md:w-10/12 tracking-wider">Placing an order was a seamless process, thanks to the website's secure and efficient checkout system. I appreciated the clear product descriptions, which provided key information about each toy car, including materials used and recommended age ranges. This attention to detail gave me confidence in my purchases and allowed me to make informed decisions.</p>
              <div className="card-actions">
                
              </div>
            </div>
          </div>
        </div>
        </div>
        <div>
        <div className="flex justify-center ">
          <div style={{borderRadius:'0px',padding:'20px 0px'}} className="card h-[450px] w-full mx-auto  bg-[#E3F4F4] ">
            <figure className="px-10 pt-10">
              <img
                src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmVzc2lvbmFsfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
                alt="Shoes" 
                className="md:h-36 md:w-36 h-28 w-28 rounded-full"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title ">John Barl</h2>
              <p className="italic w-full md:w-10/12 tracking-wider">I recently had the pleasure of exploring TrusToy, and I must say it exceeded all my expectations. As a parent seeking high-quality toy cars for my little ones, I was thrilled to discover a treasure trove of automotive wonders that instantly sparked their imaginations and brought joy to our household.</p>
              <div className="card-actions">
                
              </div>
            </div>
          </div>
        </div>
        </div>
      </Slider>
    </div>
  );
};

export default Testimonial;
