"use client";

import { useEffect, useState } from "react";


export default function OrdersPage(){


const [orders,setOrders] = useState<any[]>([]);

const [loading,setLoading] = useState(true);




async function loadOrders(){


try{


const res = await fetch(

"/api/orders",

{

cache:"no-store"

}

);



const data = await res.json();


setOrders(data);



}

catch(error){


console.log(
"Orders error:",
error
);


}

finally{


setLoading(false);


}



}






useEffect(()=>{


loadOrders();



const interval=setInterval(()=>{


loadOrders();


},5000);



return ()=>clearInterval(interval);



},[]);







const statusSteps=[

{
name:"PLACED",
label:"Order Placed 🟡"
},

{
name:"PREPARING",
label:"Cooking 👨‍🍳"
},

{
name:"OUT_FOR_DELIVERY",
label:"On The Way 🚚"
},

{
name:"DELIVERED",
label:"Delivered ✅"
}


];









function statusColor(status:string){


if(status==="PLACED")

return "text-yellow-400";


if(status==="PREPARING")

return "text-blue-400";


if(status==="OUT_FOR_DELIVERY")

return "text-purple-400";


if(status==="DELIVERED")

return "text-green-400";


return "text-white";


}








if(loading){


return(

<main className="
min-h-screen
bg-gray-950
text-white
flex
items-center
justify-center
">

<h1 className="text-2xl font-bold">

Loading Orders...

</h1>

</main>

);


}









return(


<main className="
min-h-screen
bg-gray-950
text-white
pt-24
px-6
pb-20
">






<h1 className="
text-4xl
md:text-5xl
font-bold
text-center
">

📦 My Orders

</h1>








{

orders.length===0 ?


(

<div className="
text-center
mt-20
text-xl
text-gray-400
">

No orders found 😔

</div>

)



:


(


<div className="
max-w-4xl
mx-auto
mt-12
">


{

orders.map(order=>(



<div

key={order.id}

className="
bg-gray-900
border
border-gray-800
rounded-2xl
p-6
mb-8
shadow-xl
"

>



<div className="
flex
justify-between
items-center
">


<h2 className="
text-2xl
font-bold
">

Order #{order.id}

</h2>



<span className="
text-green-400
text-2xl
font-bold
">

₹{order.total}

</span>


</div>









{/* STATUS */}


<div className="
mt-8
">


<h3 className="
font-bold
text-xl
mb-6
">

🚚 Order Tracking

</h3>





<div className="
grid
grid-cols-2
md:grid-cols-4
gap-5
">



{

statusSteps.map((step,index)=>{


const currentIndex =
statusSteps.findIndex(

s=>s.name===order.status

);



const active =
index<=currentIndex;



return(


<div

key={step.name}

className="
text-center
"

>


<div

className={`
w-12
h-12
mx-auto
rounded-full
flex
items-center
justify-center
font-bold
text-white

${
active
?
"bg-green-600"
:
"bg-gray-700"
}

`}

>


{index+1}


</div>




<p className="
text-xs
mt-3
text-gray-300
">

{step.label}

</p>



</div>


);


})


}



</div>



</div>









{/* ITEMS */}



<div className="
mt-8
">


<h3 className="
font-bold
text-xl
">

🍔 Items

</h3>



{

order.items.map((item:any)=>(


<div

key={item.id}

className="
flex
justify-between
mt-3
text-gray-300
"

>


<span>

{item.menu.name}

</span>


<span>

Qty: {item.quantity}

</span>


</div>


))


}



</div>









<div className="
mt-8
border-t
border-gray-700
pt-5
">


<p>

<b>Current Status:</b>


<span className={`

ml-2
font-bold

${statusColor(order.status)}

`}>

{order.status.replaceAll("_"," ")}

</span>


</p>




<p className="
mt-3
text-gray-400
">


📅

{new Date(
order.createdAt
).toLocaleDateString()}


</p>



</div>







</div>



))


}



</div>


)


}



</main>


);


}