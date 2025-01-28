// import React from 'react'

import { Link } from "react-router-dom"

function Navbar() {
    const activeUrl = window.location.pathname
    const links = [
        {
            name: 'Home',
            href: '/',
        },
        {
            name: 'About',
            href: '/about',
        },
        {
            name: 'Services',
            href: '/services',
        },
        {
            name: 'Contact',
            href: '/contact',
        },
    ]
    return (
        <div className="flex items-center justify-between p-0  lg:p-[20px]">
            <div className="p-[20px] lg:p-0 flex items-center justify-between lg:justify-between w-full lg:w-fit">
               <Link to="/">
               <img className="h-[28px]" src="./kr-logo.svg" alt="" /></Link>
               <div className="lg:hidden">loll</div>
            </div>
            <div className="hidden lg:flex lg:mr-[-10%] space-x-[20px]">

                {links.map((link) => (
                    <Link className={`
                        ${activeUrl === link.href
                            ? 'text-[#141414]'
                            : 'text-[#141414CC]'} text-[18px] font-[500]`
                    } to={link.href} key={link.name}>
                        {link.name}
                    </Link>
                ))}
            </div>

            <div className="hidden lg:flex items-center space-x-[20px]">
                <button className="bg-white p-[10px_30px] rounded-full text-[#141414]">Login</button>
                <button className="bg-[#1E3677] p-[10px_30px] rounded-full text-white">Sign Up</button>
            </div>

        </div>
    )
}

export default Navbar
