"use client";

import Link from "next/link";



export default function Home(){


return(


<main className="
min-h-screen
bg-gray-950
text-white
">





{/* HERO SECTION */}


<section className="
pt-32
px-8
pb-20
text-center
">


<div className="
max-w-5xl
mx-auto
">



<div className="
inline-block
bg-blue-500/20
border
border-blue-500
rounded-full
px-5
py-2
mb-8
">

🤖 AI Powered Restaurant Intelligence

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
text-blue-500
">

The Future of Smart Restaurants

</span>


</h1>





<p className="
mt-8
text-xl
text-gray-300
max-w-3xl
mx-auto
">


An intelligent restaurant management platform that uses
AI recommendations, demand forecasting, sales prediction
and smart inventory optimization.


</p>









<div className="
flex
justify-center
gap-5
mt-10
flex-wrap
">


<Link

href="/menu"

className="
bg-blue-600
hover:bg-blue-700
px-8
py-4
rounded-xl
font-bold
text-lg
"

>

🍽 Explore Menu

</Link>







<Link

href="/admin/login"

className="
border
border-gray-600
hover:bg-gray-800
px-8
py-4
rounded-xl
font-bold
text-lg
"

>

🔐 Admin Dashboard

</Link>



</div>




</div>


</section>









{/* STATS */}


<section className="
px-8
pb-20
">


<div className="
max-w-6xl
mx-auto
grid
grid-cols-1
md:grid-cols-4
gap-6
">





<div className="
bg-gray-900
rounded-2xl
p-8
text-center
border
border-gray-800
">

<h2 className="
text-4xl
font-bold
text-blue-400
">

500+

</h2>


<p className="text-gray-400 mt-2">

Orders Managed

</p>


</div>








<div className="
bg-gray-900
rounded-2xl
p-8
text-center
border
border-gray-800
">

<h2 className="
text-4xl
font-bold
text-green-400
">

AI

</h2>


<p className="text-gray-400 mt-2">

Demand Prediction

</p>


</div>








<div className="
bg-gray-900
rounded-2xl
p-8
text-center
border
border-gray-800
">

<h2 className="
text-4xl
font-bold
text-yellow-400
">

24/7

</h2>


<p className="text-gray-400 mt-2">

Smart Monitoring

</p>


</div>







<div className="
bg-gray-900
rounded-2xl
p-8
text-center
border
border-gray-800
">

<h2 className="
text-4xl
font-bold
text-purple-400
">

100%

</h2>


<p className="text-gray-400 mt-2">

Data Driven

</p>


</div>





</div>


</section>









{/* FEATURES */}


<section className="
px-8
pb-20
">


<h2 className="
text-4xl
font-bold
text-center
mb-12
">

Powerful AI Features 🚀

</h2>





<div className="
max-w-6xl
mx-auto
grid
md:grid-cols-3
gap-8
">





<div className="
bg-gray-900
p-8
rounded-2xl
border
border-gray-800
hover:border-blue-500
transition
">


<h3 className="
text-2xl
font-bold
">

🤖 AI Recommendation

</h3>


<p className="
text-gray-400
mt-4
">

Personalized food suggestions based on customer
orders and preferences.

</p>


</div>








<div className="
bg-gray-900
p-8
rounded-2xl
border
border-gray-800
hover:border-green-500
transition
">


<h3 className="
text-2xl
font-bold
">

📈 Sales Prediction

</h3>


<p className="
text-gray-400
mt-4
">

Predict future revenue trends and understand
restaurant performance.


</p>


</div>








<div className="
bg-gray-900
p-8
rounded-2xl
border
border-gray-800
hover:border-yellow-500
transition
">


<h3 className="
text-2xl
font-bold
">

📦 Smart Inventory

</h3>


<p className="
text-gray-400
mt-4
">

AI detects low stock ingredients and predicts
future demand.


</p>


</div>





</div>


</section>









{/* AI WORKFLOW */}



<section className="
px-8
pb-20
">


<div className="
max-w-5xl
mx-auto
bg-gradient-to-r
from-blue-900
to-purple-900
rounded-3xl
p-10
">


<h2 className="
text-3xl
font-bold
mb-8
text-center
">

How SmartServe AI Works ⚡

</h2>





<div className="
grid
md:grid-cols-4
gap-6
text-center
">



<div>

<div className="
text-4xl
">

🛒

</div>

<p className="mt-3">

Customer Orders

</p>

</div>





<div>

<div className="
text-4xl
">

🧠

</div>

<p className="mt-3">

AI Analysis

</p>

</div>





<div>

<div className="
text-4xl
">

📊

</div>

<p className="mt-3">

Prediction

</p>

</div>





<div>

<div className="
text-4xl
">

🚀

</div>

<p className="mt-3">

Better Decisions

</p>

</div>




</div>


</div>


</section>









{/* FINAL CTA */}


<section className="
px-8
pb-20
text-center
">


<h2 className="
text-4xl
font-bold
">

Ready to Build the Restaurant of Tomorrow?

</h2>



<p className="
text-gray-400
mt-5
text-lg
">

Experience AI powered restaurant management with SmartServe AI.

</p>





<Link

href="/menu"

className="
inline-block
mt-8
bg-blue-600
px-10
py-4
rounded-xl
font-bold
"

>

Start Ordering 🚀

</Link>




</section>







</main>


);


}