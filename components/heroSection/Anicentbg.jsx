import Image from 'next/image';
import React from 'react';
import herobg from "../../images/210122 happycamp069 1.png"
import { ImSpoonKnife } from 'react-icons/im';

const Anicentbg = () => {
    return (










        <div className='flex lg:px-10 lg:py-8 mx-auto  '>

           <div className='hidden lg:mt-0 lg:col-span-5 lg:flex'>
           <Image
                alt="Mountains"
                src={herobg}
                placeholder="blur"
                className='pr-16'
                style={{
                    objectFit: 'contain',
                }}
            />
           </div>

            <div className='space-y-9 my-10 mt-20 '>
                <h1 className='text-4xl font-extrabold mb-16'>Choke-Full OF
                    <br /> Anicent Whole Grains</h1>
                <div className='flex space-x-9 '>

                    <ImSpoonKnife className=' w-12 h-10 p-3 bg-[#CCAE62] rounded-full bg-opacity-95 text-white ' />

                    <div className='space-y-2'>
                        <h1 className=' text-gray-700 font-bold'>Made from Whole Grain</h1>
                        <p className='max-w-xl mb-6 font-light text-gray-500 lg:mb-8 md:text-sm lg:text-lg dark:text-gray-400'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum dolorem, ab odit eum fugit nemo aliquam dolores,</p>
                    </div>
                </div>
                <div className='flex space-x-9 '>

                    <ImSpoonKnife className=' w-12 h-10 p-3 bg-[#218C74] rounded-full bg-opacity-95 text-white ' />

                    <div className='space-y-2'>
                        <h1 className=' text-gray-700 font-bold'>Made from Whole Grain</h1>
                        <p className='max-w-xl mb-6 font-light text-gray-500 lg:mb-8 md:text-sm lg:text-lg dark:text-gray-400'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum dolorem, ab odit eum fugit nemo aliquam dolores,</p>
                    </div>
                </div>
                <div className='flex space-x-9 '>

                    <ImSpoonKnife className=' w-12 h-10 p-3 bg-[#7F8FA6]  rounded-full bg-opacity-95 text-white ' />

                    <div className='space-y-2'>
                        <h1 className=' text-gray-700 font-bold'>Made from Whole Grain</h1>
                        <p className='max-w-xl mb-6 font-light text-gray-500 lg:mb-8 md:text-sm lg:text-lg dark:text-gray-400'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum dolorem, ab odit eum fugit nemo aliquam dolores,</p>
                    </div>
                </div>
                <div className='flex space-x-9 '>

                    <ImSpoonKnife className=' w-12 h-10 p-3 bg-[#34ACE0]  rounded-full bg-opacity-95 text-white ' />

                    <div className='space-y-2'>
                        <h1 className=' text-gray-700 font-bold'>Made from Whole Grain</h1>
                        <p className='max-w-xl mb-6 font-light text-gray-500 lg:mb-8 md:text-sm lg:text-lg dark:text-gray-400'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum dolorem, ab odit eum fugit nemo aliquam dolores,</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Anicentbg;

{/* <span className='m-5 p-3 bg-green-500 rounded-full bg-opacity-95'>
                            <ImSpoonKnife className='w-7 h-7 text-white ' />
                        </span> 
                     <h1>Made from Ancient Grains</h1>
                    */}