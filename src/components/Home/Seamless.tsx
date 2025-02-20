// import React from 'react'

function Seamless() {
    return (
        <div className="flex flex-col items-center justify-center mt-[100px] p-[20px]">
            <p className="font-[500] text-[25px] text-center lg:text-[32px] text-[#141414]">Your Link To Seamless Payment Solutions</p>
            <div className="w-full lg:w-[60%] grid lg:grid-cols-3 my-[40px] gap-[40px]">

                <div className="flex flex-col items-center justify-center">
                    <img src="./trans.svg" alt="" />
                    <p className="text-[24px]">Transparency</p>
                    <p className="text-[#141414B2] text-center">No hidden fees, no surprises from <br className="hidden lg:block" /> start to finish.</p>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                    <img src="./security.svg" alt="" />
                    <p className="text-[24px]">Security</p>
                    <p className="text-[#141414B2] text-center">Robust bank-level protection for <br className="hidden lg:block" /> every cross-border transaction</p>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                    <img src="./speed.svg" alt="" />
                    <p className="text-[24px]">Speed</p>
                    <p className="text-[#141414B2] text-center">
                        
                    3x Faster, smarter and very reliable! <br className="hidden lg:block" /> Navigate international payments.
                        </p>
                    </div>
               
            </div>
        </div>
    )
}

export default Seamless
