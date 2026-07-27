import { NextResponse } from "next/server";
import prisma from "@/app/lib/prisma";


export async function GET(){


try{


const orders = await prisma.order.findMany({

where:{

status:{

in:[

"PLACED",

"PREPARING"

]

}

},

include:{


items:{


include:{


menu:true


}


}


},


orderBy:{


createdAt:"desc"


}


});



return NextResponse.json(orders);



}

catch(error){


console.log(error);


return NextResponse.json(

{

error:"Failed to load kitchen orders"

},

{

status:500

}

);


}


}