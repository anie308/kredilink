// import React from 'react'

import { useEffect } from "react"
import ConverterComp from "../components/Converter"
import Layout from "../layout"

function Converter() {
   useEffect(() => {
      window.scrollTo(0, 0)
  
    }, [])
  return (
    <Layout>
      <ConverterComp/>
    </Layout>
  )
}

export default Converter
