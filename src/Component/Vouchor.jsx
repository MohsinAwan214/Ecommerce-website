import { RiArrowDropRightLine } from "react-icons/ri";
import MobileImg from '../assets/images/hero.png' 
import { RiAppleFill } from "react-icons/ri";
import { FaArrowRight } from "react-icons/fa";



export default function vouchor() {
  return (
    <>
<div className="flex  w-full margin voucher1">
<div className="border-r-[1px]  h-[300px] w-52 voucher3 ">
       <ul className=" text-sm font-normal h-62 mt-8">
            <li className="py-3 h-[30px] w-32  flex items-center  group  hover:cursor-pointer hover:text-[#db4444]"><div className="S_Underline relative inline-block after:bg-[#db4444] group-hover:after:left-0 after:-bottom-1 w-fit group-hover:after:w-[100%] ">Woman’s Fashion </div></li>
            <li className="py-3 h-[30px] w-32  flex items-center  group  hover:cursor-pointer hover:text-[#db4444]"><div className="S_Underline relative inline-block after:bg-[#db4444] group-hover:after:left-0 after:-bottom-1 w-fit group-hover:after:w-[100%] ">Men’s Fashion </div></li>
            <li className="py-3 h-[30px] w-32  flex items-center group  hover:cursor-pointer hover:text-[#db4444]"><div className="S_Underline relative inline-block after:bg-[#db4444] group-hover:after:left-0 after:-bottom-1 w-fit group-hover:after:w-[100%] ">Electronics</div></li>
            <li className="py-3 h-[30px] w-32  flex items-center group  hover:cursor-pointer hover:text-[#db4444]"><div className="S_Underline relative inline-block after:bg-[#db4444] group-hover:after:left-0 after:-bottom-1 w-fit group-hover:after:w-[100%] ">Home & Lifestyle</div></li>
            <li className="py-3 h-[30px] w-32  flex items-center group  hover:cursor-pointer hover:text-[#db4444]"><div className="S_Underline relative inline-block after:bg-[#db4444] group-hover:after:left-0 after:-bottom-1 w-fit group-hover:after:w-[100%] ">Medicine</div></li>
            <li className="py-3 h-[30px] w-32  flex items-center group  hover:cursor-pointer hover:text-[#db4444]"><div className="S_Underline relative inline-block after:bg-[#db4444] group-hover:after:left-0 after:-bottom-1 w-fit group-hover:after:w-[100%] ">Sports & Outdoor</div></li>
            <li className="py-3 h-[30px] w-32  flex items-center group  hover:cursor-pointer hover:text-[#db4444]"><div className="S_Underline relative inline-block after:bg-[#db4444] group-hover:after:left-0 after:-bottom-1 w-fit group-hover:after:w-[100%] ">Baby’s & Toys</div></li>
            <li className="py-3 h-[30px] w-32  flex items-center group  hover:cursor-pointer hover:text-[#db4444]"><div className="S_Underline relative inline-block after:bg-[#db4444] group-hover:after:left-0 after:-bottom-1 w-fit group-hover:after:w-[100%] ">Groceries & Pets</div></li>
            <li className="py-3 h-[30px] w-32  flex items-center  group  hover:cursor-pointer hover:text-[#db4444]"><div className="S_Underline relative inline-block after:bg-[#db4444] group-hover:after:left-0 after:-bottom-1 w-fit group-hover:after:w-[100%] ">Health & Beauty</div></li>
        </ul>

</div>

        <div className="h-64 mt-10 ml-10 flex items-center voucher2  max-w-[640px]  bg-[#000000] overflow-hidden text-[#FAFAFA]">
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
