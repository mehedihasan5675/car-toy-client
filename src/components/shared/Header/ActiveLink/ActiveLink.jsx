import React from 'react';
import { NavLink } from 'react-router-dom';

const ActiveLink = ({to,children}) => {
    return (
        <div>
            <NavLink
  to={to}
  className={({ isActive }) =>
     isActive ? "bg-[#E3F4F4]  shadow-lg    px-3 py-1 rounded-lg" : ""
  }
>
{children}
</NavLink>
        </div>
    );
};

export default ActiveLink;