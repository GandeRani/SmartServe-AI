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



const combo:any = {};

const popularity:any = {};



// Analyze orders

orders.forEach(order=>{


const items = order.items.map(
(item)=>item.menu.name
);



// popularity count

items.forEach(item=>{


if(!popularity[item]){

popularity[item]=0;

}

popularity[item]++;


});




// combo learning

items.forEach(mainItem=>{


items.forEach(otherItem=>{


if(mainItem !== otherItem){



const key =
`${mainItem}|${otherItem}`;



if(!combo[key]){

combo[key]=0;

}


combo[key]++;



}


});


});


});







// Most popular item

const popularItem =
Object.keys(popularity)
.sort(
(a,b)=>
popularity[b]-popularity[a]
)[0]
||
"No orders";







// Find best combo

const bestCombo =
Object.keys(combo)
.sort(
(a,b)=>
combo[b]-combo[a]
)[0];






let recommendation =
"No recommendations yet";

let confidence = 0;



if(bestCombo){


const parts =
bestCombo.split("|");



recommendation =
`${parts[0]} is often ordered with ${parts[1]}`;



confidence =
Math.min(
100,
combo[bestCombo]*50
);



}





return NextResponse.json({

popularItem,

recommendation,

confidence,

ranking:Object.entries(popularity)


});



}
catch(error){


console.log(error);



return NextResponse.json(

{
error:"AI recommendation failed"
},

{
status:500
}

);


}


}