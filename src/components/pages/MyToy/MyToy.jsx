import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import useTitle from '../../../hook/useTitle/useTitle';
import MyToyTable from './MyToyTable';

const MyToy = () => {
    const {user}=useContext(AuthContext)
    const [colorBtn,setColorBtn]=useState('')
    useTitle('MyToys')
    const [mytoys,setMytoys]=useState([])
    const [showall,setShowall]=useState(false)
    console.log(colorBtn);
const handleSort=(sortBy)=>{
setColorBtn(sortBy)


  fetch(`http://localhost:5000/mytoys/${user?.email}`,{
    method:"POST",
    headers:{
      'content-type':'application/json'
    },
    body:JSON.stringify({sortBy})

  })
  .then(res=>res.json())
  .then(data=>{
      setMytoys(data)
  })
  .catch(error=>console.log(error))


}
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
            <div className='flex justify-end gap-2 my-5'>
            <button onClick={()=>handleSort('ascending')} className={`btn btn-sm bg-gray-400 border-none ${colorBtn =="ascending" && 'bg-gray-600'}`}>Ascending</button>
      <button onClick={()=>handleSort('descending')} className={`btn btn-sm bg-gray-400 border-none ${colorBtn =="descending" && 'bg-gray-600'}`}>descending</button>
      
      </div>
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
        <th><p className='ml-3'>actions</p></th>
      </tr>
    </thead>
    <tbody>
      {
        showall ? <> 
            {
                mytoys?.map((toy,i)=><MyToyTable mytoys={mytoys} setMytoys={setMytoys} key={toy._id} index={i + 1} toy={toy}></MyToyTable>)
            }
        </> :<> 
            {
                mytoys?.slice(0,10).map((toy,i)=><MyToyTable mytoys={mytoys} setMytoys={setMytoys} key={toy._id} index={i + 1} toy={toy}></MyToyTable>)
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