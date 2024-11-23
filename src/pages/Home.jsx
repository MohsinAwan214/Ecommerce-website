import Vouchor from "../Component/Vouchor";
import Title from "../Component/Title";
import Hero from "../Component/Hero";
import Card from "../Component/Card";
import Button from "../Component/Button";
import Arrow from "../Component/Arrow";
import Categories from "../Component/Categories";
import NewArrival from "../Component/NewArrival";

import gamepadimage from '../assets/images/game.png';
import Keybord from '../assets/images/Keybord.png';
import Lcd from '../assets/images/Lcd.png';
import Chear from '../assets/images/Chear.png';
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


export default function Home() {
  return (
    <>
        <div>
          <Vouchor />
        </div>
      <div className="margin  overflow-hidden ">

        <div className="mt-20">
          <Title text="Today’s" className="mb-1" />
          <div className="flex justify-between">
            <Hero />
            <Arrow />
          </div>
          <div className="flex gap-7 mt-10">
            <Card image={gamepadimage} className="discount " text="-40%" Name="HAVIT HV-G92 Gamepad" Fix="$120" Sale="$160" Rate="88" className1="hidden"/>
            <Card image={Keybord} className="discount bg-black" text="-40%" Name="AK-900 Wired Keyboard" Fix="$960" Sale="$960" Rate="75" className1="text-white pt-[4px] text-sm  h-[30px] w-[198px]  top-[158px] bg-black"/>
            <Card image={Lcd} className="discount " text="-40%" Name="IPS LCD Gaming Monitor" Fix="$370" Sale="$400" Rate="99"  className1="hidden"/>
            <Card image={Chear} className="discount " text="-40%" Name="S-Series Comfort Chair " Fix="$375" Sale="$400" Rate="99" className1="hidden"/>
          </div>
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

          <div className="flex gap-7 mt-10">
            <Card image={GirlJacket} className="hidden" Name="The north coat" Fix="$260" Sale="$360" Rate="65" className1="hidden"/>
            <Card image={Purse} className="hidden" Name="Gucci duffle bag" Fix="$960" Sale="$1160" Rate="65" className1="hidden"/>
            <Card image={GameSpeaker} className="hidden" Name="RGB liquid CPU Cooler" Fix="$160" Sale="$170" Rate="65" className1="hidden"/>
            <Card image={BookTable} className="hidden" Name="Small BookSelf" Fix="$160" Rate="65" className1="hidden"/>
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
          <div className="flex gap-7 mt-10">
            <Card image={Dog} className="hidden" Name="Breed Dry Dog Food" Fix="$100" Rate="35" className1="hidden"/>
            <Card image={Camera }className="hidden" Name="CANON EOS DSLR Camera" Fix="$360" Rate="95" className1="text-white  h-[30px] w-[198px] pt-[4px] text-sm top-[158px] bg-black"/>
            <Card image={Laptop} className="hidden" Name="ASUS FHD Gaming Laptop" Fix="$700" Rate="325" className1="hidden"/> 
            <Card image={Feshel} className="hidden" Name="Curology Product Set " Fix="$500" Rate="145" className1="hidden"/>
          </div>
          <div className="flex gap-7 mt-10">
            <Card image={Car} className="bgGreen "  text='New' Name="Kids Electric Car" Fix="$960" Rate="65" className1="hidden"/>
            <Card image={Shose} className="hidden" Name="Jr. Zoom Soccer Cleats" Fix="$1160" Rate="35" className1="hidden"/>
            <Card image={BlackGamePad} className="bgGreen" text='New' Name="Jr. Zoom Soccer Cleats" Fix="$660" Rate="55" className1="hidden"/>
            <Card image={Jacket} className="hidden" Name="Quilted Satin Jacket" Fix="$660" Rate="55" className1="hidden"/>
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

        
      </div>
    </>
  );
}
