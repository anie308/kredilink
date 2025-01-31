// import React from 'react'

function Available() {
  return (
    <div className="p-[40px_20px] lg:p-[60px_40px] flex flex-col items-center justify-center">
      <p className="text-center text-[30px] lg:text-[64px] leading-[38px] lg:leading-[70px]">We’re always available to <br className="hidden lg:block" /> answer your questions</p>

      <div className="w-full md:w-[60%] xl:w-[80%] mt-[20px] grid lg:grid-cols-4 gap-[20px]">
        <div className="p-[20px] bg-[#F2F7F6] rounded-[20px] flex flex-col items-start">
          <div>
            <img src="./consult.svg" alt="" />
          </div>
          <div className="mt-[30px]">
          <p className="text-[16px] font-[600] text-[#141414]">Book Consultation</p>
          <p className="text-[#141414B2] text-[14px]">Let’s Schedule a consultation on</p>
          <p>Calendly</p>
          </div>

          <p className="font-[600] underline text-[#141414] mt-[40px]">Make Reservation Now</p>
         
        </div>
        <div className="p-[20px] bg-[#F2F7F6] rounded-[20px] flex flex-col items-start">
          <div>
            <img src="./mail.svg" alt="" />
          </div>
          <div className="mt-[30px]">
          <p className="text-[16px] font-[600] text-[#141414]">Mail Us</p>
          <p className="text-[#141414B2] text-[14px]">Contact Our Sales Team via email</p>
          <p>sales@kredilink.com</p>
          </div>

          <p className="font-[600] underline text-[#141414] mt-[40px]">Chat with Us</p>
         
        </div>
        <div className="p-[20px] bg-[#F2F7F6] rounded-[20px] flex flex-col items-start">
          <div>
            <img src="./call.svg" alt="" />
          </div>
          <div className="mt-[30px]">
          <p className="text-[16px] font-[600] text-[#141414]">Call Us</p>
          <p className="text-[#141414B2] text-[14px]">Mon - Fri from 8am to 5pm</p>
          <p>+1 (555) 000-0000</p>
          </div>

          <p className="font-[600] underline text-[#141414] mt-[40px]">Call Now</p>
         
        </div>
        <div className="p-[20px] bg-[#F2F7F6] rounded-[20px] flex flex-col items-start">
          <div>
            <img src="./visit.svg" alt="" />
          </div>
          <div className="mt-[30px]">
          <p className="text-[16px] font-[600] text-[#141414]">Visit Us</p>
          <p className="text-[#141414B2] text-[14px]">Come say hello at our office</p>
          <p>Your Office Address here</p>
          </div>

          <p className="font-[600] underline text-[#141414] mt-[40px]">View on Google Maps</p>
         
        </div>
      </div>
    </div>
  )
}

export default Available
