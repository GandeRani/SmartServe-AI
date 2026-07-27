"use client";

import { useEffect, useState } from "react";


type Stats = {
  totalOrders:number;
  totalSales:number;
  users:number;
  menuItems:number;
  pendingOrders:number;
  completedOrders:number;
};



export default function AdminDashboard(){


const [stats,setStats] = useState<Stats>({

totalOrders:0,
totalSales:0,
users:0,
menuItems:0,
pendingOrders:0,
completedOrders:0

});



useEffect(()=>{


async function loadData(){


try{


const res = await fetch("/api/admin/dashboard");


const data = await res.json();


setStats(data);



}
catch(error){

console.log(error);

}



}


loadData();


},[]);







return(


<main
className="
min-h-screen
bg-gray-950
text-white
pt-24
px-6
md:px-10
pb-20
md:ml-64
"
>



<h1
className="
text-4xl
font-bold
mb-10
"
>

Admin Dashboard 🔐

</h1>







<div
className="
grid
grid-cols-1
sm:grid-cols-2
lg:grid-cols-4
gap-6
"
>





<div className="bg-gray-900 border border-gray-800 rounded-xl p-6">

<p className="text-gray-400">

Total Orders

</p>

<h2 className="text-5xl font-bold mt-3">

{stats.totalOrders}

</h2>

</div>








<div className="bg-gray-900 border border-gray-800 rounded-xl p-6">

<p className="text-gray-400">

Total Sales

</p>

<h2 className="
text-5xl
font-bold
mt-3
text-green-400
">

${stats.totalSales}

</h2>

</div>








<div className="bg-gray-900 border border-gray-800 rounded-xl p-6">

<p className="text-gray-400">

Users

</p>

<h2 className="text-5xl font-bold mt-3">

{stats.users}

</h2>

</div>








<div className="bg-gray-900 border border-gray-800 rounded-xl p-6">

<p className="text-gray-400">

Menu Items

</p>

<h2 className="text-5xl font-bold mt-3">

{stats.menuItems}

</h2>

</div>




</div>









<div
className="
grid
grid-cols-1
md:grid-cols-2
gap-6
mt-8
"
>





<div className="
bg-gray-900
border
border-gray-800
rounded-xl
p-6
">


<p className="text-gray-400">

Pending Orders

</p>


<h2 className="
text-4xl
font-bold
mt-3
text-yellow-400
">

{stats.pendingOrders}

</h2>


</div>








<div className="
bg-gray-900
border
border-gray-800
rounded-xl
p-6
">


<p className="text-gray-400">

Completed Orders

</p>


<h2 className="
text-4xl
font-bold
mt-3
text-green-400
">

{stats.completedOrders}

</h2>


</div>




</div>









<div
className="
mt-10
bg-gray-900
border
border-gray-800
rounded-xl
p-8
"
>



<h2
className="
text-3xl
font-bold
mb-4
"
>

AI Insights 🤖

</h2>



<div className="space-y-3 text-gray-300">


<p>
📦 SmartServe AI is monitoring orders, inventory and customer activity.
</p>


<p>
📈 Sales analytics will predict future restaurant performance.
</p>


<p>
⚠️ Inventory alerts will notify low-stock ingredients.
</p>


</div>



</div>







</main>


);


}