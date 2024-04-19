import React from 'react';
import bannerImg from '../../assets/biryani5.png'
import { GrSecure } from "react-icons/gr";
import { IoFastFood } from "react-icons/io5";
import { GiFoodTruck } from "react-icons/gi";

const Banner = () => {
    return (
        <div className=' dark:bg-darkBg dark:text-white'>
            <div
                data-aos="slide-up"
                data-aos-duration="500"
                className='container min-h-[550px] py-16 grid grid-cols-1 sm:grid-cols-2 items-center'>
                <div>
                    <img src={bannerImg} alt=""
                        className='max-w-[430px] drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)]' />
                </div>
                <div className='max-w-[400px]'>
                    <h1 className='text-3xl font-bold '>Lorem ipsum dolor</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, sit consectetur? Harum optio, unde dicta tempore, quam minus hic
                        <br />
                        <br />
                        repudiandae autem,  velit dolorem consequuntur quis tenetur molestiae recusandae. Velit libero debitis doloremque possimus odit reprehenderit aut, quae voluptate vitae exercitationem!</p>
                    <div className='flex gap-6 py-2'>
                        <div>
                            <GrSecure className='text-4xl h-20 w-20 rounded-full p-5 bg-violet-100 dark:bg-violet-400' />
                        </div>
                        <div>
                            <IoFastFood className='text-4xl h-20 w-20 rounded-full p-5 bg-violet-300 dark:bg-violet-600' />
                        </div>
                        <div>
                            <GiFoodTruck className='text-4xl h-20 w-20 rounded-full p-5 bg-orange-400 dark:bg-violet-900' />
                        </div>
                    </div>
                    <div className='py-4 text-center sm:text-start'>
                        <button className='bg-gradient-to-r from-primary to-secondary text-white py-4 px-4 rounded-full'>Order Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;