import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
const AddToy = () => {
    const {user}=useContext(AuthContext)
    

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    //reset the form
    reset()

    fetch(`http://localhost:5000/addtoy`,{
        method:"POST",
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(data)
    })
    .then((res)=>res.json())
    .then(data=>{
        console.log(data);
        if(data.insertedId){
            Swal.fire({
                title: 'Success!',
                text: 'Toy Added Successfully',
                icon: 'success',
                confirmButtonText: 'Cool'
              })
        }
    })
    .catch(error=>console.log(error))




    




  };
 
  return (<div className="bg-[#D2E9E9]">
  <div className=" max-w-7xl mx-auto py-10 ">
    <form className="mx-5"  onSubmit={handleSubmit(onSubmit)}>
      {/* register your input into the hook by invoking the "register" function */}
      <div className="w-full flex flex-row gap-5 justify-between ">
      <div className="w-1/2 ">
      <label className="label">
            <span className="label-text text-slate-400 font-semibold tracking-wider text-base">Toy Name</span>
          </label>
      <input className="rounded-md w-full outline-slate-300  px-2 tracking-wide text-slate-500 py-2" placeholder="Your toy name" {...register("toy_name",{ required: true })} />
      </div>
      
      {/* include validation with required or other standard HTML validation rules */}
      <div className="w-1/2 ">
      <label className="label">
            <span className="label-text text-slate-400 font-semibold tracking-wider text-base">Seller Name</span>
          </label>
      <input  defaultValue={user?.displayName} className="rounded-md w-full outline-none px-2 tracking-wide text-slate-500 py-2" {...register("seller_name", { required: true })} />
      </div>
      
      </div>
      

      <div className="w-full flex flex-row gap-5 justify-between ">
      <div className="w-4/6 ">
      <label className="label">
            <span className="label-text text-slate-400 font-semibold tracking-wider text-base">Seller Email</span>
          </label>
      <input readOnly className="rounded-md w-full outline-none  px-2 tracking-wide  text-slate-500 py-2"  defaultValue={user?.email} {...register("seller_email")} />
      </div>
      
      {/* include validation with required or other standard HTML validation rules */}
      <div className="w-2/6">
      <label className="label">
            <span className="label-text text-slate-400 font-semibold tracking-wider text-base">Price</span>
          </label>
      <input    placeholder="$" className="rounded-md w-full outline-none  px-2 tracking-wide text-slate-500 py-2" {...register("price", { required: true })} />
      </div>
      
      </div>






      <div className="w-full flex  gap-5 justify-between flex-row">
      <div className="w-1/2 gap-3 flex justify-between">
            <div className=" w-full">
            <label className="label">
            <span className="label-text text-slate-400 font-semibold tracking-wider text-base">rating</span>
          </label>
      <input className="rounded-md w-full outline-slate-300  px-2 tracking-wide text-slate-500 py-2" defaultValue="5" {...register("rating",{ required: true, min: 0, max: 5  })} />
      
            </div>

            <div className="w-full">
            <label className="label">
            <span className="label-text text-slate-400 font-semibold tracking-wider text-base">Quantity</span>
          </label>
      <input defaultValue={10} className="rounded-md w-full outline-slate-300  px-2 tracking-wide text-slate-500 py-2" {...register("available_quantity", { required: true })} />
      
            </div>
            
      </div>
      
      {/* include validation with required or other standard HTML validation rules */}
      <div className="w-1/2 ">
      <label className="label">
            <span className="label-text text-slate-400 font-semibold tracking-wider text-base">Sub Category</span>
          </label>
      
      <select className="rounded-md w-full cursor-pointer outline-slate-300  px-2 tracking-wide text-slate-500 py-2" {...register("sub_category",{ required: true })}>
        <option  value="Sports Cars">Sports Cars</option>
        <option value="Regular Cars">Regular Cars</option>
        <option value="Mini Police Cars">Mini Police Cars</option>
      </select>
      
      </div>
      
      </div>





      <div className="w-full flex flex-col gap-5 ">
      {errors.rating && <span className="text-red-500">Rating between 0 to 5 number.</span>}
      <div className=" w-full">
      <label className="label">
            <span className="label-text text-slate-400 font-semibold tracking-wider text-base">Photo URL</span>
          </label>
      <input placeholder="Photo URL" className="rounded-md w-full outline-slate-300  px-2 tracking-wide text-slate-500 py-2" defaultValue="" {...register("picture",{ required: true })} />
      </div>
      
      {/* include validation with required or other standard HTML validation rules */}
      <div className=" w-full">
      <label className="label">
            <span className="label-text text-slate-400 font-semibold tracking-wider text-base">Description</span>
          </label>
      <textarea defaultValue="This realistic toy car resembles a typical family sedan. It's great for imaginative play and comes with opening doors and a removable roof."  rows={5} className="rounded-md w-full outline-slate-300  px-2 tracking-wide text-slate-500 py-2" {...register("detail_description", { required: true })} />
      </div>
      
      </div>
      {/* errors will return when field validation fails  */}
     
      
      
      <input className="btn w-3/12 btn-ghost btn-outline mt-10" type="submit" />
    </form>
  
  </div>
  </div>)
};

export default AddToy;
