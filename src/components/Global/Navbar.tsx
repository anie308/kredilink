// import React from 'react'

import { Link } from "react-router-dom"
import { AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";
import { FiPlus } from "react-icons/fi";

function Navbar() {
    const activeUrl = window.location.pathname;

    const [open, setOpen] = useState(false);
    const links = [
       
        {
            name: 'About Us',
            href: '/about',
        },
        {
            name: 'Solutions',
            href: '/solutions',
        },
        {
            name: 'Converter',
            href: '/converter',
        },
        {
            name: 'Support',
            href: '/support',
        },

    ]
    return (
        <div className="flex items-center justify-between p-0 shadow lg:p-[20px_40px] sticky top-0 bg-white w-full z-30">
            <div className="p-[20px] lg:p-0 flex items-center justify-between lg:justify-between w-full lg:w-fit">
               <Link to="/">
               <img className="h-[28px] lg:h-fit" src="./kr-logo.svg" alt="" /></Link>
               <button onClick={()=> setOpen(true)} className="lg:hidden">
               <AiOutlineMenu className="text-[25px]" />
               </button>
            </div>
            <div className="hidden lg:flex lg:mr-[-10%] space-x-[20px]">

                {links.map((link) => (
                    <Link className={`
                        ${activeUrl === link.href
                            ? 'text-[#141414] font-sf-bold'
                            : 'text-[#141414CC]'} text-[18px] font-[400]  font-sf-regular`
                    } to={link.href} key={link.name}>
                        {link.name}
                    </Link>
                ))}
            </div>

            <div className={`${open ? "left-0" : "left-[-100%]"} h-screen bg-white fixed top-0 w-full z-20 transition-left duration-300 p-[20px]`}>
            
                <div onClick={()=> setOpen(false)}  className="flex items-center justify-end">
                <FiPlus  className="text-[30px] rotate-45"/>
                </div>
                <div className="flex flex-col space-y-[20px]">

                {links.map((link) => (
                    <Link
                    onClick={()=> setOpen(false)} 
                    className={`
                        ${activeUrl === link.href
                            ? 'text-[#141414] font-[500]'
                            : 'text-[#141414CC]'} text-[25px] font-[400]`
                    } to={link.href} key={link.name}>
                        {link.name}
                    </Link>
                ))}
            </div>
            </div>

            <div className="hidden lg:flex items-center space-x-[20px]">
                <button className="bg-white p-[10px_30px] rounded-full text-[#141414]">Login</button>
                <button className="bg-[#1E3677] p-[10px_30px] rounded-full text-white">Sign Up</button>
            </div>

        </div>
    )
}

export default Navbar
