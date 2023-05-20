import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import ToysTable from './ToysTable';

const AllToys = () => {
    const alltoys=useLoaderData()
    const [showall,setShowall]=useState(false)
    return (
        <div>
            <div className="overflow-x-auto mx-auto max-w-7xl">
  <table className="table w-full">
    {/* head */}
    <thead>
      <tr>
      <th>
          <label>
            <p>Index</p>
          </label>
        </th>
        <th>
          <label>
            <p>photo</p>
          </label>
        </th>

        <th>Toy Name</th>

        <th>Seller</th>
        <th>Sub-category</th>
        <th>Price</th>
        <th> Quantity</th>
        <th><p className='ml-3'>View Details</p></th>
      </tr>
    </thead>
    <tbody>
      {
        showall ? <> 
            {
                alltoys.map((toy,i)=><ToysTable key={toy._id} index={i + 1} toy={toy}></ToysTable>)
            }
        </> :<> 
            {
                alltoys.slice(0,20).map((toy,i)=><ToysTable key={toy._id} index={i + 1} toy={toy}></ToysTable>)
            }
        </>
        
      }
      
    </tbody>
    
    
  </table>
 
</div>
<div className='text-center my-10'>
                {
                    showall ? <button onClick={()=>setShowall(!showall)} className='btn btn-outline btn-accent font-bold '>Show less</button>:<button onClick={()=>setShowall(!showall)}  className='btn btn-outline btn-accent  font-bold '>Show more</button>
                }
                </div>
        </div>
    );
};

export default AllToys;