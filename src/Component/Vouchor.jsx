import { RiArrowDropRightLine } from "react-icons/ri";
import MobileImg from '../assets/images/hero.png' 
import { RiAppleFill } from "react-icons/ri";
import { FaArrowRight } from "react-icons/fa";



export default function vouchor() {
  return (
    <>
<div className="flex  w-full margin">
<div className="border-r-[1px]  h-[300px] w-52">
       <ul className=" text-sm font-normal h-62 mt-8">
            <li className="py-3 h-[30px] w-32  flex items-center ">Woman’s Fashion </li>
            <li className="py-3 h-[30px] w-32  flex items-center ">Men’s Fashion </li>
            <li className="py-3 h-[30px] w-32  flex items-center">Electronics</li>
            <li className="py-3 h-[30px] w-32  flex items-center">Home & Lifestyle</li>
            <li className="py-3 h-[30px] w-32  flex items-center">Medicine</li>
            <li className="py-3 h-[30px] w-32  flex items-center">Sports & Outdoor</li>
            <li className="py-3 h-[30px] w-32  flex items-center">Baby’s & Toys</li>
            <li className="py-3 h-[30px] w-32  flex items-center">Groceries & Pets</li>
            <li className="py-3 h-[30px] w-32  flex items-center ">Health & Beauty</li>
        </ul>

</div>

        <div className="h-64 mt-10 ml-10 flex items-center   max-w-[640px]  bg-[#000000] overflow-hidden text-[#FAFAFA]">
          <div className=" flex flex-col h-full ml-10  gap-2 w-72">
          <div className=" flex items-center mt-8 gap-4"><RiAppleFill className="w-10 h-10"/><span className="text-[10px] Poppins  pt-1">iPhone 14 Series</span></div>
<div className="font-semibold inter  text-[35px]  leading  w-52  ">Up to 10% off Voucher</div>
        <div className="flex items-center mt-4 gap-2 underline Poppins text-[10px]">
          <a href="#">Shop Now</a>
          <FaArrowRight />
        </div>
          </div>
          <div className=" bg-center max-h-96 min-w-60">
          <img src={MobileImg} className="" alt="" />

          </div>
        </div>
    
</div>


    
      

 
    </>
  )
}
