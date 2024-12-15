import { FaRegUser } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { GrCart } from "react-icons/gr";
import { FiSearch } from "react-icons/fi";
import logo from "../assets/logo/logo.svg";
import { LuMenu } from "react-icons/lu";
import { IoClose } from "react-icons/io5";
import { useState } from "react";
import { Link } from "react-router-dom";
import  "../index.css"
import { IoSunnyOutline } from "react-icons/io5";
import { BsFillMoonFill } from "react-icons/bs";

const links = [
  { title: "Home", link: "/" },
  { title: "About", link: "about" },
  { title: "Contact us", link: "Contact" },
  
];

export default function Header({darkMode, setDarkMode}) {
  const [isHumbergerOpen, setisHumbergerOpen] = useState(false);
  const isLogin = false;
  const navLinks =
    "capitalize S_Underline relative inline-block after:bg-[#db4444] hover:text-[#db4444] hover:after:left-0 after:-bottom-1 w-fit hover:after:w-[100%]";

  return (
    <>
      <div className={ ` transition-color duration-300 border-b-[1px] ${darkMode ? "bg-slate-900" : ""}`}>
        <div className="h-24   margin justify-between relative flex max-w-full items-center">
<Link to={'/'}>
        <img src={logo} alt="" />
</Link>

        <div className=" bg-[#F5F5F5] rounded w-60 h-10 bg-center px-3 ">
          <input
            type="search"
            className="bg-transparent w-full outline-none text-sm"
            placeholder="What are you looking for?"
            />
          <FiSearch className="text-3xl" />
        </div>

        <ul className={`transition-color duration-300 hidden md:flex gap-16 ${darkMode ? "text-white" : ""}`}>
          {links.map((item, i) => (
            <li onClick={()=>setisHumbergerOpen(false)} className={navLinks} key={i}>
              <Link to={item.link}>{item.title}</Link>
            </li>
          ))}

          {!isLogin ? (
            <li className={navLinks}>
              <Link to="/Login">Login</Link>
            </li>
          ) : null}
        </ul>

        <button
          onClick={() => setisHumbergerOpen(!isHumbergerOpen)}
          className="md:hidden text-4xl order-1 "
          >
          {isHumbergerOpen ? <IoClose /> : <LuMenu />}
        </button>
        {isHumbergerOpen && (
          <ul className=" absolute top-24 w-full md:hidden bg-gray-200 p-6 z-10 gap-3 flex flex-col">
            {links.map((item, i) => (
              <li onClick={()=>setisHumbergerOpen(false)} className={navLinks} key={i}>
                <Link to={item.link}>{item.title}</Link>
              </li>
            ))}
            {!isLogin ? (
              <li className={navLinks}>
                <Link to="/Login">Login</Link>
              </li>
            ) : null}
          </ul>
        )}
        <div className="bg-center text-2xl gap-3">
          <button onClick={()=>{

setDarkMode(!darkMode)


          }} className= {`transition duration-300 ${darkMode ? "text-white" : ""}`}>
            {darkMode ? 
            <IoSunnyOutline/>
            :
          <BsFillMoonFill />
          }
          </button>
          {isLogin ? (
            <>
              <FaRegHeart />
              <GrCart />
            </>
          ) : null}

          <Link to={'/profile'} className="bg-primary rounded-full w-8 h-8 bg-center overflow-hidden text-base text-white">
            {isLogin ? (
              <img
              src="https://avatars.githubusercontent.com/u/179931221?s=400&u=f4766fee283ab2f99aec0d2a67e3731ec09a2c88&v=4"
                alt=""
              />
            ) : (
              <FaRegUser />
            )}
          </Link>
        </div>
      </div>
            </div>
    </>
  );
}
