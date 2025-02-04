import { useState } from 'react'
import { FiMinusSquare } from "react-icons/fi";
function HaveQuestions() {
    const [faq, setFaq] = useState<number | null>(null);


    const toggle = (i: number) => {
        setFaq((prev) => (prev === i ? null : i));
    };

    const items = [
        {
            heading: "How Secure are International Transactions?",
            content: "We use bank-grade encryption and comply with international financial regulations to ensure maximum security. Our international transactions are 100% safe!",
        },
        {
            heading: "What Currencies Do You Support?",
            content: "We support major global currencies and are continuously expanding our network to incorporate more.",
        },
        {
            heading: "Are there Any Hidden Fees?",
            content: "Transparency is one of our biggest promises to you! All fees are clearly communicated upfront with no surprises.",
        },
        {
            heading: "How Fast are International Transfers?",
            content: "Most transfers are processed the same day, significantly 3x faster than traditional banking systems.",
        },
        {
            heading: "Do you Offer Custom Solutions?",
            content:
                "Absolutely! We specialize in tailoring financial solutions to meet unique business requirements.",
        },

    ];


    return (
        <div className='p-[40px_20px] lg:p-[60px_40px] flex flex-col items-center justify-center'>
            <div className='flex flex-col lg:flex-row  border-[#F0F0F0]  items-center w-full lg:w-[75%] gap-[40px] '>
                <div className='w-full lg:w-[40%] '>
                    <p className='text-[30px] lg:text-[40px] italic font-[600]'>Have Questions?
                    </p>
                    <p className='text-[30px] lg:text-[40px]'>We have answers</p>
                    <p className='text-[#141414B2] w-full lg:w-[80%]'>Our team is ready to help answer all your questions regarding our platform and solutions</p>
                    <button className='bg-[#1E3677] mt-[20px] rounded-full text-white p-[12px_30px]'>Ask Question</button>
                </div>
                <div className='lg:border-l-[4px] border-[#F0F0F0] w-full lg:w-[60%] lg:pl-[20px] pt-[20px] flex flex-col space-y-[40px]'>
                    {items.map((item, i) => (
                        <div
                            key={item.heading}
                            className={`${faq === i
                                    ? " rounded-[12px] p-0 lg:p-[20px]"
                                    : "p-0 lg:p-[10px_20px]"
                                }  `}
                        >
                            <div onClick={() => toggle(i)} className="cursor-pointer flex items-center justify-between">
                                <div className=" font-[400] text-[16px] lg:text-[24px]">
                                    {item.heading}
                                </div>
                                <div><FiMinusSquare /></div>
                            </div>
                            <div
                                className={`${faq === i ? "h-full mt-[20px] border-b-[3px] pb-[20px] border-[#F5F5F5]" : "h-0 p-0"
                                    } overflow-hidden transition-all break-words font-inter text-[#777E90] `}
                            >
                                {item.content}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default HaveQuestions
