// import React from 'react'

import { useEffect } from "react"
import OurSolutions from "../components/Solution/OurSolutions"
import Layout from "../layout"

function Solution() {
   useEffect(() => {
      window.scrollTo(0, 0)
  
    }, [])
  return (
    <Layout>
      <OurSolutions/>
    </Layout>
  )
}

export default Solution
