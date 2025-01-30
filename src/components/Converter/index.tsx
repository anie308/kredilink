// import React from 'react'

function ConverterComp() {
  return (
    <div className="flex flex-col justify-center items-center p-[40px_20px] lg:p-[60px_40px]">
      <p className="text-[32px] lg:text-[64px] text-[#141414]">Kredilink Fiat Converter</p>
      <p className="text-[#141414B2] text-center text-[14px] lg:text-[18px]">Seamlessly bridge the world of digital and traditional currencies with our Fiat converter.</p>
      <div className="mt-[20px] flex overflow-scroll items-center space-x-[20px] w-full lg:w-fit scrollbar">
        <p className="text-[14px] min-w-[150px] lg:text-[18px] font-[500]">Instant conversion</p>
        <img src="./burst.svg" className="h-[20px]" alt="" />
        <p className="text-[14px] min-w-[250px]  lg:text-[18px] font-[500]">Comprehensive compliance checks</p>
        <img src="./burst.svg" className="h-[20px]" alt="" />
        <p className="text-[14px] min-w-[150px] lg:text-[18px] font-[500]">Competitive rates </p>
        <img src="./burst.svg" className="h-[20px]" alt="" />
        <p className="text-[14px] min-w-[150px] lg:text-[18px] font-[500]">Secure transactions</p>
      </div>


      <div className="lg:w-[70%] sol-gradient w-full p-[40px_20px] lg:p-[40px] rounded-[20px] mt-[50px] flex flex-col lg:flex-row items-center gap-[40px]">
        <div className="w-full ">
          <p className="text-white leading-[25px] lg:leading-[36px] text-[18px] lg:text-[32px]">Instant currency conversion with <br className="hidden lg:block" /> transparent rates and minimal fees.</p>
          <div className="w-full mt-[20px] flex flex-col space-y-[20px]">
            <div >
              <p className="mb-[5px] text-white">Fiat Currency From</p>
              <select name="" id="" className="h-[50px] w-full rounded-[10px] bg-white outline-none px-[10px]">
                <option value="">Select a Currency</option>
                <option value="Naira">Naira</option>
              </select>
            </div>
            <div>
              <p className="mb-[5px] text-white">To</p>
              <select name="" id="" className="h-[50px] w-full rounded-[10px] bg-white outline-none px-[10px]">
                <option value="">Select a Currency</option>
                <option value="Naira">Naira</option>

              </select>
            </div>
            <div>
              <p className="mb-[5px] text-white">Fiat Amount</p>
              <input name="" id="" placeholder="Enter Amount" className="h-[50px] w-full rounded-[10px] bg-white outline-none px-[10px]">


              </input>
            </div>
          </div>
        </div>
        <div className="w-ull h-full lg:min-w-[50%] justify-center flex items-center">
          <div className="p-[20px] h-full bg-white rounded-[20px] w-full lg:w-[80%] relative overflow-hidden">
            <img src="./loop.svg" className="h-[150px] absolute top-[-20px] right-0" alt="" />

            <div>
              <div className="mb-[50px]">
                <p className="text-[24px] font-[600] text-[#141414]">You will get!</p>
                <p className="text-[64px] font-[700]">₦ 0</p>
                <p className="text-[#141414CC] font-[600] text-[24px]">Nigerian Naira</p>
              </div>
              <p className="text-[#141414CC]">Seamlessly bridge the world of digital and traditional currencies with us today</p>
              <button className="h-[50px] rounded-[10px] mt-[20px] w-full bg-[#162A5F] text-white">Convert</button>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default ConverterComp
