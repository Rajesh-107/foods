import { MenuItem } from '@mui/material';
import Link from 'next/link';
import React, { useState } from 'react';
import { BsCartFill } from 'react-icons/bs';
import { FaUser } from 'react-icons/fa';
import { navLinks } from '../../src/navLinks';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';

import AdbIcon from '@mui/icons-material/Adb';
import Dropdown from './Dropdown';


const Header = () => {
   

    return (
   
        <header className='w-full h-[90px] md:h-[60px] sticky  top-0 flex items-center bg-white z-50'>
            <div className="hidden md:flex container mx-auto items-center justify-between h-full">
                {/* leftside */}
                <div className='text-2xl font-bold text-black'>
                    <Link href='/'>Logo</Link>
                </div>
                {/* middleside */}
                <div className="w-[790px] h-full grid place-items-center">
                    <ul className="flex items-center  gap-12">
                        <li className='text-black font-bold hover:text-[#ABC480] hidden md:flex cursor-pointer container mx-auto items-center justify-between h-full'>
                            <Link href='/'>About</Link>
                        </li>
                        <li className='text-black hover:text-[#ABC480] font-bold hidden md:flex container mx-auto items-center justify-between h-full'>
                            <Link href='/'>Shops</Link>
                        </li>
                        <li className='text-black hover:text-[#ABC480] font-bold container items-center justify-between '>
                            <Link href='/'>Subscribe</Link>
                        </li>
                        <li className='hidden text-black hover:text-[#ABC480] font-bold md:flex container mx-auto items-center justify-between h-full'>
                            <Link href='/'>Bundle</Link>
                        </li>
                        <Link href='/'>
                        <li className='hidden text-black hover:text-[#ABC480] font-bold md:flex container mx-auto items-center justify-between h-full'>
                            Recpies
                        </li>
                        </Link>
                        
                        <li className='hidden text-black hover:text-[#ABC480] font-bold md:flex container mx-auto items-center justify-between h-full'>
                            <Link href='/'>Find</Link>
                        </li>
                        <li className='hidden text-black hover:text-[#ABC480] font-bold md:flex container mx-auto items-center justify-between h-full'>
                            <Link href='/'>More</Link>
                        </li>
                    </ul>
                </div>
                {/* rightside */}
                <div className=' h-full flex items-center justify-end'>
                    <ul className="h-full flex items-center gap-3" s>
                        <div className='flex justify-center items-center space-x-4'>
                            <BsCartFill className='text-green-500 h-8 w-8' />
                            <div className='text-xs'>
                                <h5 className='font-bold' >62 USD</h5>
                                <p>2 items</p>
                            </div>
                        </div>
                    
                            <Dropdown>
                           
                            </Dropdown>
                      
                    </ul>
                </div>
            </div>
        </header>
    );
};

export default Header;

{/*  */ }