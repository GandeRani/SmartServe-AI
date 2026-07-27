"use client";

import Link from "next/link";
import { useEffect, useState } from "react";


export default function Navbar() {


const [cartCount,setCartCount] = useState(0);





async function loadCartCount(){


try{


const res = await fetch("/api/cart");


const data = await res.json();



if(Array.isArray(data)){


const count = data.reduce(

(sum,item)=>

sum + item.quantity,

0

);


setCartCount(count);


}


}

catch(error){


console.log(
"Cart count error",
error
);


}


}







useEffect(()=>{


loadCartCount();



window.addEventListener(

"cartUpdated",

loadCartCount

);



return()=>{


window.removeEventListener(

"cartUpdated",

loadCartCount

);


};



},[]);









return(


<nav

className="
fixed
top-0
left-0
right-0
z-50
bg-white
dark:bg-gray-900
shadow-md
px-6
py-4
"

>



<div

className="
flex
justify-between
items-center
"

>




{/* LOGO */}


<Link

href="/"

className="
text-2xl
font-bold
text-blue-600
"

>

SmartServe AI 🤖

</Link>









{/* MENU */}


<div

className="
flex
gap-5
items-center
text-sm
"

>





<Link

href="/"

className="
dark:text-white
hover:text-blue-500
"

>

Home

</Link>








<Link

href="/menu"

className="
dark:text-white
hover:text-blue-500
"

>

🍽 Menu

</Link>








<Link

href="/cart"

className="
dark:text-white
hover:text-blue-500
"

>

🛒 Cart ({cartCount})

</Link>








<Link

href="/orders"

className="
dark:text-white
hover:text-blue-500
"

>

📦 Orders

</Link>









<Link

href="/kitchen"

className="
dark:text-white
hover:text-blue-500
"

>

👨‍🍳 Kitchen

</Link>









{/* ANALYTICS */}


<Link

href="/dashboard/analytics"

className="
dark:text-white
hover:text-blue-500
"

>

📈 Analytics

</Link>








{/* AI SALES */}


<Link

href="/dashboard/ai-sales"

className="
dark:text-white
hover:text-blue-500
"

>

🤖 AI Sales

</Link>








{/* AI FORECAST */}


<Link

href="/dashboard/demand"

className="
dark:text-white
hover:text-blue-500
"

>

🔮 Forecast

</Link>








{/* ADMIN */}


<Link

href="/admin/login"

className="
dark:text-white
hover:text-blue-500
font-semibold
"

>

🔐 Admin

</Link>





</div>






</div>



</nav>


);


}