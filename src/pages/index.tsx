// import React from 'react'

import { useEffect } from "react"
import Layout from "../layout"
import Global from "../components/Solution/Global"
import FAQs from "../components/Support/FAQs"
import HomeHero from "../components/Home/HomeHero"
import Mission from "../components/Home/Mission"
import Seamless from "../components/Home/Seamless"
import Tailored from "../components/Home/Tailored"
import Offers from "../components/Home/Offers"

function Home() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <Layout>
      <div className="p-[40px_10px] lg:p-[40px]">
        <div className="home-gradient    p-[10px] lg:p-[40px] rounded-[20px] text-white">
          <HomeHero />
          <Mission/>
          <Seamless/>
        </div>
      </div>
      <img src="./line.svg" className="w-full" alt="" />
      <Offers/>
      <Tailored/>
      <FAQs />
      <Global />
    </Layout>
  )
}

export default Home
