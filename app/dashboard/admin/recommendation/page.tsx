"use client";

import { useEffect, useState } from "react";


export default function RecommendationPage(){


const [data,setData] = useState<any>(null);



useEffect(()=>{


async function load(){


try{


const res = await fetch("/api/recommendation");


const json = await res.json();


setData(json);


}
catch(error){

console.log(error);

}


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
text-xl
">

Loading AI Recommendations 🤖...

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

AI Food Recommendation 🤖🍽️

</h1>







{/* Popular Item */}


<div className="
bg-gray-900
border
border-gray-800
rounded-xl
p-8
">


<h2 className="
text-2xl
font-bold
mb-4
">

🔥 Most Popular Item

</h2>



<p className="
text-5xl
font-bold
text-yellow-400
">

{data.popularItem}

</p>



</div>









{/* AI Combo Recommendation */}


<div className="
mt-8
bg-gray-900
border
border-gray-800
rounded-xl
p-8
">


<h2 className="
text-2xl
font-bold
mb-4
">

AI Combo Recommendation 🧠

</h2>




<p className="
text-xl
text-blue-400
">

{data.recommendation}

</p>





{
data.confidence &&

<p className="
mt-5
text-green-400
font-bold
text-lg
">

Confidence:
{data.confidence}%

</p>

}



</div>









{/* Order Ranking */}



<div className="
mt-8
bg-gray-900
border
border-gray-800
rounded-xl
p-8
">


<h2 className="
text-2xl
font-bold
mb-5
">

Order Ranking 📊

</h2>






{

data.ranking.length === 0 ?


<p className="text-gray-400">

No order data available

</p>



:


data.ranking.map(

(item:any,index:number)=>(


<div

key={index}

className="
flex
justify-between
border-b
border-gray-800
py-4
"


>


<span className="
font-semibold
">

#{index+1} {item[0]}

</span>




<span className="
text-green-400
font-bold
">

{item[1]} orders

</span>



</div>


)


)

}





</div>







{/* AI Explanation */}



<div className="
mt-8
bg-gray-900
border
border-gray-800
rounded-xl
p-8
">


<h2 className="
text-2xl
font-bold
mb-4
">

How SmartServe AI Works 🤖

</h2>



<p className="
text-gray-300
leading-7
">

SmartServe AI analyzes previous customer orders,
finds frequently purchased food combinations,
and recommends popular item pairings to improve
restaurant sales and customer experience.

</p>



</div>





</main>


);


}