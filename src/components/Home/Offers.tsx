// import React from 'react'

function Offers() {
  return (
    <div className=" flex flex-col items-center justify-center p-[40px_20px] lg:p-[100px_40px]">
      <div className="flex flex-col items-center justify-center">
        <p className="text-[40px] text-[#141414]">Kredilink Offers</p>
        <p className="text-[#141414] text-center">
          Unparalleled Liquidity Provision - Incredible Rates You Won't Find
          Elsewhere!
        </p>
      </div>
      <div className="flex flex-col items-center mt-[50px] justify-center w-full lg:w-[85%] space-y-[100px]">
        <div className="grid lg:grid-cols-2 gap-[40px]  ">
        <div className="h-[300px] bg-[#F2F7F6] rounded-[10px] overflow-hidden">
            <img src="./liquidd.svg" className="w-full h-full object-cover" alt="" />
          </div>
          <div className="flex flex-col items-start justify-center">
            <p className="text-[#141414] text-[18px] lg:text-[32px]">
              Liquidity Provision at the Core
            </p>
            <p className="text-[#141414B2] text-[15px] lg:text-[16px]">
              Our primary focus is providing instant, flexible financial
              resources that empower businesses to move quickly and confidently.
              We offer rapid access to funds across multiple currencies,
              eliminating waiting times and giving businesses the financial
              agility they need to thrive.
            </p>
          </div>
        </div>
        <div className="flex flex-col-reverse lg:grid lg:grid-cols-2  gap-[40px]">
          <div className="flex flex-col items-start justify-center">
            <p className="text-[#141414] text-[18px] lg:text-[32px]">
              Global Reach, Local Expertise
            </p>
            <p className="text-[#141414B2] text-[15px] lg:text-[16px]">
              We currently cover 150+ Countries and have a deep understanding of
              African financial ecosystems. We have tailored our cross-border
              payment solutions for emerging markets who need a seamless
              integration with global banking networks.
            </p>
          </div>
          <div className="h-[300px] bg-[#F2F7F6] rounded-[10px] overflow-hidden">
            <img src="./global.svg" className="w-full h-full object-cover" alt="" />
          </div>
        </div>
        <div className="grid lg:grid-cols-2 gap-[40px]">
        <div className="h-[300px] bg-[#F2F7F6] rounded-[10px] overflow-hidden">
            <img src="./rate.svg" className="w-full h-full object-cover" alt="" />
          </div>
          <div className="flex flex-col items-start justify-center">
            <p className="text-[#141414] text-[18px] lg:text-[32px]">
            Competitive Rates
            </p>
            <p className="text-[#141414B2] text-[15px] lg:text-[16px]">
            Our technology enables us to offer rates that even traditional banking systems can't match. Whether you're a startup or a multinational corporation, Kredilink provides cost-effective solutions tailored to your needs.
            </p>
          </div>
        </div>
        <div className="flex flex-col-reverse lg:grid lg:grid-cols-2  gap-[40px]">
          <div className="flex flex-col items-start justify-center">
            <p className="text-[#141414] text-[18px] lg:text-[32px]">
            Compliance Made Simple
            </p>
            <p className="text-[#141414B2] text-[15px] lg:text-[16px]">
            We understand the complex regulatory protocols. So we have partnered with leading banks to maintain rigorous compliance standards, and turn regulatory laws into competitive advantages for your business.
            </p>
          </div>
          <div className="h-[300px] bg-[#F2F7F6] rounded-[10px] overflow-hidden">
            <img src="./compliance.svg" className="w-full h-full object-cover" alt="" />
          </div>
        </div>
        <div className="grid lg:grid-cols-2 gap-[40px]">
        <div className="h-[300px] bg-[#F2F7F6] rounded-[10px] overflow-hidden">
            <img src="./tech.svg" className="w-full h-full object-cover" alt="" />
          </div>
          <div className="flex flex-col items-start justify-center">
            <p className="text-[#141414] text-[18px] lg:text-[32px]">
            Unmatched Technological Innovation
            </p>
            <p className="text-[#141414B2] text-[15px] lg:text-[16px]">
            We're leveraging on cutting-edge technology to redefine cross-border payments. Our platform combines advanced security protocols with intuitive design, ensuring your transactions are both protected and seamless.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Offers;
