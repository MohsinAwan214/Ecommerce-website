import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function useProduct(query) {
    const  api_Product = `https://dummyjson.com/products?${query}`
const [products, setProducts] = useState(null)

const getProductData = async ()=>{
const response = await axios(api_Product)
setProducts(response?.data?.products)

};
console.log(products);
useEffect(()=>{
getProductData();
},[])
  return (
    {
      products
    }
  )
}
