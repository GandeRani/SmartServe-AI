"use client";

import { useEffect, useState } from "react";


export default function DemandPage(){


const [data,setData] = useState<any>(null);



useEffect(()=>{


async function loadForecast(){


const res = await fetch(
"/api/demand-forecast"
);


const json = await res.json();


setData(json);


}



loadForecast();



},[]);







if(!data){


return(

<main className="
min-h-screen
bg-gray-950
text-white
flex
items-center
justify-center
">


<h1 className="text-2xl">

Loading AI Forecast 🤖

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
mb-10
">

🤖 AI Demand Forecast

</h1>







<div className="
grid
md:grid-cols-2
gap-6
">






{

data.forecast.map(

(item:any,index:number)=>(


<div

key={index}

className="
bg-gray-900
rounded-xl
p-8
border
border-gray-700
"

>


<h2 className="
text-3xl
font-bold
">

{item.item}

</h2>




<p className="
mt-5
text-gray-400
">

Current Orders

</p>


<p className="
text-4xl
font-bold
">

{item.currentOrders}

</p>







<p className="
mt-5
text-gray-400
">

Expected Growth

</p>



<p className="
text-4xl
font-bold
text-green-400
">

📈 {item.expectedGrowth}

</p>



</div>


)


)

}





</div>









<div className="
mt-10
bg-gray-900
rounded-xl
p-8
border
border-yellow-500
">



<h2 className="
text-2xl
font-bold
mb-4
">

⚠️ Inventory Recommendation

</h2>




<p className="
text-gray-300
text-lg
">

{data.recommendation}

</p>



</div>









<div className="
mt-10
bg-gray-900
rounded-xl
p-8
border
border-blue-500
">



<h2 className="
text-2xl
font-bold
mb-4
">

🧠 AI Insight

</h2>




<p className="
text-gray-300
">

{data.insight}

</p>




</div>







</main>


);


}