
import Radio from "../assets/images/Frame 694.png"


export default function Music() {
  return (
    <div className="bg-[#000000] h-[400px] text-white flex ">
<div className="ml-12 h-full  max-w-96 py-12 flex flex-col justify-between ">
  <div className="text-[#00FF66] leading-5">Categories</div>
  <div className=" text-5xl w-96">Enhance Your Music Experience</div>
  <div className='flex text-black gap-5'>

   <ul className="bg-white h-12 w-12 rounded-full z-10 px-2 text-center bg-center flex-col">
      <li className='text-sm h-5 w-5 font-bold '>23</li>
      <li className='text-[8px] text-center'>Days</li>
   </ul>
   
   <ul className="bg-white h-12 w-12 rounded-full z-10 px-2 text-center bg-center flex-col">
      <li className='text-sm h-5 w-5 font-bold '>05</li>
      <li className='text-[8px]  text-center'>Hours</li>
   </ul>
   
   <ul className="bg-white h-12 w-12  rounded-full z-10  text-center  bg-center flex-col">
      <li className='text-sm h-5 w-5 font-bold '>59</li>
      <li className='text-[8px]  text-center'>Minutes</li>
   </ul> 
   
   <ul className="bg-white h-12 w-12 rounded-full z-10  text-center bg-center flex-col">
      <li className='text-sm h-5 w-5 text-center font-bold'>35</li>
      <li className='text-[8px] text-center'>Seconds</li>
   </ul>
   </div>
 <div className="bg-[#00FF66] h-14 w-[171px] text-white bg-center rounded">
<button className="font-semibold">Bay Now!</button>
 </div>
  
</div>
<div className="text-white h-full   w-full bg-center ">
  <img src={Radio} alt="" />
</div>
    </div>
  )
}
