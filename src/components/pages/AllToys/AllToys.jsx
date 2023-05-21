import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../../../hook/useTitle/useTitle';
import ToysTable from './ToysTable';

const AllToys = () => {
    const alltoysData=useLoaderData()
    const [alltoys,setAllToys]=useState(alltoysData)
    useTitle('All Toys')
    const [showall,setShowall]=useState(false)
    const handleSearchBtn=(e)=>{
      e.preventDefault()
const searchBy=e.target.searchText.value 

fetch(`http://localhost:5000/toySearch/${searchBy}`)
.then(res=>res.json())
.then(data=>{
  setAllToys(data)
})
    }
    return (
        <div>
           <form onSubmit={handleSearchBtn} className="form-control mx-auto flex flex-row my-5 gap-3 w-full max-w-xs">
  
  <input type="text" name='searchText' placeholder="Type here" className="input input-bordered   max-w-xs" />
  <input type='submit' value="Search"  className='btn btn-ghost border-2 border-gray-300'/>
</form>
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
{   alltoys.length <20 ? "":
                    showall ? <button onClick={()=>setShowall(!showall)} className='btn btn-outline btn-accent font-bold '>Show less</button>:<button onClick={()=>setShowall(!showall)}  className='btn btn-outline btn-accent  font-bold '>Show more</button>
                }
                </div>
        </div>
    );
};

export default AllToys;