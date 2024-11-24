import axios from "axios"
import { useEffect, useState } from "react";
import Card from "../Component/Card";
import '../index.css'

export default function Products(props) {
    


    const [products, setProducts] = useState(null)
    const  api_Product = "https://dummyjson.com/products"
    
    const getProductData = async ()=>{
  const response = await axios(api_Product)
  setProducts(response?.data?.products)
  
}



console.log(products);

useEffect(()=>{
getProductData();
},[])

const [searchterm, setSearchTerm] = useState("")
console.log(searchterm);

const searchProduct = ()=>{
 const result = products?.filter((item)=>{
    return item.title.toLowerCase().includes(searchterm);
  })
  console.log('result',result); 
  return result || []; 
}

const searchResult = searchProduct()

return (

  

<div className="flex flex-wrap gap-5 ">
<input type="search" name="price" id="price"

className=""
onChange={(event)=>{
  // console.log(event.target.value)
  setSearchTerm(event.target.value)

}}
placeholder="Search Your Product"

/>


    {searchResult?.map((item)=>(
      <Card key={item.id}
      Name={item.title} 
 image={item.thumbnail} 
 className1="hidden" 
 Fix={item.discountPercentage}
 Sale={item.price} 
 rating={item.rating}
 />
))}
</div>
    

  )
}
