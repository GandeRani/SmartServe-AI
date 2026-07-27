import { NextResponse } from "next/server";
import prisma from "@/app/lib/prisma";


export async function GET(){

try{


const orders = await prisma.order.findMany({

select:{
total:true,
createdAt:true
},

orderBy:{
createdAt:"asc"
}

});



// Calculate total sales

const totalSales = orders.reduce(

(sum,order)=>sum + order.total,

0

);




// Group sales by date

const salesMap:any = {};



orders.forEach(order=>{


const date =
new Date(order.createdAt)
.toLocaleDateString();



if(!salesMap[date]){

salesMap[date]=0;

}


salesMap[date]+=order.total;


});




const salesData = Object.keys(salesMap).map(date=>({

date,

sales:salesMap[date]

}));




// Simple AI prediction

const averageSales =
orders.length > 0
?
totalSales / orders.length
:
0;



const prediction =
Math.round(
averageSales * 5
);





const growth =
totalSales > 0
?
Math.round(
((prediction-totalSales)/totalSales)*100
)
:
0;





return NextResponse.json({

totalSales,

orders:orders.length,

salesData,

prediction,

growth


});



}
catch(error){


console.log(error);


return NextResponse.json(

{
error:"Sales analytics failed"
},

{
status:500
}

);


}


}