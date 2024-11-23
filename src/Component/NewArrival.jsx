import ps5 from "../assets/images/ps5.png"
import amazon from "../assets/images/amazon.png"
import baji from "../assets/images/baji.png"
import Gucci from "../assets/images/Gucci.png"

export default function NewArrival() {
  return (
    <div className="main grid gap-8 grid-cols-4"> 

<div className="bg-black  col-span-2 row-span-2 bg-center">
<img src={ps5} alt="" />
</div>

<div className="bg-black col-span-2">
<img src={baji} alt="" />


</div>
<div className="bg-black col-end-4 bg-center ">
<img src={amazon} alt="" />

</div>

<div className="bg-black   bg-center">
<img src={Gucci} alt="" />

</div>

    </div>
  )
}
