// import React from 'react'

import { useEffect } from "react"
import Layout from "../layout"
import Global from "../components/Solution/Global"
import FAQs from "../components/Support/FAQs"

function Home() {
   useEffect(() => {
      window.scrollTo(0, 0)
  
    }, [])
  return (
    <Layout>
      <FAQs/>
      <Global/>
    </Layout>
  )
}

export default Home
