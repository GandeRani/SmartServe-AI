"use client";

import {useEffect,useState} from "react";


export default function InsightsPage(){


const [data,setData]=useState<any>(null);



useEffect(()=>{


async function load(){


const res = await fetch(
"/api/admin/insights"
);


const json = await res.json();


setData(json);


}


load();


},[]);




if(!data){

return(

<div className="min-h-screen bg-gray-950 text-white flex items-center justify-center">

Loading AI Insights...

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
md:ml-64
">


<h1 className="
text-4xl
font-bold
mb-10
">

AI Insights 🤖

</h1>





<div className="
grid
grid-cols-1
md:grid-cols-3
gap-6
">



<div className="bg-gray-900 p-6 rounded-xl">

<p className="text-gray-400">

Total Revenue

</p>


<h2 className="
text-4xl
font-bold
text-green-400
">

${data.revenue}

</h2>

</div>






<div className="bg-gray-900 p-6 rounded-xl">

<p className="text-gray-400">

Best Selling Item 🔥

</p>


<h2 className="text-3xl font-bold mt-3">

{data.bestSeller}

</h2>

</div>







<div className="bg-gray-900 p-6 rounded-xl">

<p className="text-gray-400">

AI Status

</p>


<h2 className="
text-2xl
font-bold
text-blue-400
">

Active

</h2>

</div>



</div>








<div className="
mt-8
bg-gray-900
p-6
rounded-xl
">


<h2 className="text-2xl font-bold mb-5">

Inventory Alerts ⚠️

</h2>



{
data.lowStock.length===0 ?


<p className="text-green-400">

All inventory levels are healthy

</p>


:

data.lowStock.map((item:any)=>(


<p key={item.id}
className="text-red-400"
>

{item.name} is running low ({item.quantity} {item.unit})

</p>


))

}



</div>







<div className="
mt-8
bg-gray-900
p-6
rounded-xl
">


<h2 className="text-2xl font-bold">

AI Recommendation 🧠

</h2>


<p className="text-gray-300 mt-3">

Based on current orders, SmartServe AI recommends
maintaining stock for popular menu items and preparing
for upcoming demand.

</p>



</div>




</main>


);


}