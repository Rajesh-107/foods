import Image from 'next/image';
import React from 'react';
import { FaCalculator } from 'react-icons/fa';
import { TiMediaPlay } from 'react-icons/ti';
import heroimg from '../../images/Classy_Main 1.png'
import herobgimg from '../../images/Vector 633.png'
import companylogo from '../../images/usda_organic 1.png'
import companylogo2 from '../../images/gluten-free 1.png'

const HeroSection = () => {
  
    return (
        <section class="bg-white  dark:bg-gray-900">
             <div className='-my-14'>
             <Image
                            alt="Mountains"
                            src={herobgimg}
                            placeholder="blur"
                            fill
                         className='md:hidden'
                            style={{
                                objectFit: 'contain',
                            }}
                        />
             </div>
            <div class="grid relative max-w-screen-xl px-10 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
                <div class="mr-auto place-self-center lg:col-span-7">
                    <h1 class="max-w-2xl mb-4 text-4xl uppercase font-extrabold tracking-tight leading-snug md:text-5xl xl:text-5xl dark:text-white">EAT ORGANIC & Gluten Free Healthy Food.</h1>
                    <p class="max-w-2xl mb-6 font-bold text-black-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
                    We supply hight quality organic & gluten free product
                       </p>
                    <div className='lg:space-x-8 flex '>
                    <a href="#" class="inline-flex items-center justify-center lg:px-5 lg:py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-full hover:bg-[#01BFD7] focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-[#01BFD7] dark:hover:bg-[#01BFD7] dark:focus:ring-gray-800">
                    Try Our Sampler Pack
                    </a>
                     <div className='flex justify-center items-center space-x-1'>
                        <TiMediaPlay className='lg:w-14 md:w-7 md:h-7 border shadow-lg cursor-pointer border-gray-300 rounded-full lg:h-14 '/>
                     <a href="#" class="inline-flex items-center justify-center px-2  text-base font-medium text-center text-gray-900 ">
                     About Happy Campers
                    </a>
                     </div>
                    </div>
                   
                </div>

                <div class="relative lg:mt-0 lg:col-span-5 lg:flex">
                    <div className='container_twoimage'>
                        <Image
                            alt="Mountains"
                            src={heroimg}
                            placeholder="blur"
                            style={{
                                objectFit: 'cover',
                            }}
                        />
                    </div>
                  
                </div>
                    <div className='flex space-x-3'>
                            <Image src={companylogo} className='w-14 h-14' alt="logo" />
                            <Image src={companylogo2} className='w-14 h-14' alt="logo" />
                    </div>
            </div>

        </section>
    );
};

export default HeroSection;