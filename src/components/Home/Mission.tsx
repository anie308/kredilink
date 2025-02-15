// import React from 'react'

function Mission() {
    return (
        <div className="w-full hidden lg:flex items-center justify-center mt-[50px] p-[20px]">
            <div className="bg-white relative grid lg:grid-cols-2 gap-[40px] text-black p-[40px_20px] lg:p-[40px] rounded-[20px] w-full lg:w-[95%]">
                <div className="flex z-20 flex-col justify-center items-start">
                    <p className="text-[40px] text-[#141414]">Our Mission</p>
                    <p>At Kredilink Technologies, we're on a mission to redefine liquidity provision. We don't want to just move money - we want your business to feel empowered with every payment transaction it makes in the global market. You can rely on us to continually deliver seamless payment solutions that simplify your transactions and help you expand without borders. </p>
                </div>
                <div className="z-20 flex items-center justify-center">
                    <img src="./mission.svg" alt="" />
                </div>
                <img src="./pattrn.svg" className="absolute bottom-0 w-full" alt="" />
            </div>
            
        </div>
    )
}

export default Mission
