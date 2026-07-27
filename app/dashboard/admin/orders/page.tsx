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
      price:number;
    }

  }[];

};




export default function OrdersPage(){


const [orders,setOrders] = useState<Order[]>([]);

const [loading,setLoading] = useState(true);





async function fetchOrders(){


try{


const res = await fetch("/api/admin/orders");


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


await fetch("/api/admin/orders",{

method:"PUT",

headers:{

"Content-Type":"application/json"

},

body:JSON.stringify({

id,
status

})

});


fetchOrders();


}







function statusStyle(status:string){


if(status==="Completed")
return "bg-green-600 text-white";


if(status==="Preparing")
return "bg-blue-600 text-white";


if(status==="Cancelled")
return "bg-red-600 text-white";


return "bg-yellow-500 text-black";


}







if(loading){


return(

<div className="min-h-screen bg-gray-950 text-white flex items-center justify-center">

Loading Orders...

</div>

);


}









return(


<main className="min-h-screen bg-gray-950 text-white pt-20 px-8 pb-10 md:ml-64">



<h1 className="text-4xl font-bold mb-10">

Admin Orders 📦

</h1>







<div className="space-y-6">



{

orders.length===0 ?


<div className="bg-gray-900 p-6 rounded-xl">

No Orders Found

</div>


:


orders.map(order=>(



<div

key={order.id}

className="bg-gray-900 border border-gray-700 rounded-2xl p-6 shadow-lg"

>





<div className="flex justify-between items-center">


<h2 className="text-2xl font-bold">

Order #{order.id}

</h2>



<span

className={`px-4 py-2 rounded-full font-semibold ${statusStyle(order.status)}`}

>

{order.status}

</span>


</div>







<p className="text-gray-400 mt-3">

🕒

{new Date(order.createdAt).toLocaleString()}

</p>









<div className="mt-6">


<h3 className="text-xl font-semibold mb-3">

🍽️ Items

</h3>



{

order.items.map((item,index)=>(


<div

key={index}

className="flex justify-between bg-gray-800 p-3 rounded-lg mb-2"

>


<span>

{item.menu.name}

</span>


<span>

× {item.quantity}

</span>


</div>



))


}



</div>









<div className="mt-6 flex justify-between items-center">


<h2 className="text-2xl font-bold">

Total: ${order.total}

</h2>





<select


value={order.status}


onChange={(e)=>

updateStatus(

order.id,

e.target.value

)

}


className="bg-gray-800 px-4 py-2 rounded-lg"


>


<option>
Pending
</option>


<option>
Preparing
</option>


<option>
Completed
</option>


<option>
Cancelled
</option>



</select>





</div>






</div>



))


}



</div>





</main>


);


}