import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import useTitle from '../../../../hook/useTitle/useTitle';

const EditModal = () => {
  useTitle('Update Toy')
    const editToy=useLoaderData()
    const navigate=useNavigate()
    console.log(editToy);
    const {
        picture,detail_description,
        price,
        sub_category,
        seller_name,
        available_quantity,
        toy_name,

        _id,
      } = editToy;

      const handleUpdateBtn=(e)=>{
        e.preventDefault()
        const form =e.target;
        const price=form.price.value 
        const quantity=form.quantity.value 
        const description=form.description.value 
        // form.reset()
        const editedData={
            price,quantity,description
        }
        console.log(editedData);
fetch(`https://server-cars-toy.vercel.app/updateToy/${_id}`,
{
  method:"PATCH",
  headers:{
    'content-type':'application/json'
  },
  body:JSON.stringify(editedData)
})
.then(res=>res.json())
.then(data=>{
    if(data.modifiedCount > 0){
      // Swal.fire("Deleted!", "Your toy has been deleted.", "success");
      Swal.fire({
        title: 'Your toy has been updated',
        text: "Go back to previous?",
        icon: 'success',
        confirmButtonColor: '#3085d6',
        confirmButtonText: 'Yes, Go!'
      }).then((result) => {
        if (result.isConfirmed) {
      navigate(-1)
          
        }
      })
    }
})
      }
    return (
        <div>
            <div className="py-10 md:py-20 bg-[#E3F4F4]">
  <div className="hero-content mx-auto">
    
    <div className="card  w-5/6 md:w-6/12 xl:w-5/12 shadow-2xl bg-base-100">
      <form onSubmit={handleUpdateBtn} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="text-slate-500 tracking-wider font-semibold  label-text">Price</span>
          </label>
          <input type="text"name='price'  defaultValue={price} className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="text-slate-500 tracking-wider font-semibold  label-text">Available Quantity</span>
          </label>
          <input type="text"name='quantity' defaultValue={available_quantity} className="input input-bordered" />
         
        </div>
        <div className="form-control">
          <label className="label">
            <span className="text-slate-500 tracking-wider font-semibold  label-text">Description</span>
          </label>
          <textarea  rows={5} name='description'  defaultValue={detail_description}  className="textarea text-slate-500  tracking-wide textarea-bordered"></textarea>
         
        </div>
        <div className="form-control mt-6">
        <input type='submit' value="UPDATE" className="btn btn-success text-white"/>

        </div>
      </form>
    </div>
  </div>
</div>
        </div>
    );
};

export default EditModal;