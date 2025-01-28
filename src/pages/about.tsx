// import React from 'react'

import AboutHero from "../components/About/AboutHero"
import Values from "../components/About/Values"
import WhatWeOffer from "../components/About/WhatWeOffer"
import Layout from "../layout"

function About() {
  return (
    <Layout>
      <AboutHero/>
      <Values/>
      <WhatWeOffer/>
    </Layout>
  )
}

export default About
