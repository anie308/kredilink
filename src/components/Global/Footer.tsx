// import React from 'react'

import { Link } from "react-router-dom"
import { FaXTwitter, FaWhatsapp, FaInstagram, FaLinkedin } from "react-icons/fa6";


function Footer() {
  return (
    <div className="p-[40px_20px] lg:p-[40px] grid lg:grid-cols-2 bg-[#141414] text-white gap-[40px]">
      <div className="w-full ">
        <div className="w-full lg:w-[60%]">
          <Link to="/">
            <img className="h-[28px] lg:h-fit" src="./kr-logo.svg" alt="" /></Link>
          <p className="mt-[20px]">Kredilink and featured customers are financial technology companies and not a bank. Banking services are provided by our partnered banks who are duly licensed by CBN.
          </p>
          <p className="mt-[20px]">Kredilink is a product of Kredilink Technologies Limited</p>

          <p className="mt-[30px] lg:mt-[40px]">Kredilink Technologies Limited <br className="hidden lg:block" />
            Lekki, Lagos, Nigeria</p>
        </div>

      </div>
      <div>
        <div className="grid lg:grid-cols-3 gap-[30px] lg:gap-0">
          <div>
            <p className="font-[500]">Our Services</p>
            <div>
              <p className="block mt-[10px] text-[#FFFFFFB2]">Liquidity Provision</p>
              <p className="block mt-[10px] text-[#FFFFFFB2] ">Payment Solution</p>

              <p className="block mt-[10px] text-[#FFFFFFB2]">Treasury Management</p>
            </div>
          </div>
          <div>
            <p className="font-[500]">Our Services</p>
            <div>
              <p className="block mt-[10px] text-[#FFFFFFB2]">Contact Sales</p>
              <p className="block mt-[10px] text-[#FFFFFFB2]">FAQ</p>
              <p className="block mt-[10px] text-[#FFFFFFB2]">Partner With Us</p>
            </div>
          </div>
          <div>
            <p className="font-[500]">Support</p>
            <div>
              <p className="block mt-[10px] text-[#FFFFFFB2]">Terms of Service</p>
              <p className="block mt-[10px] text-[#FFFFFFB2]">Privacy Policy</p>

              <p className="block mt-[10px] text-[#FFFFFFB2]">Compliance Statement</p>
            </div>
          </div>
        </div>

        <div className="mt-[40px] flex items-center space-x-[20px]">
          <p className="font-[500]">Connect</p>
          <div className="flex items-center space-x-[10px]">
            <div className="bg-[#1E3677] p-[10px] rounded-full w-fit">
            <FaXTwitter className="text-[25px]" />
            </div>
            <div className="bg-[#1E3677] p-[10px] rounded-full w-fit">
            <FaWhatsapp className="text-[25px]" />
            </div>
            <div className="bg-[#1E3677] p-[10px] rounded-full w-fit">
            <FaInstagram className="text-[25px]" />
            </div>
            <div className="bg-[#1E3677] p-[10px] rounded-full w-fit">
            <FaLinkedin className="text-[25px]" />
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Footer
