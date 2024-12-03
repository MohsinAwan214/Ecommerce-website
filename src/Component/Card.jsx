import socalIcon  from '../assets/images/Frame 575.png';
import ReactStars from 'react-stars'
import { IoStarSharp } from "react-icons/io5";



export default function Card(props) {

  const discountPrice = 
  (props.price -
   props.discountPercentage * (props.price / 100)
 ).toFixed(2)
  console.log(discountPrice);
  
  
  return (
    <>
    <div className='card index h-[300px] w-[210px] bg-center group flex-col justify-between  truncate relative'>
     <div className='whiteSmoke rounded h-[190px] w-[200px] relative flex justify-center items-center '>
      <div className={`absolute ${props.className1} text-center`}>Add To Cart</div>
      <img className='h-[60px] absolute right-2 top-2' src={socalIcon} alt="" />         
      <div className={`rounded h-[22px] w-[47px] bg-primary flex justify-center items-center absolute left-3 top-3 text-[12px] ${props.className}`}>{props.text}</div>   
      <div className={`bg-center  h-[120px] w-[120px]`}>
      <img className='group-hover:scale-110 duration-300' src={props.image} alt=""  />
      </div>
    </div>
<div className='h-[84px] w-[201px]  mt-4 '>
<h1 className=' font-medium text-sm leading-6  ml-3'>{props.Name}</h1>
<div className='pt-1 h-6 w-[85px] flex' >
  <span className='price mr-3 font-medium text-sm	 ml-3'>${discountPrice}</span>

  <p className=' line-through del font-medium text-sm ml-3'>${props.price}</p>
 
</div>

<div className='flex gap-3 ml-3'>

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

// import img from "../assets/images/game.png";
// import ReactStars from "react-stars";
// import {Link} from 'react-router-dom'


// export default function ProductCard(Props) {
//   const discountPrice = (
//     Props.price -
//     Props.discountPercentage * (Props.price / 100)
//   ).toFixed(2);

//   return (
//     <Link
//       to={`/product/${Props.id}`}
//       className="group p-3 drop-shadow-md border-2 flex gap-4 flex-col relative bg-[#F5F5F5] w-64 min-h-[350px]"
//     >
//       <div className="discount absolute t-3 left-3 bg-primary w-14 h-6 rounded flex items-center text-xs justify-center text-white ">
//         -{Math.round(Props.discountPercentage)}%
//       </div>

//       <div className="">
//         <img
//           src={Props.image || img}
//           alt="product img"
//           className="m-auto group-hover:scale-110 transition-all duration-300"
//         />
//       </div>

//       <h3 className="font-medium group-hoverop:text-primary transition-all duration-300">
//         {Props.name}
//       </h3>

//       <p className="font-medium ">
//         <span className="text-primary">${discountPrice}</span>{" "}
//         <span className="text-gray-400 line-through">${Props.price}</span>
//       </p>

//       <div>
//         <ReactStars
//           count={5}
//           value={Props.rating}
//           size={24}
//           // color1={"red"}
//           color2={"#db4444"}
//           edit={false}
//         />
//       </div>
//     </Link>
//   );
// }