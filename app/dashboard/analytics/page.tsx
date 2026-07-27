"use client";

import {useEffect,useState} from "react";
import {
LineChart,
Line,
XAxis,
YAxis,
Tooltip,
CartesianGrid,
ResponsiveContainer
} from "recharts";



export default function AnalyticsPage(){


const [data,setData]=useState<any>(null);



useEffect(()=>{


async function load(){


const res =
await fetch("/api/analytics");


const json =
await res.json();


setData(json);


}


load();


},[]);






if(!data){


return(

<div className="
min-h-screen
bg-gray-950
text-white
flex
items-center
justify-center
">

Loading Analytics 📈

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

Sales Analytics 📈

</h1>







<div className="
grid
grid-cols-1
md:grid-cols-3
gap-6
">


<div className="bg-gray-900 p-6 rounded-xl">

<p className="text-gray-400">
Total Orders
</p>

<h2 className="text-4xl font-bold">

{data.totalOrders}

</h2>

</div>





<div className="bg-gray-900 p-6 rounded-xl">

<p className="text-gray-400">
Total Revenue
</p>

<h2 className="
text-4xl
font-bold
text-green-400
">

${data.totalRevenue}

</h2>

</div>






<div className="bg-gray-900 p-6 rounded-xl">

<p className="text-gray-400">
Average Order Value
</p>

<h2 className="
text-4xl
font-bold
text-blue-400
">

${data.averageOrderValue.toFixed(2)}

</h2>

</div>



</div>








<div className="
mt-10
bg-gray-900
rounded-xl
p-8
">


<h2 className="
text-2xl
font-bold
mb-6
">

Revenue Trend

</h2>






<ResponsiveContainer
width="100%"
height={350}
>


<LineChart data={data.sales}>


<CartesianGrid strokeDasharray="3 3"/>


<XAxis dataKey="date"/>


<YAxis/>


<Tooltip/>




<Line

type="monotone"

dataKey="revenue"

stroke="#22c55e"

strokeWidth={3}

/>



</LineChart>



</ResponsiveContainer>



</div>








<div className="
mt-8
bg-gray-900
rounded-xl
p-8
">


<h2 className="
text-2xl
font-bold
mb-4
">

AI Sales Insight 🤖

</h2>


<p className="text-gray-300">

SmartServe AI is analyzing revenue patterns
and customer orders to predict future restaurant
performance.

</p>


</div>





</main>


);


}