import React from 'react';
import { Link } from 'react-router-dom';

const MyToyTable = ({toy,index}) => {
    const {
        picture,
        price,
        sub_category,
        seller_name,
        available_quantity,
        toy_name,
        _id,
        
      } = toy;
      return (
        <tr >
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
            <Link to={`/view-details/${_id}`}><button className="btn text-xs btn-ghost btn-sm">view details</button></Link>
          </th>
        </tr>
      );
};

export default MyToyTable;