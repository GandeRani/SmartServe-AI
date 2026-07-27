"use client";

import { useEffect, useState } from "react";


type Order = {

id:number;

total:number;

status:string;

createdAt:string;

items:{
id:number;
quantity:number;
menu:{
name:string;
};
}[];

};



export default function KitchenPage(){


const [orders,setOrders] = useState<Order[]>([]);

const [loading,setLoading] = useState(true);







async function loadOrders(){


try{


const res = await fetch(

"/api/kitchen",

{

cache:"no-store"

}

);



const data = await res.json();


setOrders(data);



}

catch(error){


console.log(
"Kitchen loading error",
error
);


}

finally{


setLoading(false);


}



}







useEffect(()=>{


loadOrders();



const interval = setInterval(()=>{


loadOrders();


},5000);




return ()=>clearInterval(interval);



},[]);









async function updateStatus(

id:number,

status:string

){


try{


await fetch(

`/api/orders/${id}`,

{

method:"PATCH",

headers:{

"Content-Type":"application/json"

},

body:JSON.stringify({

status

})

}

);



loadOrders();



}

catch(error){


console.log(
"Status update error",
error
);


}


}








function priority(status:string){


if(status==="PLACED")

return (

<span className="
bg-red-500
px-3
py-1
rounded-full
text-white
">

HIGH 🔴

</span>

);



if(status==="PREPARING")

return (

<span className="
bg-yellow-500
px-3
py-1
rounded-full
text-white
">

MEDIUM 🟡

</span>

);



return (

<span className="
bg-green-600
px-3
py-1
rounded-full
text-white
">

LOW 🟢

</span>

);



}









function statusColor(status:string){


if(status==="PLACED")

return "text-red-400";


if(status==="PREPARING")

return "text-yellow-400";


if(status==="OUT_FOR_DELIVERY")

return "text-blue-400";


return "text-green-400";


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

<h1 className="
text-2xl
font-bold
">

Loading Kitchen...

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
px-8
pb-20
md:ml-64
">






<h1 className="
text-4xl
font-bold
">

👨‍🍳 Smart Kitchen Dashboard

</h1>






<p className="
text-gray-400
mt-3
">

AI powered kitchen order management

</p>








{

orders.length===0 ?


(

<div className="
mt-10
bg-gray-900
p-8
rounded-xl
">

No Active Orders 🍽️

</div>

)



:


(


<div className="
grid
md:grid-cols-3
gap-6
mt-10
">





{

orders.map(order=>(



<div

key={order.id}

className="
bg-gray-900
border
border-gray-800
rounded-xl
p-6
shadow-lg
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



{priority(order.status)}


</div>







<h3 className="
mt-5
font-bold
text-lg
">

🍔 Items

</h3>






{

order.items.map(item=>(


<p

key={item.id}

className="
text-gray-300
mt-2
"

>

{item.menu.name}

×

{item.quantity}

</p>


))

}







<p className="
mt-5
text-xl
font-bold
">

💰 ₹{order.total}

</p>







<p className="
mt-3
">

Status:

<span className={`
ml-2
font-bold
${statusColor(order.status)}
`}>

{order.status}

</span>

</p>








<div className="
mt-6
flex
gap-3
">




{

order.status==="PLACED" &&

<button

onClick={()=>updateStatus(

order.id,

"PREPARING"

)}

className="
bg-yellow-500
px-4
py-2
rounded-lg
font-bold
"

>

👨‍🍳 Start Cooking

</button>


}







{

order.status==="PREPARING" &&

<button

onClick={()=>updateStatus(

order.id,

"OUT_FOR_DELIVERY"

)}

className="
bg-blue-600
px-4
py-2
rounded-lg
font-bold
"

>

🚚 Ready

</button>


}







{

order.status==="OUT_FOR_DELIVERY" &&

<button

onClick={()=>updateStatus(

order.id,

"DELIVERED"

)}

className="
bg-green-600
px-4
py-2
rounded-lg
font-bold
"

>

✅ Delivered

</button>


}



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