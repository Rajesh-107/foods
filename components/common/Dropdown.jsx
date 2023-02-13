import { Box, FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import Link from 'next/link';
import React, { useState } from 'react';
import { FaUser } from 'react-icons/fa';
import { BiLogOut } from 'react-icons/bi';

const Dropdown = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoggedOut, setIsLoggedOut] = useState(false);

  const handleLogout = async () => {
    try {
      await axios.post('/api/logout');
      setIsLoggedOut(true);
    } catch (error) {
      console.error(error);
    }
  };

    return (
        <div className="dropdown dropdown-left">
        <label tabIndex={0} className="m-1">{
          isLoggedIn ? (<FaUser className='text-green-500 h-8 w-8 cursor-pointer' />) : (<BiLogOut onClick={handleLogout} className='text-green-500 h-8 w-8 cursor-pointer' />)
        }</label>
        <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-44">
          <li><Link href='/login'>{isLoggedIn ? 'Logout' : 'Login' }</Link></li> 
          <li><Link href='/alluser'>All Users</Link></li>
        </ul>
      </div>

    );
};

{/* <FaUser className='text-green-500 h-8 w-8' /> */}

export default Dropdown;