// import React from 'react'

function AboutHero() {
    return (
        <div className="p-[20px] lg:p-[40px_20px] flex flex-col items-center justify-center">
            <p className="text-[32px] lg:text-[64px] text-[#141414]">Who We Are?</p>
            <p className="w-full lg:w-[70%] text-center text-[14px] lg:text-[18px]">Kredilink Technologies Limited is a fintech company dedicated to redefining liquidity with low-risk, cost-effective payment solutions. Born in Nigeria with a global vision to help businesses expand without limitations in the international market, we are more than a payment platform - we are your link to seamless, fast, secure, and intelligent financial solutions.</p>

            <div className="mt-[40px] overflow-hidden  w-full lg:w-[70%] ">
                <img src="./about-hero.svg" className="h-[427px] lg:h-[530px] object-cover w-full rounded-[10px]" alt="" />
            </div>

            <div className="mt-[50px] w-full lg:w-[70%] grid lg:grid-cols-3 gap-[20px] lg:gap-[40px]">
                <div className="flex flex-col items-center">
                    <p className="text-[#141414]">Transaction Success Rate</p>
                    <p className="text-[40px] text-[#141414B2]">99.99%</p>
                </div>
                <div className="flex flex-col items-center">
                    <p className="text-[#141414]">Transaction Processed</p>
                    <p className="text-[40px] text-[#141414B2]">$125M+</p>
                </div>

                <div className="flex flex-col items-center">
                    <p className="text-[#141414]">Serving Countries</p>
                    <p className="text-[40px] text-[#141414B2]">150+</p>
                </div>


            </div>
        </div>
    )
}

export default AboutHero
