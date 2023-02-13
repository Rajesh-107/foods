import React from 'react';
import { BsCartFill } from 'react-icons/bs';
import { BiFileFind } from 'react-icons/bi';
import { GiHamburgerMenu } from 'react-icons/gi';
import { FcAbout } from 'react-icons/fc';
import { AiFillShopping ,AiFillContacts } from 'react-icons/ai';
import { GrBundle } from 'react-icons/gr';
import { MdFoodBank, MdMore } from 'react-icons/md';

const Mobilenav = () => {
    return (
        <div className='block md:hidden  w-full h-full py-2 px-3'>
                  {/* Top header include search and menu tab */}
                  <div className='h-1/2 flex items-center justify-between'>
                        <p>Logo</p>
                        <div className='h-full flex items-center gap-4'>
                              {/* search component. In this component include all search functionality and search drawer */}
                              
                              {/* menu component. In this component include all profile related menus */}
                              <GiHamburgerMenu className='text-green-500 h-8 w-8' />
                        </div>
                  </div>
                  {/* Bottom menu bar */}
                  <div className='h-1/2 w-full grid grid-cols-6 gap-2 mt-1'>
                  <FcAbout className='text-green-500 h-8 w-8' 
                              
                              activeLink={"/"}
                        />
                       <AiFillShopping className='text-green-500 h-8 w-8' 
                             
                              activeLink={"/"}
                        />
                       <AiFillContacts className='text-green-500 h-8 w-8' 
                              
                              activeLink={"/"}
                        />
                       <MdFoodBank className='text-green-500 h-8 w-8' 
                              
                              activeLink={"/"}
                        />
                      <BiFileFind className='text-green-500 h-8 w-8' 
                              
                              activeLink={"/"}
                        />
                       <MdMore className='text-green-500 h-8 w-8' 
                           
                              activeLink={"/"}
                        />
                  </div>
            </div>
    );
};

export default Mobilenav;