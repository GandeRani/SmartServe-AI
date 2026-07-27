"use client";

import { useState } from "react";


export default function AIChat(){


const [open,setOpen] = useState(false);

const [message,setMessage] = useState("");

const [chat,setChat] = useState<any[]>([]);

const [loading,setLoading] = useState(false);





async function sendMessage(){


if(!message.trim()) return;



const userMessage = message;



setChat(prev=>[

...prev,

{
role:"user",
text:userMessage
}

]);



setMessage("");

setLoading(true);





try{


const res = await fetch(
"/api/chat",
{

method:"POST",

headers:{

"Content-Type":"application/json"

},

body:JSON.stringify({

message:userMessage

})

}

);



const data = await res.json();





setChat(prev=>[

...prev,

{

role:"ai",
text:data.reply

}

]);





}

catch(error){


setChat(prev=>[

...prev,

{

role:"ai",
text:"Something went wrong ❌"

}

]);


}

finally{


setLoading(false);


}


}








return(


<>


{/* Floating Button */}


<button

onClick={()=>setOpen(!open)}

className="
fixed
bottom-6
right-6
bg-blue-600
text-white
w-16
h-16
rounded-full
text-3xl
shadow-xl
z-50
"

>

🤖

</button>








{
open &&


<div

className="
fixed
bottom-24
right-6
w-80
bg-gray-900
text-white
rounded-2xl
shadow-2xl
z-50
border
border-gray-700
"

>



<div className="
p-4
font-bold
border-b
border-gray-700
">

SmartServe AI 🤖

</div>








<div className="
h-80
overflow-y-auto
p-4
space-y-3
">


{

chat.length===0 &&

<p className="text-gray-400">

Ask me about menu, recommendations, sales or inventory.

</p>

}




{

chat.map((item,index)=>(


<div

key={index}

className={

item.role==="user"

?

"text-right"

:

"text-left"

}

>


<span

className={

`
inline-block
px-3
py-2
rounded-xl

${

item.role==="user"

?

"bg-blue-600"

:

"bg-gray-700"

}

`

}

>


{item.text}


</span>



</div>



))


}




{

loading &&

<p className="text-gray-400">

AI thinking...

</p>

}



</div>









<div className="
p-3
border-t
border-gray-700
flex
gap-2
">


<input

value={message}

onChange={(e)=>setMessage(e.target.value)}

onKeyDown={(e)=>{

if(e.key==="Enter")

sendMessage();

}}

placeholder="Ask AI..."

className="
flex-1
bg-gray-800
p-2
rounded-lg
outline-none
"

/>



<button

onClick={sendMessage}

className="
bg-blue-600
px-4
rounded-lg
"

>

Send

</button>


</div>







</div>


}




</>


);


}