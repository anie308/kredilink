// import React from 'react'

import { useEffect } from "react"
import OurSolutions from "../components/Solution/OurSolutions"
import Layout from "../layout"
import Global from "../components/Solution/Global"

function Solution() {
   useEffect(() => {
      window.scrollTo(0, 0)
  
    }, [])
  return (
    <Layout>
      <OurSolutions/>
      <Global/>
    </Layout>
  )
}

export default Solution
