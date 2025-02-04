// import React from 'react'

function HomeHero() {
  return (
    <div className='flex items-center flex-col justify-center py-[40px] lg:py-[80px]'>
      <p className="text-[32px] lg:text-[64px] text-center">Complex Liquidity Pools Reimagined</p>
      <p className='w-full lg:w-[50%] text-[14px] lg:text-[18px] text-[#FFFFFFB2] text-center p-[10px]'>Kredilink delivers the most advanced liquidity provision and cross-border payment solutions—3x faster, cost-effective, and infinitely safer than conventional banking. Our goal is to transform complex international transactions into a smooth, compliant process that redefines your cross-border experience forever.</p>

      <button className="bg-white p-[12px_35px] rounded-[10px] mt-[30px] flex items-center justify-center">
        <p className="text-[#1E3677] font-[600]">Get Started</p>
      </button>

      <div className="mt-[100px] lg:mt-[50px] w-full lg:w-[40%] grid lg:grid-cols-3 gap-[20px] lg:gap-[40px]">
                <div className="flex flex-col items-center">
                    <p className="text-white">Transaction Success Rate</p>
                    <p className="text-[40px] text-[#FFFFFFB2]">99.99%</p>
                </div>
                <div className="flex flex-col items-center">
                    <p className="text-white">Transaction Processed</p>
                    <p className="text-[40px] text-[#FFFFFFB2]">$125M+</p>
                </div>

                <div className="flex flex-col items-center">
                    <p className="text-white">Serving Countries</p>
                    <p className="text-[40px] text-[#FFFFFFB2]">150+</p>
                </div>


            </div>
    </div>
  )
}

export default HomeHero
