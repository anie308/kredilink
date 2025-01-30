// import React from 'react'
import Layout from '../layout'
import SupportHero from '../components/Support/SupportHero'
import WhyReachOut from '../components/Support/WhyReachOut'
import Available from '../components/Support/Available'
import FAQs from '../components/Support/FAQs'
import { useEffect } from 'react'

function Support() {

  useEffect(() => {
    window.scrollTo(0, 0)

  }, [])
  return (
    <Layout>
      <SupportHero/>
      <WhyReachOut/>
      <Available/>
      <FAQs/>
    </Layout>
  )
}

export default Support
