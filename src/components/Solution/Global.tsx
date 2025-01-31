// import React from 'react'

function Global() {
  return (
    <div className="w-full flex items-center text-white justify-center p-[40px_20px] lg:p-[100px_40px]">
     <div className="bg-[#1E3677] w-full lg:w-[80%] py-[40px] flex items-center justify-center flex-col rounded-[50px] p-[20px]">
      <p className="text-[18px] lg:text-[32px] font-[500] text-center">Ready to Go Global?</p>
      <p className="text-center">Discover how Kredilink can upgrade your cross-border payment strategy. Let's connect and help <br className="hidden lg:block" /> your business expand without borders.</p>

      <div className=" mt-[30px] relative flex flex-col-reverse lg:flex-col items-center justify-center">
        <img className="mt-[40px] lg:mt-0" src="./layer.svg" alt="" />
        <button className="lg:top-[20px] lg:absolute bg-white text-[#1E3677] text-[16px] font-[600] p-[12px_35px] rounded-[10px]">Contact Us</button>
      </div>
     </div>
    </div>
  )
}

export default Global
