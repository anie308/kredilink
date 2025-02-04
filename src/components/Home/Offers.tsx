// import React from 'react'

function Offers() {
    return (
        <div className=" flex items-center justify-center p-[40px_0px] lg:p-[100px_40px]">
            <div className="w-full lg:w-[65%] grid lg:grid-cols-2">

                <div className="flex items-center justify-end">
                    <div className="bg-[#0A183D] p-[20px] h-fit w-fit border-white lg:rounded-l-[8px]">
                        <img src="./offer.svg" className="border" alt="" />
                        <div className="mt-[20px] mb-[30px]">
                            <p className="text-[40px] text-white">Kredilink Offers</p>
                            <p className="text-white">Unparalleled Liquidity Provision - <br className="hidden lg:block" /> Incredible Rates You Won't Find Elsewhere!</p>
                        </div>
                    </div>
                </div>
                <div className="bg-[#F2F7F6]  p-[40px_20px] lg:p-[20px] flex flex-col items-start space-y-[15px]">
                    <div>
                        <p className="text-[24px] text-[#141414]">Liquidity Provision at the Core</p>
                        <p className="text-[#141414B2]">Our primary focus is providing instant, flexible financial resources that empower businesses to move quickly and confidently. We offer rapid access to funds across multiple currencies, eliminating waiting times and giving businesses the financial agility they need to thrive.</p>
                    </div>
                    <div>
                        <p className="text-[24px] text-[#141414]">Global Reach, Local Expertise</p>
                        <p className="text-[#141414B2]">We currently cover 150+ Countries and have a deep understanding of African financial ecosystems. We have tailored our cross-border payment solutions for emerging markets who need a seamless integration with global banking networks. </p>
                    </div>
                    <div>
                        <p className="text-[24px] text-[#141414]">Competitive Rates</p>
                        <p className="text-[#141414B2]">OWe understand the complex regulatory protocols. So we have partnered with leading banks to maintain rigorous compliance standards, and turn regulatory laws into competitive advantages for your business.</p>
                    </div>
                    <div>
                        <p className="text-[24px] text-[#141414]">Compliance Made Simple</p>
                        <p className="text-[#141414B2]">Our primary focus is providing instant, flexible financial resources that empower businesses to move quickly and confidently. We offer rapid access to funds across multiple currencies, eliminating waiting times and giving businesses the financial agility they need to thrive.</p>
                    </div>
                    <div>
                        <p className="text-[24px] text-[#141414]">Unmatched Technological Innovation</p>
                        <p className="text-[#141414B2]">We're leveraging on cutting-edge technology to redefine cross-border payments. Our platform combines advanced security protocols with intuitive design, ensuring your transactions are both protected and seamless.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Offers
