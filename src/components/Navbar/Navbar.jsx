import React from 'react';
import logo from '../../assets/food-logo.png';
import { FaCartShopping } from "react-icons/fa6";
import DarkMode from '../DarkMode';
const Navbar = () => {


    const Menu = [
        {
            id: 1,
            name: "Home",
            link: "/#",
        },
        {
            id: 2,
            name: "Services",
            link: "/#services",
        },
        {
            id: 3,
            name: "About",
            link: "/#about",
        },
        // Add more menu items as needed
    ];




    return (
        <div className='p-5 shadow-md bg-white dark:bg-gray-900 dark:text-white'>
            <div className='container mx-auto flex justify-between items-center'>
                <div className=''>
                    <a href="#" className='font-bold text-2xl sm:text-3xl flex gap-2'>
                        <img src={logo} alt="" className='w-12' />
                        Foodie
                    </a>
                </div>
                <div className='flex justify-between items-center gap-4'>
                    <div>
                        <DarkMode />
                    </div>
                    <div className='flex gap-10'>
                        <ul className='hidden md:flex gap-8'>

                            {Menu.map((menu) => (
                                <li key={menu.id}>
                                    <a href={menu.link} className="hover:text-primary duration-200">{menu.name}</a>
                                </li>
                            ))}


                        </ul>
                        <button className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white px-7 py-1 rounded-full flex items-center gap-3">
                            Order
                            <FaCartShopping className="text-xl text-white drop-shadow-sm cursor-pointer" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;