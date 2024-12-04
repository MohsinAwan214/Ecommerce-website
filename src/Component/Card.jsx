import { Link } from 'react-router-dom';
import socalIcon  from '../assets/images/Frame 575.png';
import ReactStars from 'react-stars'




export default function Card(props) {

  const discountPrice = 
  (props.price -
   props.discountPercentage * (props.price / 100)
 ).toFixed(2)
  console.log(discountPrice);
  
  
  return (
    <>
    <Link to={`/product/${props.id}`} className='card index h-[300px] w-[210px] bg-center group flex-col justify-between  truncate relative'>
     <div className='whiteSmoke rounded h-[190px] w-[200px] relative flex justify-center items-center '>
      <div className={`absolute ${props.className1} text-center`}>Add To Cart</div>
      <img className='h-[60px] absolute right-2 top-2' src={socalIcon} alt="" />         
      <div className={`rounded h-[22px] w-[47px] bg-primary flex justify-center items-center absolute left-3 top-3 text-white text-[12px] ${props.className}`}>-{Math.round(props.discountPercentage)}%</div>   
      <div className={`bg-center  h-[120px] w-[120px]`}>
      <img className='group-hover:scale-110 duration-300' src={props.image} alt=""  />
      </div>
    </div>
<div className='h-[84px] w-[201px]  mt-4 px-1 flex flex-col flex-wrap'>
<h1 className=' font-semibold text-[13px] leading-6 '>{props.Name}</h1>
<div className='pt-1 h-6 w-[85px] flex' >
  <span className='price mr-3 font-medium text-sm	 '>${discountPrice}</span>

  <p className=' line-through del font-medium text-sm '>${props.price}</p>
 
</div>

<div className='flex gap-3'>

<div>

  <ReactStars
  count={5}
  // onChange={ratingChanged}
  size={24}
  edit={false}
  color2={`#fff`} />
  </div>
  <div className='lead  font-semibold mt-[10px]  text-[15px]  leading-5 '>
    <span>({props.rating})</span>
    </div>
  </div>
</div>


</Link >


    </>
  )
}

