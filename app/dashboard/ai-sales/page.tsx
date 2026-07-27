"use client";

import { useEffect, useState } from "react";


export default function AISalesPage(){


const [data,setData] = useState<any>(null);


const [loading,setLoading] = useState(true);





async function loadAI(){


try{


const res = await fetch(
"/api/ai-sales"
);


const json = await res.json();


setData(json);


}

catch(error){

console.log(error);

}

finally{

setLoading(false);

}


}






useEffect(()=>{


loadAI();


},[]);







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

Loading AI Prediction...

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

🤖 AI Sales Prediction

</h1>







<div className="
grid
md:grid-cols-3
gap-6
">





<div className="
bg-gray-900
rounded-xl
p-6
">

<p className="text-gray-400">

Total Revenue

</p>


<h2 className="
text-5xl
font-bold
mt-3
text-green-400
">

₹{data.totalSales}

</h2>


</div>








<div className="
bg-gray-900
rounded-xl
p-6
">

<p className="text-gray-400">

Tomorrow Prediction

</p>


<h2 className="
text-5xl
font-bold
mt-3
text-blue-400
">

₹{data.predictedSales}

</h2>


</div>









<div className="
bg-gray-900
rounded-xl
p-6
">

<p className="text-gray-400">

Best Selling Item 🔥

</p>


<h2 className="
text-3xl
font-bold
mt-4
text-yellow-400
">

{data.bestSelling}

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

📊 Order Ranking

</h2>





{

data.ranking.map(

(item:any,index:number)=>(


<div

key={index}

className="
flex
justify-between
border-b
border-gray-700
py-3
"

>


<span>

{index+1}. {item[0]}

</span>



<span className="
text-green-400
">

{item[1]} orders

</span>



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
border-blue-500
">



<h2 className="
text-2xl
font-bold
mb-4
">

🧠 AI Recommendation

</h2>



<p className="
text-gray-300
text-lg
">

{data.recommendation}

</p>



</div>







</main>


);


}