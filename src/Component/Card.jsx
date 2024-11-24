import socalIcon  from '../assets/images/Frame 575.png';
import ReactStars from 'react-stars'
import { IoStarSharp } from "react-icons/io5";



export default function Card(props) {

  const discountPrice = props.Sale - (props.Fix) * (props.Sale / 100).toFixed(2)
  
  
  return (
    <>
    <div className=' card h-[300px] w-[210px]  bg-center  flex-col justify-between  truncate relative'>
     <div className='whiteSmoke rounded h-[190px]  w-[200px] relative flex justify-center items-center '>
      <div className={`absolute ${props.className1} text-center`}>Add To Cart</div>
      <img className='h-[60px] absolute right-2 top-2' src={socalIcon} alt="" />         
      <div className={`rounded h-[22px] w-[47px]  flex justify-center items-center absolute left-3 top-3 text-[12px] ${props.className}`}>{props.text}</div>   
      <div className={`bg-center  h-[120px] w-[120px] ${props.hight}`}>
      <img className='' src={props.image} alt="" />
      </div>
    </div>
<div className='h-[84px] w-[201px]  mt-4  '>
<h1 className=' font-medium text-sm leading-6 h-6 w-[201px]'>{props.Name}</h1>
<p className='pt-1 h-6 w-[85px]' >
  <span className='price mr-3 font-medium text-sm	'>{discountPrice}{props.pr}</span>
  <del>
  <span className='del font-medium text-sm'>{props.Sale}</span>
  </del>
</p>

<div className='flex gap-3'>

<div>

  <ReactStars
  count={5}
  // onChange={ratingChanged}
  size={24}
  edit={false}
  value={props.rating}
  color2={'#FFAD33'} />
  </div>
  <div className='lead  font-semibold mt-[10px]  text-[15px]  leading-5 '>
    <span>({props.rating})</span>
    </div>
  </div>
</div>


</div>


    </>
  )
}
