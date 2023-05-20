import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ToysTable from './ToysTable';

const AllToys = () => {
    const alltoys=useLoaderData()
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
        alltoys.map((toy,i)=><ToysTable key={toy._id} index={i + 1} toy={toy}></ToysTable>)
      }
      
    </tbody>
    
    
  </table>
</div>
        </div>
    );
};

export default AllToys;