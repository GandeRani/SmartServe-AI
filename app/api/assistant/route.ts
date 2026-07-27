import { NextResponse } from "next/server";
import prisma from "@/app/lib/prisma";


export async function POST(request: Request) {


  try {


    const body = await request.json();


    const message = body.message.toLowerCase();



    let reply = "";




    // TOTAL ORDERS

    if(
      message.includes("order") &&
      !message.includes("revenue")
    ){


      const totalOrders =
        await prisma.order.count();



      const preparingOrders =
        await prisma.order.count({

          where:{
            status:"PREPARING"
          }

        });



      reply =
      `📦 Total Orders: ${totalOrders}
      
👨‍🍳 Preparing Orders: ${preparingOrders}`;



    }





    // REVENUE

    else if(

      message.includes("revenue") ||
      message.includes("sales") ||
      message.includes("money")

    ){


      const orders =
        await prisma.order.findMany();



      const revenue =
        orders.reduce(

          (sum,order)=>
          sum + order.total,

          0

        );



      reply =
      `💰 Total Revenue: $${revenue}
      
Based on ${orders.length} orders.`;



    }







    // STATUS

    else if(

      message.includes("preparing") ||
      message.includes("pending")

    ){



      const preparing =
        await prisma.order.count({

          where:{

            status:"PREPARING"

          }

        });



      reply =
      `👨‍🍳 Currently ${preparing} orders are being prepared.`;



    }







    // DELIVERED

    else if(

      message.includes("delivered")

    ){



      const delivered =
        await prisma.order.count({

          where:{

            status:"DELIVERED"

          }

        });



      reply =
      `✅ Delivered Orders: ${delivered}`;



    }







    // POPULAR ITEMS

    else if(

      message.includes("popular") ||
      message.includes("best") ||
      message.includes("item")

    ){



      const items =
        await prisma.orderItem.findMany({

          include:{

            menu:true

          }

        });



      const count:any = {};



      items.forEach((item)=>{


        const name =
        item.menu.name;



        count[name] =
        (count[name] || 0)
        +
        item.quantity;



      });




      const popular =
      Object.entries(count)
      .sort(
        (a:any,b:any)=>
        b[1]-a[1]
      )[0];



      if(popular){


        reply =
        `🍽️ Most ordered item:
        
${popular[0]} (${popular[1]} orders)`;

      }

      else{


        reply =
        "No order data available yet.";

      }



    }







    // INVENTORY

    else if(

      message.includes("inventory") ||
      message.includes("stock")

    ){



      reply =
      `📦 AI Suggestion:

Monitor ingredients for popular dishes.
Increase preparation during peak hours.
Track cheese, chicken and vegetables stock.`;



    }






    else{


      reply =
      `🤖 I can help with:

📦 Orders
💰 Revenue
👨‍🍳 Preparing orders
✅ Delivered orders
🍽️ Popular items
📦 Inventory suggestions`;



    }





    return NextResponse.json({

      reply:reply

    });




  }


  catch(error:any){


    console.log(
      "ASSISTANT ERROR:",
      error.message
    );



    return NextResponse.json(

      {
        error:error.message
      },

      {
        status:500
      }

    );


  }


}
