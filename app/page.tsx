"use client";


import Link from "next/link";



export default function Home(){



const features = [


{
icon:"🤖",
title:"AI Food Recommendation",
text:
"SmartServe AI analyzes customer orders and recommends popular dishes automatically."
},


{
icon:"👨‍🍳",
title:"Smart Kitchen Assistant",
text:
"Manage kitchen workflow, prioritize orders and reduce preparation time."
},


{
icon:"📦",
title:"Smart Inventory Prediction",
text:
"AI predicts ingredient demand and alerts restaurants before stock shortages."
},


{
icon:"📈",
title:"Sales Forecasting",
text:
"Predict future revenue and understand restaurant performance using AI analytics."
},


{
icon:"📊",
title:"Business Intelligence",
text:
"Track orders, customers and restaurant growth from one dashboard."
},


{
icon:"💬",
title:"AI Chat Assistant",
text:
"Ask SmartServe AI about menu, recommendations, inventory and sales."
}


];






return(



<main className="
min-h-screen
bg-gray-950
text-white
">






{/* HERO */}



<section className="
grid
md:grid-cols-2
gap-12
items-center
px-10
py-28
bg-gradient-to-br
from-blue-700
via-purple-700
to-indigo-800
">





<div>



<div className="
inline-block
bg-white/20
px-5
py-2
rounded-full
mb-6
">

🚀 AI Powered Restaurant Platform

</div>





<h1 className="
text-5xl
md:text-7xl
font-extrabold
leading-tight
">


SmartServe AI


<br/>


<span className="
text-yellow-300
">

Smart Restaurants,
Smarter Decisions

</span>


</h1>






<p className="
mt-6
text-xl
text-blue-100
max-w-xl
">


An intelligent restaurant ecosystem powered by AI
for ordering, kitchen management, analytics,
recommendations and demand prediction.


</p>







<div className="
flex
gap-5
mt-10
flex-wrap
">


<Link

href="/menu"

className="
bg-white
text-blue-700
px-8
py-4
rounded-xl
font-bold
hover:scale-105
transition
"

>

🍽 Explore Menu

</Link>






<Link

href="/admin/login"

className="
border
border-white
px-8
py-4
rounded-xl
font-bold
hover:bg-white
hover:text-blue-700
transition
"

>

🔐 Admin

</Link>



</div>






</div>









{/* AI PREVIEW */}



<div className="
bg-white/20
backdrop-blur-xl
rounded-3xl
p-8
shadow-2xl
">



<div className="
bg-gray-900
rounded-2xl
p-6
">



<h2 className="
text-2xl
font-bold
">

🤖 SmartServe AI Dashboard

</h2>





<div className="
space-y-4
mt-6
">



<div className="
bg-blue-900
p-4
rounded-xl
">

🍔 Order Management

<p className="text-gray-300">

AI Priority: HIGH

</p>

</div>





<div className="
bg-purple-900
p-4
rounded-xl
">

📦 Inventory Alert

<p className="text-gray-300">

Chicken stock prediction active

</p>

</div>







<div className="
bg-green-900
p-4
rounded-xl
">

📈 Sales Forecast

<p className="text-gray-300">

Future demand prediction enabled

</p>

</div>




</div>



</div>


</div>




</section>










{/* STATS */}



<section className="
grid
md:grid-cols-4
gap-6
px-10
py-16
">



<Stat

number="500+"

text="Orders Processed"

/>


<Stat

number="AI"

text="Smart Recommendations"

/>



<Stat

number="24/7"

text="Restaurant Monitoring"

/>



<Stat

number="100%"

text="Data Driven"

/>



</section>









{/* FEATURES */}



<section className="
px-10
pb-20
">



<h2 className="
text-4xl
font-bold
text-center
mb-12
">

Powerful SmartServe Features 🚀

</h2>





<div className="
grid
md:grid-cols-3
gap-8
">



{

features.map((feature,index)=>(


<div

key={index}

className="
bg-gray-900
rounded-2xl
p-8
border
border-gray-800
hover:border-blue-500
hover:-translate-y-2
transition
"

>



<div className="text-5xl">

{feature.icon}

</div>





<h3 className="
text-2xl
font-bold
mt-5
">

{feature.title}

</h3>





<p className="
text-gray-400
mt-4
">

{feature.text}

</p>



</div>


))


}



</div>



</section>









{/* DASHBOARD LINKS */}



<section className="
px-10
pb-20
">



<div className="
bg-gradient-to-r
from-blue-900
to-purple-900
rounded-3xl
p-10
text-center
">


<h2 className="
text-3xl
font-bold
">

Explore SmartServe AI

</h2>




<div className="
flex
justify-center
gap-5
flex-wrap
mt-8
">


<Link
href="/dashboard/analytics"
className="
bg-white
text-black
px-6
py-3
rounded-xl
font-bold
"
>

📊 Analytics

</Link>





<Link
href="/kitchen"
className="
bg-white
text-black
px-6
py-3
rounded-xl
font-bold
"
>

👨‍🍳 Kitchen

</Link>





<Link
href="/recommendation"
className="
bg-white
text-black
px-6
py-3
rounded-xl
font-bold
"
>

🤖 AI Recommendation

</Link>




</div>


</div>


</section>







</main>


);



}







function Stat({

number,

text

}:{

number:string;

text:string;

}){


return(


<div className="
bg-gray-900
rounded-2xl
p-8
text-center
">


<h2 className="
text-4xl
font-bold
text-blue-400
">

{number}

</h2>


<p className="
mt-3
text-gray-300
">

{text}

</p>


</div>


);


}