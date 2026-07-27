"use client";

import {useEffect,useState} from "react";


export default function SalesPage(){


const [data,setData]=useState<any>(null);



useEffect(()=>{


async function load(){


const res=await fetch(
"/api/admin/sales"
);


const json=await res.json();


setData(json);


}


load();


},[]);





if(!data){

return(

<div className="min-h-screen bg-gray-950 text-white flex items-center justify-center">

Loading Sales Analytics...

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

Current Revenue

</p>


<h2 className="text-4xl font-bold text-green-400">

${data.totalSales}

</h2>


</div>






<div className="bg-gray-900 p-6 rounded-xl">


<p className="text-gray-400">

AI Prediction 🤖

</p>


<h2 className="text-4xl font-bold text-blue-400">

${data.prediction}

</h2>


</div>







<div className="bg-gray-900 p-6 rounded-xl">


<p className="text-gray-400">

Growth

</p>


<h2 className="text-4xl font-bold text-purple-400">

+{data.growth}%

</h2>


</div>




</div>







<div className="
mt-10
bg-gray-900
rounded-xl
p-6
">


<h2 className="
text-2xl
font-bold
mb-6
">

Daily Sales

</h2>





{

data.salesData.map(
(item:any)=>(


<div 
key={item.date}
className="
flex
justify-between
border-b
border-gray-800
py-4
"
>


<span>

{item.date}

</span>


<span className="text-green-400 font-bold">

${item.sales}

</span>



</div>


)

)

}





</div>






<div className="
mt-8
bg-gray-900
rounded-xl
p-6
">


<h2 className="text-2xl font-bold">

AI Insight 🧠

</h2>


<p className="text-gray-300 mt-3">

Based on previous order patterns,
SmartServe AI predicts future restaurant
sales and helps optimize inventory planning.

</p>


</div>





</main>


);


}