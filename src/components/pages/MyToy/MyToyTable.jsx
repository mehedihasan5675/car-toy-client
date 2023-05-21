import React from "react";
import { FaEdit, FaEye, FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
const MyToyTable = ({ toy, index,mytoys,setMytoys }) => {
 
  const {
    picture,
    price,
    sub_category,
    seller_name,
    available_quantity,
    toy_name,
    _id,
  } = toy;

  const handleDeleteBtn = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/toydelete/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your toy has been deleted.", "success");
              const remaining=mytoys.filter((toy)=>toy._id !== id)
              setMytoys(remaining)
            }
          });
      }
    });
  };

  return (
    <tr>
      
      <th>
        <label>
          <p>{index}</p>
        </label>
      </th>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src={picture} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
        </div>
      </td>
      <td>
        <div>
          <div className="font-bold">{toy_name}</div>
        </div>
      </td>
      <td>
        <div className="text-base font-semibold opacity-70">{seller_name}</div>
      </td>
      <td>
        <div className="text-sm opacity-70">{sub_category}</div>
      </td>
      <td>
        <div className="text-sm opacity-70">{price}</div>
      </td>
      <td>
        <div className="text-sm opacity-70">{available_quantity}</div>
      </td>
      <th>
        <div>
          <Link>
            <button
              onClick={() => handleDeleteBtn(_id)}
              className="btn text-xs btn-ghost  btn-sm"
            >
              <FaTrashAlt className="w-5 text-red-500 h-5"></FaTrashAlt>
            </button>
          </Link>
          <Link to={`/editToy/${_id}`}>
            <button  className="btn text-xs btn-ghost  btn-sm">
              <FaEdit  className="w-5 text-warning h-5"></FaEdit>
            </button>
          </Link>
          <Link to={`/view-details/${_id}`}>
            <button className="btn text-xs btn-ghost  btn-sm">
              <FaEye className="w-5  h-5"></FaEye>
            </button>
          </Link>

          
      
          
        </div>
      </th>
    </tr>
  );
};

export default MyToyTable;
