"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";


export default function AdminLogin(){


const router = useRouter();


const [password,setPassword] = useState("");

const [error,setError] = useState("");

const [loading,setLoading] = useState(false);





async function login(){


setLoading(true);

setError("");



try{


const res = await fetch(

"/api/admin/login",

{

method:"POST",

headers:{

"Content-Type":"application/json"

},

body:JSON.stringify({

password

})

}

);





const data = await res.json();





console.log(data);





if(data.success){


/*
  Create cookie for middleware
*/

document.cookie =
"adminAuth=true; path=/";



router.push("/admin");



}

else{


setError(
"Invalid password"
);


}



}

catch(error){


console.log(error);


setError(
"Something went wrong"
);


}

finally{


setLoading(false);


}


}








return(


<main className="
min-h-screen
bg-gray-950
text-white
flex
items-center
justify-center
px-5
">



<div className="
bg-gray-900
border
border-gray-800
p-8
rounded-xl
w-full
max-w-md
shadow-xl
">





<h1 className="
text-3xl
font-bold
mb-6
text-center
">

🔐 Admin Login

</h1>







<input


type="password"


placeholder="Enter Admin Password"


className="
w-full
bg-gray-800
p-3
rounded-lg
mb-4
outline-none
"


value={password}


onChange={(e)=>
setPassword(e.target.value)
}


/>








{
error &&

<p className="
text-red-400
mb-4
">

{error}

</p>

}









<button


onClick={login}


disabled={loading}


className="
bg-blue-600
hover:bg-blue-700
px-5
py-3
rounded-lg
w-full
font-semibold
"


>


{
loading
?
"Checking..."
:
"Login"
}


</button>






</div>



</main>


);


}