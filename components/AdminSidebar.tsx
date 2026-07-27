"use client";

import Link from "next/link";


export default function AdminSidebar(){


return(

<aside

className="
fixed
top-16
left-0
h-full
w-64
bg-gray-900
text-white
p-6
hidden
md:block
border-r
border-gray-800
"

>


<h2 className="
text-2xl
font-bold
mb-8
">

🔐 Admin Panel

</h2>




<nav className="
space-y-4
">


<Link

href="/admin"

className="
block
p-3
rounded-lg
hover:bg-gray-800
"

>

📊 Dashboard

</Link>





<Link

href="/admin/orders"

className="
block
p-3
rounded-lg
hover:bg-gray-800
"

>

📦 Orders

</Link>







<Link

href="/dashboard/inventory"

className="
block
p-3
rounded-lg
hover:bg-gray-800
"

>

📋 Inventory

</Link>








<Link

href="/dashboard/recommendation"

className="
block
p-3
rounded-lg
hover:bg-gray-800
"

>

🤖 AI Recommendation

</Link>







<Link

href="/dashboard/analytics"

className="
block
p-3
rounded-lg
hover:bg-gray-800
"

>

📈 Analytics

</Link>





</nav>



</aside>


);


}