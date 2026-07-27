import { NextResponse } from "next/server";
import prisma from "@/app/lib/prisma";


export async function GET(){

try{


// Total sales

const sales = await prisma.order.aggregate({

_sum:{
total:true
}

});




// Low stock items

const lowStock = await prisma.inventory.findMany({

where:{
quantity:{
lte:3
}
}

});




// Best selling item

const items = await prisma.orderItem.groupBy({

by:["menuId"],

_sum:{
quantity:true
},

orderBy:{
_sum:{
quantity:"desc"
}
},

take:1

});



let bestSeller = "No Data";



if(items.length > 0){


const menu = await prisma.menuItem.findUnique({

where:{
id:items[0].menuId
}

});


if(menu){

bestSeller = menu.name;

}

}




return NextResponse.json({

revenue:
sales._sum.total || 0,


bestSeller,


lowStock,


message:
"SmartServe AI analyzed restaurant activity successfully"

});


}
catch(error){


console.log(error);


return NextResponse.json(

{
error:"AI Insights failed"
},

{
status:500
}

);


}


}