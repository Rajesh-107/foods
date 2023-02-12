import { Box, FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import Link from 'next/link';
import React from 'react';
import { FaUser } from 'react-icons/fa';

const Dropdown = () => {
 
    return (
        <div className="dropdown dropdown-left">
        <label tabIndex={0} className="m-1"><FaUser className='text-green-500 h-8 w-8 cursor-pointer' /></label>
        <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-44">
          <li><Link href='/login'>Login</Link></li>
          <li><Link href='/alluser'>All Users</Link></li>
        </ul>
      </div>

    );
};

{/* <FaUser className='text-green-500 h-8 w-8' /> */}

export default Dropdown;