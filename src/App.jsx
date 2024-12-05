import Banner from "../src/Component/Banner"
import Header from "../src/Component/Header"
import Futter from "../src/Component/Futter"

import "./index.css";
import { Routes, Route, Outlet, Link, Navigate } from "react-router-dom"

import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Products from "./pages/Products"
import Login from "./pages/Login"
import ProductDatail from "./pages/ProductDatail";
import { useState } from "react";
{/* //         <Route path="/Contact" element={<Contact/>} /> */}
function App() {
const isLogined = false;  
const [darkMode, setDarkMode] = useState(false);
  return (
    <>



      <Banner/>
      <Header darkMode={darkMode} setDarkMode={setDarkMode}/>
      <Routes>
        <Route path="/" index element={<Home darkMode={darkMode}/>} />
        <Route path="/About" index element={<About/>} />
        <Route path="/products" index element={<Products/>} />
        <Route path="/product/:id" index element={<ProductDatail/>} />
{isLogined ? ( 
  <>
<Route path="/profile" element={<div>My profile page</div>} />

<Route path="/login" element={<Navigate to="/" replace={true}/>} /> 
</>
         ):(
           <>
        <Route path="/Login" element={<Login/>} /> 
        <Route path="*" element={<Navigate to="/login" replace={true}/>} /> 
          </>
        )}

            </Routes>
        
            <Futter />
    </>
  )
}

export default App
