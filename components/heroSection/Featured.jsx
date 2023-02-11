import { dataDigitalBestSeller } from '@/data';
import React, { useState } from 'react';
import Slider from 'react-slick';
import styles from '@/styles/Home.module.css'


const Featured = () => {
    const [defaultImage, setDefaultImage] = useState({});
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
    const handleErrorImage = (data) => {
        setDefaultImage((prev) => ({
          ...prev,
          [data.target.alt]: data.target.alt,
        
        }));
      };
    return (
        <div className="App container py-11 ">
            <h1 className='uppercase text-4xl font-extrabold mb-16 text-center'>Feactured Food</h1>
        <Slider {...settings}>
          {dataDigitalBestSeller.map((item,id) => (
            <div key={item.id} className="card">
              <div className="card-top  ">
                <img
                className='object-scale-down  h-48 w-96'
                  src={
                    defaultImage[item.title] === item.title
                      ? defaultImage.linkDefault
                      : item.linkImg
                  }
                
                  alt={item.title}
                  onError={handleErrorImage}
                />
                <h1 className='text-center text-black font-semibold'>{item.title}</h1>
              </div>
              <div className="card-bottom">
                <h3 className='text-center font-semibold text-[#ABC480]'>{item.price}</h3>
                <span className="text-sm text-center text-[#ABC480] font-semibold">{item.category}</span>
              </div>
              <div className='flex place-content-center'>
              <a href="#" class="inline-flex items-center justify-center lg:px-5 lg:py-3 text-base font-medium text-center text-gray-900 border border-[#ABC480] rounded-full hover:bg-[#ABC480] focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-[#ABC480] dark:hover:bg-[#ABC480] dark:focus:ring-gray-800">
                    Add to cart
                    </a>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    );
};

export default Featured;