import { FaTruckFast } from "react-icons/fa6";
import { SlEarphonesAlt } from "react-icons/sl";
import { MdOutlineVerifiedUser } from "react-icons/md";
export default function Delivery({darkMode}) {
  return (
    <div className='flex justify-between mb-28  w-[760px] delievery'>
        <div className='h-38 w-56 bg-center flex-col'>
            <div className='h-14 w-14 border-[8px] border-[#2F2E30] border-opacity-40  rounded-full bg-center'>
            <div className='h-10 w-10 text-2xl bg-black  text-white bg-center rounded-full'>
                <FaTruckFast/>
            </div>
            </div>


            <div className={`text-center mt-5 ${darkMode ? "text-white" : ""}`}>
        <h1 className='font-semibold text-[18px]'>FREE AND FAST DELIVERY</h1>
        <span className='text-[13px] leading-tight'>Free delivery for all orders over $140</span>
            </div>

        </div>
{/* 2 */}

        <div className={`h-38 w-56  bg-center flex-col ${darkMode ? "text-white" : ""}`}>
            <div className='h-14 w-14 border-[8px] border-[#2F2E30] border-opacity-40  rounded-full bg-center'>
            <div className='h-10 text-[20px] w-10 bg-black  text-white bg-center rounded-full'>
                <SlEarphonesAlt/>
            </div>
            </div>


            <div className={`text-center mt-5 ${darkMode ? "text-white" : ""}`}>
        <h1 className='font-semibold text-[18px]'>24/7 CUSTOMER SERVICE</h1>
        <span className='text-[13px] leading-tight'>Friendly 24/7 customer support</span>
            </div>

        </div>
        {/* 3 */}


        <div className={`h-38 w-56  bg-center flex-col ${darkMode ? "text-white" : ""}`}>
            <div className='h-14 w-14 border-[8px] border-[#2F2E30] border-opacity-40  rounded-full bg-center'>
            <div className='h-10 w-10  bg-black text-2xl text-white bg-center rounded-full'>
                <MdOutlineVerifiedUser/>
            </div>
            </div>


            <div className='text-center mt-5'>
        <h1 className='font-semibold text-[18px]'>MONEY BACK GUARANTEE</h1>
        <span className='text-[13px] leading-tight'>We reurn money within 30 days</span>
            </div>

        </div>
        </div>
   
  );
};
