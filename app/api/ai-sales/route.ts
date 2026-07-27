import { NextResponse } from "next/server";
import prisma from "@/app/lib/prisma";



export async function GET(){


try{


const orders = await prisma.order.findMany({

include:{

items:{

include:{

menu:true

}

}

}

});





// Total revenue

const totalSales = orders.reduce(

(sum,order)=>

sum + order.total,

0

);






// Count popular items

const itemCount:any = {};




orders.forEach(order=>{


order.items.forEach(item=>{


const name =
item.menu.name;



if(!itemCount[name]){

itemCount[name]=0;

}



itemCount[name]+=item.quantity;



});


});







const ranking =
Object.entries(itemCount)

.sort(

(a:any,b:any)=>

b[1]-a[1]

);







const bestSelling =
ranking.length>0

?
ranking[0][0]

:
"No Data";







// Simple AI prediction model

const averageDailySales =
orders.length>0

?

totalSales / orders.length

:

0;





const predictedSales =

Math.round(

averageDailySales * 1.5

);









return NextResponse.json({


totalSales,


predictedSales,


bestSelling,


ranking,


recommendation:

`Based on current order trends, increase stock for ${bestSelling} and prepare ingredients for upcoming demand.`



});





}

catch(error){


console.log(error);


return NextResponse.json(

{

error:"AI prediction failed"

},

{

status:500

}

);


}


}