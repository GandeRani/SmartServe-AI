import { NextResponse } from "next/server";
import prisma from "@/app/lib/prisma";


export async function GET(){

try{


const totalOrders = await prisma.order.count();


const totalSales = await prisma.order.aggregate({

_sum:{
total:true
}

});


const users = await prisma.user.count();


const menuItems = await prisma.menuItem.count();



const pendingOrders = await prisma.order.count({

where:{
status:"Pending"
}

});



const completedOrders = await prisma.order.count({

where:{
status:"Completed"
}

});




return NextResponse.json({

totalOrders,

totalSales:
totalSales._sum.total || 0,

users,

menuItems,

pendingOrders,

completedOrders

});



}
catch(error){

console.log(error);


return NextResponse.json(

{
error:"Dashboard data failed"
},

{
status:500
}

);


}


}