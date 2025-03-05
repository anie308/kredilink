// import React from 'react'

function Feedback() {
  return (
    <div className="flex flex-col items-center justify-center p-[40px_20px] lg:p-[100px_40px]">
      <p className="font-[500] text-[20px] lg:text-[32px] text-[#141414]">Kredlink Feedbacks</p>
      <p className="text-[#141414B2]"> What our clients are saying </p>

      <div className="flex items-center overflow-x-scroll lg:grid gap-[40px] scrollbar lg:overflow-hidden lg:grid-cols-3 w-full lg:w-[85%] mt-[50px]">
        <div className=" p-[10px] min-w-[430px] max-w-[430px]">
          <p>“Kredilink transformed our international payment process. What used to take days now happens in minutes, with complete transparency.”</p>

          <div className="flex items-center mt-[30px] space-x-[20px]">
            <div className="h-[56px] w-[56px]  rounded-[5px]">
              <img src="./customer.svg" className="h-full w-full" alt="" />
            </div>          <div>
              <p className="font-[700]">Michael Okonkwo</p>
              <p>CEO, Global Trade Solutions</p>
            </div>
          </div>
        </div>
        <div className=" p-[10px] min-w-[430px] max-w-[430px]">
          <p>"The compliance and security features are unparalleled. We feel completely confident with every transaction."</p>

          <div className="flex items-center mt-[30px] space-x-[20px]">
            <div className="h-[56px] w-[56px]  rounded-[5px]">
              <img src="./customer.svg" className="h-full w-full" alt="" />
            </div>
            <div>
              <p className="font-[700]"> Sandra Rowlings</p>
              <p>CFO, ManuTech Industries</p>
            </div>
          </div>
        </div>
        <div className=" p-[10px] min-w-[430px] max-w-[430px]">
          <p>"The compliance and security features are unparalleled. We feel completely confident with every transaction."</p>

          <div className="flex items-center mt-[30px] space-x-[20px]">
          <div className="h-[56px] w-[56px]  rounded-[5px]">
            <img src="./customer.svg" className="h-full w-full" alt="" />
          </div>            <div>
              <p className="font-[700]"> Sandra Rowlings</p>
              <p>CFO, ManuTech Industries</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Feedback
