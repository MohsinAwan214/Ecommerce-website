
import '../index.css'




export default function Hero() {



  return (
   <>
<div className='flex  justify-between'>


<div className='flex gap-11 items-center '>
   <div className=''>
   <span className='font-semibold bg-center pt-2 text-3xl fontInter tracking-wide'>Flash Sales</span>
   </div>

   <div className='flex'>
   <ul>
      <li className='text-[10px] font-medium text-center'>Days</li>
      <li className='text-3xl font-bold px-2'>03</li>
   </ul>
   <span className=' flex text-2xl mt-4'>:</span>
   <ul>
      <li className='text-[10px] font-medium text-center'>Hours</li>
      <li className='text-3xl font-bold px-2'>23</li>
   </ul>
   <span className=' flex text-2xl mt-4'>:</span>
   <ul>
      <li className='text-[10px] font-medium text-center'>Minutes</li>
      <li className='text-3xl font-bold px-2'>16</li>
   </ul>
   <span className=' flex text-2xl mt-4'>:</span>
   <ul>
      <li className='text-[10px] font-medium text-center'>Months</li>
      <li className='text-3xl font-bold px-2'>56</li>
   </ul>
   </div>


</div>



  
</div>
 
 
   </>
  
  )
}
