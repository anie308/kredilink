// import React from 'react'

import { useEffect } from "react"
import Layout from "../layout"
import Global from "../components/Solution/Global"
import HomeHero from "../components/Home/HomeHero"
import Mission from "../components/Home/Mission"
import Seamless from "../components/Home/Seamless"
import Tailored from "../components/Home/Tailored"
import Offers from "../components/Home/Offers"
import HaveQuestions from "../components/Home/HaveQuestions"
import Feedback from "../components/Home/Feedback"

function Home() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <Layout>
      <div className="p-[20px_10px] lg:p-[40px] relative">
        <div className="bg-[#081537] opacity-100  rounded-[20px] text-white relative">
          <img src="/line.png" className="absolute right-0" alt="" />
          <HomeHero />       
        </div>    
      </div>
      <Seamless />
      <div className="relative">
      <Mission />
      <img src="./line.svg" className="w-full hidden lg:block bottom-[-25px] absolute z-20" alt="" />
      <img src="./mob-line.svg" className="w-full lg:hidden" alt="" />
      </div>
      <Offers />
      <div className="relative">
      <Tailored />
      <img src="./line.svg" className="w-full hidden lg:block bottom-[-28px] absolute z-20 " alt="" />
      <img src="./mob-line.svg" className="w-full mt-[30px] lg:hidden" alt="" />
      </div>
      <HaveQuestions />
      <img src="./line.svg" className="w-full hidden lg-block" alt="" />
      <img src="./mob-line.svg" className="w-full lg:hidden" alt="" />
      <Feedback />
      <Global />
    </Layout>
  )
}

export default Home
