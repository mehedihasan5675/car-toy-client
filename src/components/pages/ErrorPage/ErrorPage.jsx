import React from 'react';
import { useNavigate } from 'react-router-dom';

const ErrorPage = () => {
    const navigate=useNavigate()
    return (
        <div  className='flex justify-center items-center min-h-screen'>
           <div>
           <img className='' src="https://media.istockphoto.com/id/687810238/photo/pug-dog-with-yellow-constructor-safety-helmet-and-cone-and-404-error-and-dead-end-sign-on.jpg?b=1&s=170667a&w=0&k=20&c=xDoF6tCPAMDUIdr_2pSsi6Pm8dtDxCyhQpYyNvskDyY=" alt="" />
           <button onClick={()=>navigate('/')} className='btn btn-success btn-outline mx-auto w-3/6 justify-center flex mt-10'> Back To Home</button>
           </div>
        </div>
    );
};

export default ErrorPage;