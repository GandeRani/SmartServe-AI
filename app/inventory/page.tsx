"use client";

import { useState } from "react";


export default function InventoryPage(){


const [items,setItems] = useState([

{
 name:"Cheese",
 stock:5,
 unit:"kg"
},

{
 name:"Chicken",
 stock:2,
 unit:"kg"
},

{
 name:"Tomato",
 stock:1,
 unit:"kg"
},

{
 name:"Flour",
 stock:10,
 unit:"kg"
},

{
 name:"Burger Buns",
 stock:20,
 unit:"pcs"
}


]);





function getStatus(stock:number){


if(stock <= 1){

return "Critical 🔴";

}


if(stock <= 3){

return "Low 🟡";

}


return "Good 🟢";


}






function reduceStock(index:number){


const updated=[...items];


if(updated[index].stock>0){

updated[index].stock -= 1;

}


setItems(updated);


}








return(


<main

className="
min-h-screen
bg-gray-100
dark:bg-gray-950
pt-24
px-10
pb-10
">


<h1

className="
text-5xl
font-bold
dark:text-white
">

📦 Inventory Dashboard

</h1>




<p className="mt-3 dark:text-gray-300">

Smart inventory monitoring with AI prediction

</p>







<div

className="
grid
md:grid-cols-3
gap-8
mt-10
">


{

items.map((item,index)=>(


<div

key={index}

className="
bg-white
dark:bg-gray-900
rounded-2xl
shadow-lg
p-6
">


<h2 className="text-2xl font-bold">

{item.name}

</h2>



<p className="mt-4 text-xl">

Stock:

<b>
{" "}
{item.stock} {item.unit}
</b>

</p>




<p className="mt-3">

Status:

<span className="ml-2 font-bold">

{getStatus(item.stock)}

</span>

</p>





<button

onClick={()=>reduceStock(index)}

className="
mt-5
bg-red-600
text-white
px-4
py-2
rounded-xl
">

Use Ingredient

</button>



</div>


))


}



</div>









<div

className="
mt-12
bg-white
dark:bg-gray-900
rounded-2xl
shadow-lg
p-8
">


<h2

className="
text-3xl
font-bold
">

🤖 AI Stock Prediction

</h2>




<p className="mt-5">

🔥 Pizza orders increasing. Increase cheese and flour stock.

</p>


<p className="mt-3">

⚠️ Chicken stock may finish soon.

</p>


<p className="mt-3">

📈 Recommended:

Order 5 kg chicken and 3 kg cheese.

</p>



</div>







</main>


);


}