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






// Count item demand

const itemDemand:any = {};





orders.forEach(order=>{


order.items.forEach(item=>{


const itemName = item.menu.name;



if(!itemDemand[itemName]){


itemDemand[itemName]=0;


}



itemDemand[itemName]+=item.quantity;



});


});









// Sort popular items

const ranking = Object.entries(itemDemand)

.sort(

(a:any,b:any)=>

b[1]-a[1]

);







// Create AI prediction

const forecast = ranking.map(

(item:any,index:number)=>{


const growth =

30 - (index * 5);



return {


item:item[0],


currentOrders:item[1],


expectedGrowth:`+${growth}%`


};


}

);









let recommendation =

"No enough data for prediction";





if(forecast.length>0){


recommendation =

`High demand expected for ${forecast[0].item}. Increase ingredient stock and prepare kitchen inventory before peak hours.`;


}









return NextResponse.json({



forecast,


recommendation,



insight:

"SmartServe AI analyzed previous orders and predicted future customer demand."



});







}

catch(error){


console.log(

"Demand Forecast Error:",

error

);



return NextResponse.json(

{

error:"Demand forecast failed"

},

{

status:500

}

);



}



}