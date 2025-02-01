// import React from 'react'

import { useCallback, useEffect, useState } from "react"
import axios from "axios";
import toast from "react-hot-toast";
function ConverterComp() {
  const apiUrl = import.meta.env.VITE_APP_API_URL;
  const apiUrl2 = import.meta.env.VITE_APP_API_URL2;
  const apiKey = import.meta.env.VITE_APP_API_KEY;
  const apiKey2 = import.meta.env.VITE_APP_API_KEY2;
  const [supportedSymbols, setSupportedSymbols] = useState<any[]>([])
  const [fromCurrency, setFromCurrency] = useState<string>('')
  const [toCurrency, setToCurrency] = useState<string>('')
  const [amount, setAmount] = useState<string>("")
  const [loading, setLoading] = useState<boolean>(false);
  interface ConversionResult {
    conversion_result: number;
    conversion_rate: number;
    target_code: string;
    base_code: string;
    result: string;
  }

  const [result, setResult] = useState<ConversionResult | null>(null)

  const getSupportedSymbols = useCallback(async () => {
    try {
      const res = await axios.get(`${apiUrl}/symbols?access_key=${apiKey}`);
      if (res?.data?.symbols) {
        setSupportedSymbols(Object.entries(res?.data?.symbols));
      }
    } catch (error) {
      console.error("Error fetching supported symbols:", error);
    }
  }, [apiUrl, apiKey]);

  const convertCurrency = async () => {
    try {
      if (!fromCurrency.trim() || !toCurrency.trim() || !amount.trim()) {
        toast.error('Please fill all fields')
      } else {
        setLoading(true)
        console.log(fromCurrency, toCurrency, amount)
        const res = await axios.get(`${apiUrl2}/${apiKey2}/pair/${fromCurrency}/${toCurrency}/${amount}`);
        setResult(res?.data)
        // const symbols = res?.data?.symbols
        // setSupportedSymbols(Object.entries(symbols))
      }

    } catch (error) {
      console.error("Error converting currency:", error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getSupportedSymbols()
  }, [getSupportedSymbols])

  const addCommas = (num: any) => {
    return num?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
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
              <select  value={fromCurrency}
                onChange={(e) => setFromCurrency(e.target.value)} name="" id="" className="h-[50px] w-full rounded-[10px] bg-white outline-none px-[10px] custom-select ">
                <option value="">Select a Currency</option>
                {supportedSymbols.map(([key], index) => (
                  <option key={index} value={key}>{key}</option>
                ))}
              </select>
            </div>
            <div>
              <p className="mb-[5px] text-white">To</p>
              <select value={toCurrency}
                onChange={(e) => setToCurrency(e.target.value)} name="" id="" className="h-[50px] w-full rounded-[10px] bg-white outline-none px-[10px] custom-select ">
                <option value="">Select a Currency</option>
                {supportedSymbols.map(([key], index) => (
                  <option key={index} value={key}>{key}</option>
                ))}

              </select>
            </div>
            <div>
              <p className="mb-[5px] text-white">Fiat Amount</p>
              <input value={amount} onChange={(e) => setAmount(e.target.value)} name="" id="" placeholder="Enter Amount" className="h-[50px] w-full rounded-[10px] bg-white outline-none px-[10px]">


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
                <p className="text-[60px] font-[700]">{addCommas(result?.conversion_result) || "0"}</p>
                <p className="text-[#141414CC] font-[600] text-[24px]">
                  {supportedSymbols.find(([key]) => key === toCurrency)?.[1] || ""}
                </p>
              </div>
              <p className="text-[#141414CC]">Seamlessly bridge the world of digital and traditional currencies with us today</p>
              <button disabled={loading} onClick={convertCurrency} className="h-[50px] rounded-[10px] mt-[20px] w-full bg-[#162A5F] text-white">
                {loading ? 'Converting...' : 'Convert'}
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default ConverterComp
