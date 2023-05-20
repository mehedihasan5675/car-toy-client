import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import MyToyTable from './MyToyTable';

const MyToy = () => {
    const {user}=useContext(AuthContext)

    const [mytoys,setMytoys]=useState([])
    const [showall,setShowall]=useState(false)

console.log(mytoys);
    useEffect(()=>{
        fetch(`http://localhost:5000/mytoys/${user?.email}`,{
          method:"GET",  
        })
        .then(res=>res.json())
        .then(data=>{
            setMytoys(data)
        })
        .catch(error=>console.log(error))
    },[])
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
                mytoys.map((toy,i)=><MyToyTable key={toy._id} index={i + 1} toy={toy}></MyToyTable>)
            }
        </> :<> 
            {
                mytoys.slice(0,20).map((toy,i)=><MyToyTable key={toy._id} index={i + 1} toy={toy}></MyToyTable>)
            }
        </>
        
      }
      
    </tbody>
    
    
  </table>
 
</div>
<div className='text-center my-10'>
{   mytoys.length <20 ? "":
                    showall ? <button onClick={()=>setShowall(!showall)} className='btn btn-outline btn-accent font-bold '>Show less</button>:<button onClick={()=>setShowall(!showall)}  className='btn btn-outline btn-accent  font-bold '>Show more</button>
                }
                </div>
        </div>
    );
};

export default MyToy;