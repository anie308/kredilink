// import React from 'react'

function Global() {
  return (
    <div className="bg-[#1E3677] w-full flex items-center relative overflow-hidden text-white justify-center">
      <img className="lg:w-[70%] h-[300px] lg:h-[400px] lg:mb-[-50px] w-full opacity-50" src="./layer.svg" alt="" />
      <div className="absolute top-0 py-[40px] h-full flex items-center justify-center flex-col  p-[20px]">
        <p className="text-[18px] lg:text-[32px] font-[500] text-center">
          Ready to Go Global?
        </p>
        <p className="text-center leading-[20px] text-[14px] lg:text-[16px]">
          Discover how Kredilink can upgrade your cross-border payment strategy.
          Let's connect and help <br className="hidden lg:block" /> your
          business expand without borders.
        </p>

        <div className=" mt-[15px] lg:mt-[30px] relative flex flex-col-reverse lg:flex-col items-center justify-center">
          <button className="lg:top-[20px]  bg-white text-[#1E3677] text-[16px] font-[600] p-[10px_30px] lg:p-[12px_35px] rounded-[10px]">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
}

export default Global;
