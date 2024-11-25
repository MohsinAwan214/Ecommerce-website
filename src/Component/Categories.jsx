import { CiMobile4 } from "react-icons/ci";
import { PiDesktopLight } from "react-icons/pi";
import { IoWatchOutline } from "react-icons/io5";
import { PiCameraLight } from "react-icons/pi";
import { PiHeadphonesLight } from "react-icons/pi";
import { VscGame } from "react-icons/vsc";

import "../index.css"

export default function Categories() {
  return (
    <div className=" flex  gap-6 var">
      <div className="h-28 w-32 bg-center flex-col gap-4  border-[1px] border-[#0000004D]">
        <CiMobile4 className="h-12 w-12  " />
        <span className="font-normal">Phone</span>
      </div>
      <div className="h-28 w-32 bg-center flex-col gap-4   border-[1px] border-[#0000004D]">
        <PiDesktopLight className="h-12 w-12 " />
        <span className="font-normal">Computer</span>
      </div>
      <div className="h-28 w-32 bg-center flex-col gap-4   border-[1px] border-[#0000004D]">
        <IoWatchOutline className="h-12 w-12  " />
        <span className="font-normal">SmartWatch</span>
      </div>
      <div className="h-28 w-32 bg-center flex-col gap-4 border-[1px]  border-[#0000004D]">
        <PiCameraLight className="h-12 w-12 " />
        <span className="font-normal">Camera</span>
      </div>
      <div className="h-28 w-32 bg-center flex-col gap-4 border-[1px]  border-[#0000004D]">
        <PiHeadphonesLight className="h-12 w-12 " />
        <span className="font-normal">HeadPhone</span>
      </div>
      <div className="h-28 w-32 bg-center flex-col gap-4 border-[1px]  border-[#0000004D]">
        <VscGame className="h-12 w-12 " />
        <span className="font-normal">Gaming</span>
      </div>
    </div>
  );
}
