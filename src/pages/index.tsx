// import React from 'react'

import { useEffect } from "react"
import Layout from "../layout"

function Home() {
   useEffect(() => {
      window.scrollTo(0, 0)
  
    }, [])
  return (
    <Layout>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni eligendi doloribus porro, illum nam unde ea. Cupiditate, neque fugiat quam quo totam corporis? Nemo sint laborum sunt velit iste maiores?
    </Layout>
  )
}

export default Home
