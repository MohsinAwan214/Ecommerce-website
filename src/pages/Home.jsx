import Vouchor from "../Component/Vouchor";
import Title from "../Component/Title";
import Hero from "../Component/Hero";
import Card from "../Component/Card";
import Button from "../Component/Button";
import Arrow from "../Component/Arrow";
import Categories from "../Component/Categories";
import NewArrival from "../Component/NewArrival";


import GirlJacket from '../assets/images/GirlJacket.png';
import Purse from '../assets/images/Purse.png';
import GameSpeaker from '../assets/images/GameSpeaker.png';
import BookTable from '../assets/images/BookTable.png';


import Dog from '../assets/images/Dog.png';
import Camera from '../assets/images/Camera.png';
import Laptop from '../assets/images/Laptop.png';
import Feshel from '../assets/images/Feshel.png';
import Car from '../assets/images/Car.png';
import Shose from '../assets/images/Shose.png';
import BlackGamePad from '../assets/images/BlackGamePad.png';
import Jacket from '../assets/images/Jacket.png';



import "../index.css";
import Music from "../Component/Music";
import Delivery from "../Component/Delivery";
import { FaArrowUp } from "react-icons/fa6";
import Slider from "../Component/Slider";
import useProduct from "../hooks/useProduct";

export default function Home() {
  const {products} = useProduct("limit=30&skip=80")
  return (
    <>
        <div id="top">
          <Vouchor />
        </div>
      <div className="overflow-hidden  margin">

        <div className="mt-20">
          <Title text="Today’s" className="mb-1" />
          <div className="flex justify-between">
            <Hero />
            <Arrow />
          </div>

         
          <Slider />
           
        </div>

        <div className="border-b-[2px]  flex justify-center  pb-14">
          <Button
            text="View All Products"
            className=" h-14 w-52 text-sm font-medium bg-center mt-7 "
          />
        </div>

        <div className="mt-20 border-b-[2px] pb-14">
          <Title text="Categories" className="mb-1" />
          <div className="flex justify-between">
            <h1 className="font-semibold  pt-2 text-3xl  tracking-wide">
              Browse By Category
            </h1>
            <Arrow />
          </div>
          <div className="mt-10">
            <Categories />
          </div>
        </div>

        <div className="mt-20">
          <Title text="This Month" className="mb-1 " />
          <div className="flex justify-between">
            <h1 className="font-semibold  pt-2 text-3xl  tracking-wide">
              Best Selling Products
            </h1>
            <Button
              text="View All"
              className="h-11  w-28 text-sm font-medium bg-center"
            />
          </div>

          <div className="flex gap-7 mt-10 var bdr">
          {products?.slice(0,4).map((item)=>(
 
            <Card
            key={item.id}
            Name={item.title} 
            image={item.thumbnail} 
            className1="hidden" 
            discountPercentage={item.discountPercentage}
            price={item.price} 
            rating={item.rating}
            
            />
          ))}
          </div>
        </div>

        <div className="mt-28">
          <Music />
        </div>

        <div className="mt-16">
          <Title text="Our Products" className="mb-1  " />
          <div className="flex justify-between">
            <h1 className="font-semibold  pt-2 text-3xl  tracking-wide">
              Explore Our Products
            </h1>
            <Arrow />
          </div>
          <div className="flex gap-7 mt-10 var bdr">
          {products?.slice(4,8).map((item)=>(
 
            <Card
            key={item.id}
            Name={item.title} 
            image={item.thumbnail} 
            className1="hidden" 
            discountPercentage={item.discountPercentage}
            price={item.price} 
            rating={item.rating}
            
            />
          ))}
          </div>
          <div className="flex gap-7 mt-10 var bdr">
          {products?.slice(8,12).map((item)=>(
 
            <Card
            key={item.id}
            Name={item.title} 
            image={item.thumbnail} 
            className1="hidden" 
            discountPercentage={item.discountPercentage}
            price={item.price} 
            rating={item.rating}
            
            />
          ))}
          </div>
          <div className="mt-10">
            <Button
              text="View All Products"
              className="mx-auto h-14 w-52 text-sm font-medium bg-center mt-7"
            />
          </div>
        </div>

        <div className="mt-24 ">
          <div>
            <Title text="Featured" className="mb-1 " />
            <h1 className="font-semibold  pt-2 text-3xl  tracking-wide">
              New Arrival
            </h1>
          </div>

          <div>
            <NewArrival />
          </div>
        </div>

        <div className="mt-36 flex justify-center">
          <Delivery />
        </div>
        <div className="mb-10 bg-[#F5F5F5] flex float-end h-10 w-10 rounded-full bg-center text-2xl">
          <a id="top" href=""><FaArrowUp/></a>
        </div>

        
      </div>
    </>
  );
}
