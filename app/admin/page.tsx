"use client";

import Link from "next/link";
import { motion } from "framer-motion";


export default function Home(){


const features=[

{
icon:"🤖",
title:"AI Recommendation",
text:"Personalized food suggestions based on customer orders and preferences."
},

{
icon:"📈",
title:"Sales Prediction",
text:"Predict future revenue trends and understand restaurant performance."
},

{
icon:"📦",
title:"Smart Inventory",
text:"AI detects low stock ingredients and predicts future demand."
},

{
icon:"👨‍🍳",
title:"Smart Kitchen",
text:"AI helps chefs prioritize orders and reduce preparation time."
},

{
icon:"📊",
title:"Business Intelligence",
text:"Track restaurant growth using real-time analytics."
},

{
icon:"💬",
title:"AI Assistant",
text:"Ask SmartServe AI about menu, sales and inventory."
}

];



const stats=[

{
number:"500+",
label:"Orders Managed",
color:"text-blue-400"
},

{
number:"AI",
label:"Demand Prediction",
color:"text-green-400"
},

{
number:"24/7",
label:"Smart Monitoring",
color:"text-yellow-400"
},

{
number:"100%",
label:"Data Driven",
color:"text-purple-400"
}

];





return(

<main
className="
min-h-screen
bg-gray-950
text-white
overflow-hidden
"
>


{/* HERO */}

<section
className="
pt-32
px-8
pb-24
text-center
"
>


<motion.div

initial={{
opacity:0,
y:40
}}

animate={{
opacity:1,
y:0
}}

transition={{
duration:0.8
}}

className="
max-w-5xl
mx-auto
"

>



<div
className="
inline-block
bg-blue-500/20
border
border-blue-500
rounded-full
px-5
py-2
mb-8
"
>

🤖 AI Powered Restaurant Intelligence

</div>





<h1
className="
text-5xl
md:text-7xl
font-extrabold
leading-tight
"
>

SmartServe AI

<br/>

<span
className="
text-blue-500
"
>

The Future of Smart Restaurants

</span>


</h1>





<p
className="
mt-8
text-xl
text-gray-300
max-w-3xl
mx-auto
"
>

An intelligent restaurant management platform powered by AI
recommendations, demand forecasting, sales prediction and
smart inventory optimization.

</p>





<div
className="
flex
justify-center
gap-5
mt-10
flex-wrap
"
>


<Link

href="/menu"

className="
bg-blue-600
hover:bg-blue-700
hover:scale-105
transition
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
hover:scale-105
transition
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


</motion.div>


</section>









{/* STATS */}


<section
className="
px-8
pb-20
"
>


<div
className="
max-w-6xl
mx-auto
grid
grid-cols-1
md:grid-cols-4
gap-6
"
>


{

stats.map((stat,index)=>(


<motion.div

key={index}

initial={{
opacity:0,
y:50
}}

whileInView={{
opacity:1,
y:0
}}

transition={{
duration:0.5,
delay:index*0.1
}}

whileHover={{
scale:1.05
}}

className="
bg-gray-900
rounded-2xl
p-8
text-center
border
border-gray-800
"

>


<h2
className={`
text-4xl
font-bold
${stat.color}
`}
>

{stat.number}

</h2>


<p
className="
text-gray-400
mt-2
"
>

{stat.label}

</p>


</motion.div>


))

}


</div>


</section>









{/* FEATURES */}


<section
className="
px-8
pb-24
"
>


<h2
className="
text-4xl
font-bold
text-center
mb-12
"
>

Powerful AI Features 🚀

</h2>





<div
className="
max-w-6xl
mx-auto
grid
md:grid-cols-3
gap-8
"
>


{

features.map((feature,index)=>(


<motion.div

key={index}

initial={{
opacity:0,
y:50
}}

whileInView={{
opacity:1,
y:0
}}

transition={{
duration:0.5,
delay:index*0.1
}}

whileHover={{
y:-10
}}

className="
bg-gray-900
p-8
rounded-2xl
border
border-gray-800
hover:border-blue-500
transition
"

>


<div
className="
text-5xl
"
>

{feature.icon}

</div>



<h3
className="
text-2xl
font-bold
mt-5
"
>

{feature.title}

</h3>



<p
className="
text-gray-400
mt-4
"
>

{feature.text}

</p>


</motion.div>


))

}


</div>


</section>









{/* WORKFLOW */}


<section
className="
px-8
pb-24
"
>


<motion.div

initial={{
opacity:0
}}

whileInView={{
opacity:1
}}

className="
max-w-5xl
mx-auto
bg-gradient-to-r
from-blue-900
to-purple-900
rounded-3xl
p-10
"

>


<h2
className="
text-3xl
font-bold
text-center
mb-8
"
>

How SmartServe AI Works ⚡

</h2>



<div
className="
grid
md:grid-cols-4
gap-6
text-center
"
>


{

[
["🛒","Customer Orders"],
["🧠","AI Analysis"],
["📊","Prediction"],
["🚀","Better Decisions"]
].map((item,index)=>(


<div key={index}>


<div
className="
text-5xl
"
>

{item[0]}

</div>


<p
className="
mt-3
"
>

{item[1]}

</p>


</div>


))

}


</div>


</motion.div>


</section>









{/* CTA */}


<section
className="
px-8
pb-20
text-center
"
>


<h2
className="
text-4xl
font-bold
"
>

Ready to Build the Restaurant of Tomorrow?

</h2>


<p
className="
text-gray-400
mt-5
text-lg
"
>

Experience AI powered restaurant management with SmartServe AI.

</p>




<Link

href="/menu"

className="
inline-block
mt-8
bg-blue-600
hover:bg-blue-700
hover:scale-105
transition
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