import { useSelector } from "react-redux";

export default function AddToCart() {
  const darkMode = useSelector((state) => state.darkMode.darkMode);
  return (
    <div className={` ${darkMode ? "bg-slate-900 " : ""}`} >

    <div className={`margin ${darkMode ? "bg-slate-900 text-white" : ""} `}>
      <div className=" flex flex-col gap-10 ">
        <div className="flex  h-5 w-28 justify-between">
          <span className="opacity-50 ">Home</span>
          <span>/</span>
          <span>Cart</span>
        </div>

        <div className="flex h-20 items-center justify-between px-10  shadow">
          <span>Product</span>
          <span>Price</span>
          <span>Quantity</span>
          <span>Subtotal</span>
        </div>
        <div className="flex h-24 items-center  justify-between px-10 shadow">
          <span>Product</span>
          <span>$650</span>
          <span className="h-11 w-16 text-center ">
            <input
              type="number"
              className="h-11 w-16 bdr rounded p-2"
              placeholder="01"
            />
          </span>

          <span>$650</span>
        </div>
        <div className="flex h-24 items-center  justify-between px-10 shadow">
          <span>Product</span>
          <span>$550</span>
          <span className="h-11 w-16 text-center ">
            <input
              type="number"
              className="h-11 w-16 bdr rounded p-2"
              placeholder="01"
            />
          </span>

          <span>$1100</span>
        </div>
      </div>
      <div className="h-14 w-full flex justify-between mt-6">
        <div className="h-14 w-52 bdr bg-center font-medium rounded">
          Return To Shop
        </div>
        <div className="h-14 w-52 bdr bg-center font-medium rounded">
          Update Cart
        </div>
      </div>

      <div className="h-80 bdr w-full">
        <div className=" h-14 w-[527px] flex justify-between">
          <input
            type="text"
            className="h-14 bdr w-[300px]  rounded px-5"
            placeholder="Coupon Code"
          />
          <button className="w-52 h-14 rounded  bg-primary text-white">
            Apply Coupon
          </button>
        </div>

<div className="w-[470px] h-80 bdr">
<h2></h2>
<span></span>
<span></span>
<span></span>
</div>

      </div>
    </div>
    </div>
  );
}
