import { NextResponse } from "next/server";
import prisma from "@/app/lib/prisma";


export async function GET(){


try{


const orders = await prisma.order.findMany({

orderBy:{

createdAt:"asc"

}

});





// Total Orders

const totalOrders = orders.length;






// Total Revenue

const totalRevenue = orders.reduce(

(sum,order)=>

sum + order.total,

0

);







// Average Order Value

const averageOrderValue =

totalOrders > 0

?

totalRevenue / totalOrders

:

0;









// Revenue grouped by date

const revenueMap:any = {};




orders.forEach((order)=>{


const date = new Date(

order.createdAt

).toLocaleDateString();





if(!revenueMap[date]){


revenueMap[date] = 0;


}





revenueMap[date] += order.total;



});








const sales = Object.entries(

revenueMap

).map(

([date,revenue])=>(


{

date,

revenue

}


)

);









return NextResponse.json({


totalOrders,


totalRevenue,


averageOrderValue,


sales



});







}

catch(error){



console.log(

"Analytics API Error:",

error

);




return NextResponse.json(

{

error:"Analytics failed"

},

{

status:500

}

);



}


}