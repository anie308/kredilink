// import React from 'react'

function Tailored() {
  return (
    <div className="tailor-gradient p-[40px_20px]  flex flex-col items-center justify-center lg:p-[100px_40px] mt-[80px] text-white">
      <p className="text-[25px] lg:text-[32px] text-center font-[500]">Solutions Tailored for Any Industry</p>
      <div className="grid md:grid-cols-2 xl:grid-cols-4 mt-[40px] gap-[20px]">
        <div className="w-full lg:w-[320px] overflow-hidden h-[320px]  rounded-[40px] relative">
          <img src="./finance.svg" className="h-full w-full object-cover" alt="" />
          <div className="absolute top-0 p-[20px] flex flex-col items-start h-full justify-between">
            <div className="bg-white p-[5px_10px] rounded-full w-fit text-[#141414]">Finance</div>
            <p>Streamline international fund transfers with precision and speed.</p>
           </div>
        </div>
        <div className="w-full lg:w-[320px] overflow-hidden h-[320px]  rounded-[40px] relative">
          <img src="./construction.svg" className="h-full w-full object-cover" alt="" />
          <div className="absolute top-0 p-[20px] flex flex-col items-start h-full justify-between">
            <div className="bg-white p-[5px_10px] rounded-full w-fit text-[#141414]">Construction</div>
            <p>Manage global supply chains and international vendor payments effortlessly.</p>
           </div>
        </div>
        <div className="w-full lg:w-[320px] overflow-hidden h-[320px]  rounded-[40px] relative">
          <img src="./manufacturing.svg" className="h-full w-full object-cover" alt="" />
          <div className="absolute top-0 p-[20px] flex flex-col items-start h-full justify-between">
            <div className="bg-white p-[5px_10px] rounded-full w-fit text-[#141414]">Manufacturing</div>
            <p>Simplify cross-border procurement and international trade transactions.</p>
           </div>
        </div>
        <div className="w-full lg:w-[320px] overflow-hidden h-[320px]  rounded-[40px] relative">
          <img src="./trade.svg" className="h-full w-full object-cover" alt="" />
          <div className="absolute top-0 p-[20px] flex flex-col items-start h-full justify-between">
            <div className="bg-white p-[5px_10px] rounded-full w-fit text-[#141414]">Trade</div>
            <p>Navigate complex international payments with confidence.</p>
           </div>
        </div>
        


      </div>
     
    </div>
  )
}

export default Tailored
