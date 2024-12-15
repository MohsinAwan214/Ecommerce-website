import { RiArrowDropRightLine } from "react-icons/ri";
import MobileImg from "../assets/images/hero.png";
import { RiAppleFill } from "react-icons/ri";
import { FaArrowRight } from "react-icons/fa";

export default function vouchor({ darkMode }) {
  return (
    <>
      <div className={`flex  w-full min-h-96 justify-between voucher1  ${ darkMode ? "text-white" : ""} md:flex-wrap`}>
        <div className="border-r-[1px]  h-[360px] w-60 voucher3 ">
          <ul
            className=" font-normal h-62    mt-8 flex flex-col gap-2
             
            "
          >
            <li className="py-3 h-[30px] w-32  flex items-center  group  hover:cursor-pointer hover:text-[#db4444]">
              <div className="S_Underline relative inline-block after:bg-[#db4444] group-hover:after:left-0 after:-bottom-1 w-fit group-hover:after:w-[100%] ">
                Woman’s Fashion{" "}
              </div>
            </li>
            <li className="py-3 h-[30px] w-32  flex items-center  group  hover:cursor-pointer hover:text-[#db4444]">
              <div className="S_Underline relative inline-block after:bg-[#db4444] group-hover:after:left-0 after:-bottom-1 w-fit group-hover:after:w-[100%] ">
                Men’s Fashion{" "}
              </div>
            </li>
            <li className="py-3 h-[30px] w-32  flex items-center group  hover:cursor-pointer hover:text-[#db4444]">
              <div className="S_Underline relative inline-block after:bg-[#db4444] group-hover:after:left-0 after:-bottom-1 w-fit group-hover:after:w-[100%] ">
                Electronics
              </div>
            </li>
            <li className="py-3 h-[30px] w-32  flex items-center group  hover:cursor-pointer hover:text-[#db4444]">
              <div className="S_Underline relative inline-block after:bg-[#db4444] group-hover:after:left-0 after:-bottom-1 w-fit group-hover:after:w-[100%] ">
                Home & Lifestyle
              </div>
            </li>
            <li className="py-3 h-[30px] w-32  flex items-center group  hover:cursor-pointer hover:text-[#db4444]">
              <div className="S_Underline relative inline-block after:bg-[#db4444] group-hover:after:left-0 after:-bottom-1 w-fit group-hover:after:w-[100%] ">
                Medicine
              </div>
            </li>
            <li className="py-3 h-[30px] w-32  flex items-center group  hover:cursor-pointer hover:text-[#db4444]">
              <div className="S_Underline relative inline-block after:bg-[#db4444] group-hover:after:left-0 after:-bottom-1 w-fit group-hover:after:w-[100%] ">
                Sports & Outdoor
              </div>
            </li>
            <li className="py-3 h-[30px] w-32  flex items-center group  hover:cursor-pointer hover:text-[#db4444]">
              <div className="S_Underline relative inline-block after:bg-[#db4444] group-hover:after:left-0 after:-bottom-1 w-fit group-hover:after:w-[100%] ">
                Baby’s & Toys
              </div>
            </li>
            <li className="py-3 h-[30px] w-32  flex items-center group  hover:cursor-pointer hover:text-[#db4444]">
              <div className="S_Underline relative inline-block after:bg-[#db4444] group-hover:after:left-0 after:-bottom-1 w-fit group-hover:after:w-[100%] ">
                Groceries & Pets
              </div>
            </li>
            <li className="py-3 h-[30px] w-32  flex items-center  group  hover:cursor-pointer hover:text-[#db4444]">
              <div className="S_Underline relative inline-block after:bg-[#db4444] group-hover:after:left-0 after:-bottom-1 w-fit group-hover:after:w-[100%] ">
                Health & Beauty
              </div>
            </li>
          </ul>
        </div>

        <div className="h-80 flex  voucher2 w-[878px] justify-evenly mt-10 items-center bg-[#000000] overflow-hidden text-[#FAFAFA]">
          <div className=" flex flex-col h-full  gap-2 w-72  justify-center">
            <div className=" flex items-center gap-4">
              <RiAppleFill className="w-12 h-12" />
              <span className="text-[10px] Poppins  pt-1">
                iPhone 14 Series
              </span>
            </div>
            <div className="font-semibold inter  text-[47px]  leading  w-full ">
              Up to 10% off Voucher
            </div>
            <div className="flex items-center mt-4 gap-2 underline Poppins text-[10px]">
              <a href="#">Shop Now</a>
              <FaArrowRight />
            </div>
          </div>
          <div className=" bg-center  w-[400px]">
            <img src={MobileImg} className="" alt="" />
          </div>
        </div>
      </div>
    </>
  );
}
