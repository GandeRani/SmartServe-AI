"use client";

import { useEffect, useState } from "react";


type Order = {

id:number;

total:number;

status:string;

createdAt:string;

items:{
quantity:number;
menu:{
name:string;
};
}[];

};



export default function AdminOrdersPage(){


const [orders,setOrders] = useState<Order[]>([]);



const [loading,setLoading] = useState(true);





async function fetchOrders(){


try{


const res = await fetch(
"/api/admin/orders"
);


const data = await res.json();


setOrders(data);


}

catch(error){

console.log(error);

}

finally{

setLoading(false);

}


}





useEffect(()=>{

fetchOrders();

},[]);






async function updateStatus(

id:number,

status:string

){


await fetch(

"/api/admin/orders",

{

method:"PUT",

headers:{

"Content-Type":"application/json"

},

body:JSON.stringify({

id,

status

})

}

);



fetchOrders();


}







function statusColor(status:string){


if(status==="PLACED")

return "text-yellow-400";



if(status==="PREPARING")

return "text-blue-400";



if(status==="COMPLETED")

return "text-green-400";



if(status==="CANCELLED")

return "text-red-400";



return "text-white";


}







if(loading){


return(

<div className="
min-h-screen
bg-gray-950
text-white
flex
items-center
justify-center
">

Loading Orders...

</div>

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
mb-10
">

👨‍🍳 Admin Orders Dashboard

</h1>







<div className="space-y-6">


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



<h2 className="
text-2xl
font-bold
text-green-400
">

₹{order.total}

</h2>


</div>








<p className="
mt-3
text-gray-400
">

Date:

{new Date(order.createdAt)
.toLocaleDateString()}

</p>








<h3 className="
mt-5
font-bold
text-xl
">

Items 🍔

</h3>





{

order.items.map((item,index)=>(


<div

key={index}

className="
mt-2
text-gray-300
"

>


{item.menu.name}

<br/>


Qty: {item.quantity}


</div>



))


}









<div className="
mt-6
">


<p>

Current Status:

<span className={`
ml-2
font-bold
${statusColor(order.status)}
`}>

{order.status}

</span>


</p>



</div>









<div className="
flex
gap-3
mt-5
flex-wrap
">


<button

onClick={()=>updateStatus(order.id,"PREPARING")}

className="
bg-blue-600
px-4
py-2
rounded-lg
"

>

👨‍🍳 Preparing

</button>







<button

onClick={()=>updateStatus(order.id,"COMPLETED")}

className="
bg-green-600
px-4
py-2
rounded-lg
"

>

✅ Complete

</button>








<button

onClick={()=>updateStatus(order.id,"CANCELLED")}

className="
bg-red-600
px-4
py-2
rounded-lg
"

>

❌ Cancel

</button>



</div>





</div>


))


}



</div>







</main>


);


}